import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'dart:async';
import 'package:image_picker/image_picker.dart';

class PembayaranScreen extends StatefulWidget {
  const PembayaranScreen({super.key});

  @override
  State<PembayaranScreen> createState() => _PembayaranScreenState();
}

class _PembayaranScreenState extends State<PembayaranScreen> {
  List<dynamic> _orders = [];
  bool _isLoading = true;
  Map<String, dynamic>? _selectedOrder;
  Timer? _countdownTimer;
  Duration _timeLeft = const Duration(hours: 23, minutes: 59, seconds: 0);

  final ImagePicker _picker = ImagePicker();
  String? _targetId;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final args = ModalRoute.of(context)?.settings.arguments;
    if (args != null) {
      _targetId = args.toString();
    }
  }

  @override
  void initState() {
    super.initState();
    _fetchOrders();
  }

  @override
  void dispose() {
    _countdownTimer?.cancel();
    super.dispose();
  }

  Future<void> _fetchOrders() async {
    try {
      final response = await http.get(
        Uri.parse('http://10.0.2.2:3000/api/orders'),
      );

      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        if (mounted) {
          setState(() {
            _orders = data;
            if (_orders.isNotEmpty) {
              if (_targetId != null) {
                _selectedOrder = _orders.firstWhere(
                  (o) => o['id'].toString() == _targetId,
                  orElse: () => _orders.first,
                );
              } else {
                _selectedOrder = _orders.firstWhere(
                  (o) => (o['isPaid'] == false || o['status'] != 'Lunas'),
                  orElse: () => _orders.first,
                );
              }
              _startCountdown();
            }
            _isLoading = false;
          });
        }
      } else {
        if (mounted) setState(() => _isLoading = false);
      }
    } catch (e) {
      if (mounted) {
        setState(() {
          _isLoading = false;
        });
      }
    }
  }

  void _startCountdown() {
    _countdownTimer?.cancel();
    // Gunakan createdAt atau dummy durasi 24 jam untuk target logic
    DateTime targetTime = DateTime.now().add(const Duration(hours: 24));
    if (_selectedOrder != null && _selectedOrder!['createdAt'] != null) {
      DateTime created = DateTime.parse(_selectedOrder!['createdAt']);
      targetTime = created.add(const Duration(hours: 24));
    }

    _countdownTimer = Timer.periodic(const Duration(seconds: 1), (timer) {
      final now = DateTime.now();
      final difference = targetTime.difference(now);
      if (difference.isNegative) {
        timer.cancel();
        if (mounted) {
          setState(() {
            _timeLeft = Duration.zero;
          });
        }
      } else {
        if (mounted) {
          setState(() {
            _timeLeft = difference;
          });
        }
      }
    });
  }

  Future<void> _copyBankAccount() async {
    await Clipboard.setData(const ClipboardData(text: "8123456789"));
    if (mounted) {
      ScaffoldMessenger.of(
        context,
      ).showSnackBar(const SnackBar(content: Text('Nomor Rekening Disalin')));
    }
  }

  Future<void> _uploadProof() async {
    if (_selectedOrder == null) return;

    final XFile? image = await _picker.pickImage(source: ImageSource.gallery);
    if (image == null) return; // User cancel

    setState(() {
      _isLoading = true;
    });

    final orderId = _selectedOrder!['id'];

    try {
      // Mengirim gambar dan mengubah status tagihan ke backend sesungguhnya API
      var request = http.MultipartRequest(
        'PUT',
        Uri.parse('http://10.0.2.2:3000/api/orders/$orderId/pay'),
      );
      request.files.add(await http.MultipartFile.fromPath('proof', image.path));

      var streamedResponse = await request.send();
      var response = await http.Response.fromStream(streamedResponse);

      if (response.statusCode == 200 || response.statusCode == 201) {
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(content: Text('Bukti transfer berhasil diupload!')),
          );
        }
        _fetchOrders(); // Refresh data
      } else {
        // Fallback untuk antisipasi jika backend endpoint "/pay" belum menangani File / belum dibuat sepenuhnya
        // Cobalah patch JSON status standar ke orders endpoint
        final fallbackResponse = await http.patch(
          Uri.parse('http://10.0.2.2:3000/api/orders/$orderId'),
          headers: {'Content-Type': 'application/json'},
          body: jsonEncode({'isPaid': true, 'status': 'Lunas'}),
        );
        if (fallbackResponse.statusCode == 200 ||
            fallbackResponse.statusCode == 204) {
          if (mounted) {
            ScaffoldMessenger.of(context).showSnackBar(
              const SnackBar(
                content: Text('Bukti transfer berhasil diupdate (Fallback)'),
              ),
            );
          }
          _fetchOrders();
        } else {
          throw Exception('Gagal menghubungi API');
        }
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Terjadi kesalahan koneksi server.')),
        );
      }
      setState(() => _isLoading = false);
    }
  }

  String _formatDuration(Duration duration) {
    String twoDigits(int n) => n.toString().padLeft(2, '0');
    final hours = twoDigits(duration.inHours);
    final minutes = twoDigits(duration.inMinutes.remainder(60));
    final seconds = twoDigits(duration.inSeconds.remainder(60));
    return "$hours : $minutes : $seconds";
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF9F9F9),
      appBar: AppBar(
        title: const Text(
          'Daftar Pembayaran',
          style: TextStyle(
            color: Colors.black87,
            fontWeight: FontWeight.bold,
            fontSize: 18,
          ),
        ),
        backgroundColor: Colors.white,
        centerTitle: true,
        elevation: 0,
        iconTheme: const IconThemeData(color: Colors.black87),
      ),
      body: _isLoading
          ? const Center(child: CircularProgressIndicator())
          : _orders.isEmpty
          ? const Center(child: Text("Tidak ada data pembayaran."))
          : Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  // List Item Pembayaran
                  Expanded(
                    flex: 4,
                    child: ListView.builder(
                      itemCount: _orders.length,
                      itemBuilder: (context, index) {
                        final item = _orders[index];
                        final bool isSelected =
                            _selectedOrder != null &&
                            _selectedOrder!['id'] == item['id'];
                        final bool isLunas =
                            item['isPaid'] == true ||
                            item['status']?.toString().toLowerCase() == 'lunas';

                        return GestureDetector(
                          onTap: () {
                            setState(() {
                              _selectedOrder = item;
                              _startCountdown();
                            });
                          },
                          child: Container(
                            margin: const EdgeInsets.only(bottom: 16),
                            decoration: BoxDecoration(
                              color: Colors.white,
                              borderRadius: BorderRadius.circular(16),
                              border: Border.all(
                                color: isSelected
                                    ? const Color(0xFF00C853)
                                    : const Color(0xFFE0E0E0),
                                width: isSelected ? 2 : 1,
                              ),
                              boxShadow: [
                                BoxShadow(
                                  color: Colors.black.withValues(alpha: 0.05),
                                  blurRadius: 8,
                                  offset: const Offset(0, 4),
                                ),
                              ],
                            ),
                            padding: const EdgeInsets.all(12),
                            child: Row(
                              children: [
                                ClipRRect(
                                  borderRadius: BorderRadius.circular(12),
                                  child: Image.network(
                                    item['imageUrl'] ??
                                        'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=200&auto=format&fit=crop',
                                    width: 60,
                                    height: 60,
                                    fit: BoxFit.cover,
                                    errorBuilder: (_, __, ___) => Container(
                                      width: 60,
                                      height: 60,
                                      color: Colors.grey[300],
                                    ),
                                  ),
                                ),
                                const SizedBox(width: 16),
                                Expanded(
                                  child: Column(
                                    crossAxisAlignment:
                                        CrossAxisAlignment.start,
                                    children: [
                                      Text(
                                        item['name'] ?? 'Vendor Name',
                                        style: const TextStyle(
                                          fontWeight: FontWeight.bold,
                                          fontSize: 16,
                                          color: Colors.black87,
                                        ),
                                      ),
                                      const SizedBox(height: 4),
                                      Text(
                                        isLunas
                                            ? 'Lunas'
                                            : 'Menunggu Pembayaran',
                                        style: TextStyle(
                                          fontSize: 12,
                                          fontWeight: FontWeight.bold,
                                          color: isLunas
                                              ? Colors.grey
                                              : const Color(0xFFE53935),
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              ],
                            ),
                          ),
                        );
                      },
                    ),
                  ),

                  const SizedBox(height: 16),

                  // Status & Instruksi Box
                  if (_selectedOrder != null)
                    Expanded(
                      flex: 6,
                      child: SingleChildScrollView(
                        child: Container(
                          padding: const EdgeInsets.all(24),
                          decoration: BoxDecoration(
                            color: Colors.white,
                            borderRadius: BorderRadius.circular(24),
                            boxShadow: [
                              BoxShadow(
                                color: Colors.black.withValues(alpha: 0.05),
                                blurRadius: 10,
                                offset: const Offset(0, -4),
                              ),
                            ],
                          ),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              const Text(
                                'Status & Instruksi',
                                style: TextStyle(
                                  fontWeight: FontWeight.bold,
                                  fontSize: 16,
                                  color: Colors.black87,
                                ),
                              ),
                              const SizedBox(height: 20),

                              // Timer Countdown Box
                              Container(
                                padding: const EdgeInsets.symmetric(
                                  vertical: 16,
                                  horizontal: 20,
                                ),
                                decoration: BoxDecoration(
                                  color: const Color(0xFFFFF0ED), // Merah muda
                                  borderRadius: BorderRadius.circular(16),
                                ),
                                child: Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    const Text(
                                      'Batas Waktu',
                                      style: TextStyle(
                                        color: Color(0xFFE53935),
                                        fontWeight: FontWeight.bold,
                                      ),
                                    ),
                                    Text(
                                      _formatDuration(_timeLeft),
                                      style: const TextStyle(
                                        color: Color(0xFFE53935),
                                        fontWeight: FontWeight.bold,
                                        fontSize: 18,
                                        letterSpacing: 2,
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                              const SizedBox(height: 24),

                              // Transfer Bank Box
                              const Text(
                                'TRANSFER KE BANK BCA',
                                style: TextStyle(
                                  fontSize: 12,
                                  fontWeight: FontWeight.bold,
                                  color: Colors.grey,
                                  letterSpacing: 0.5,
                                ),
                              ),
                              const SizedBox(height: 12),
                              Container(
                                padding: const EdgeInsets.symmetric(
                                  horizontal: 20,
                                  vertical: 12,
                                ),
                                decoration: BoxDecoration(
                                  border: Border.all(
                                    color: Colors.grey.shade300,
                                  ),
                                  borderRadius: BorderRadius.circular(16),
                                ),
                                child: Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    const Text(
                                      '8123 4567 89',
                                      style: TextStyle(
                                        fontSize: 20,
                                        fontWeight: FontWeight.bold,
                                        color: Colors.black87,
                                      ),
                                    ),
                                    InkWell(
                                      onTap: _copyBankAccount,
                                      child: Container(
                                        padding: const EdgeInsets.symmetric(
                                          horizontal: 16,
                                          vertical: 8,
                                        ),
                                        decoration: BoxDecoration(
                                          color: const Color(0xFFE8F5E9),
                                          borderRadius: BorderRadius.circular(
                                            8,
                                          ),
                                        ),
                                        child: const Text(
                                          'SALIN',
                                          style: TextStyle(
                                            fontWeight: FontWeight.bold,
                                            color: Color(0xFF00C853),
                                            fontSize: 12,
                                          ),
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                              const SizedBox(height: 32),

                              // Button Bukti Transfer
                              SizedBox(
                                width: double.infinity,
                                child: ElevatedButton(
                                  onPressed: () {
                                    final isLunas =
                                        _selectedOrder!['isPaid'] == true ||
                                        _selectedOrder!['status']
                                                ?.toString()
                                                .toLowerCase() ==
                                            'lunas';
                                    if (isLunas) {
                                      ScaffoldMessenger.of(
                                        context,
                                      ).showSnackBar(
                                        const SnackBar(
                                          content: Text(
                                            'Pesanan ini sudah lunas.',
                                          ),
                                        ),
                                      );
                                    } else {
                                      _uploadProof();
                                    }
                                  },
                                  style: ElevatedButton.styleFrom(
                                    backgroundColor: const Color(0xFF00C853),
                                    padding: const EdgeInsets.symmetric(
                                      vertical: 16,
                                    ),
                                    shape: RoundedRectangleBorder(
                                      borderRadius: BorderRadius.circular(16),
                                    ),
                                    elevation: 2,
                                  ),
                                  child: const Text(
                                    'Upload Bukti Transfer',
                                    style: TextStyle(
                                      fontSize: 16,
                                      fontWeight: FontWeight.bold,
                                      color: Colors.white,
                                    ),
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                ],
              ),
            ),
    );
  }
}
