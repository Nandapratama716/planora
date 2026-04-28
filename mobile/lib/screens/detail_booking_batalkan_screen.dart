import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:intl/intl.dart';

class DetailBookingBatalkanScreen extends StatefulWidget {
  const DetailBookingBatalkanScreen({super.key});

  @override
  State<DetailBookingBatalkanScreen> createState() =>
      _DetailBookingBatalkanScreenState();
}

class _DetailBookingBatalkanScreenState
    extends State<DetailBookingBatalkanScreen> {
  Map<String, dynamic>? _bookingDetails;
  bool _isLoading = true;
  String? _errorMessage;
  String _bookingId = '1';

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final args = ModalRoute.of(context)?.settings.arguments;
    if (args != null) {
      _bookingId = args.toString();
      _fetchBookingDetails();
    } else {
      setState(() {
        _errorMessage = "Booking ID is missing.";
        _isLoading = false;
      });
    }
  }

  Future<void> _fetchBookingDetails() async {
    try {
      // Endpoint yang digunakan untuk order details bisa beda, menyesuaikan dengan standard backend, misalnya /api/orders/{id}
      final response = await http
          .get(Uri.parse('http://10.0.2.2:3000/api/orders/$_bookingId'))
          .timeout(const Duration(seconds: 10));

      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        setState(() {
          _bookingDetails = data['data'] ?? data;
          _isLoading = false;
        });
      } else {
        throw Exception('Failed to load booking details');
      }
    } catch (e) {
      setState(() {
        _errorMessage =
            'Tidak dapat menghubungi server. Pastikan server berjalan.';
        _isLoading = false;
      });
    }
  }

  Future<void> _cancelBooking() async {
    // Tampilkan dialog konfirmasi
    final confirm = await showDialog<bool>(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Batalkan Pesanan'),
        content: const Text('Apakah Anda yakin ingin membatalkan pesanan ini?'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context, false),
            child: const Text('Tidak'),
          ),
          ElevatedButton(
            onPressed: () => Navigator.pop(context, true),
            style: ElevatedButton.styleFrom(backgroundColor: Colors.red),
            child: const Text(
              'Ya, Batalkan',
              style: TextStyle(color: Colors.white),
            ),
          ),
        ],
      ),
    );

    if (confirm == true) {
      setState(() {
        _isLoading = true;
      });

      try {
        final response = await http
            .delete(Uri.parse('http://10.0.2.2:3000/api/orders/$_bookingId'))
            .timeout(const Duration(seconds: 10));

        if (response.statusCode == 200 || response.statusCode == 204) {
          if (!mounted) return;
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(content: Text('Pesanan berhasil dibatalkan.')),
          );
          Navigator.pop(
            context,
            true,
          ); // kembali dengan trigger refresh jika dibebankan
        } else {
          throw Exception('Gagal membatalkan pesanan');
        }
      } catch (e) {
        if (!mounted) return;
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Gagal membatalkan, server error.')),
        );
        setState(() {
          _isLoading = false;
        });
      }
    }
  }

  String _formatCurrency(dynamic value) {
    if (value == null) return "Rp 0";
    try {
      final double amount = value is String
          ? double.parse(value)
          : value.toDouble();
      return NumberFormat.currency(
        locale: 'id_ID',
        symbol: 'Rp ',
        decimalDigits: 0,
      ).format(amount);
    } catch (_) {
      return "Rp 0";
    }
  }

  @override
  Widget build(BuildContext context) {
    if (_isLoading) {
      return const Scaffold(body: Center(child: CircularProgressIndicator()));
    }

    if (_errorMessage != null || _bookingDetails == null) {
      return Scaffold(
        appBar: AppBar(title: const Text('Detail Pesanan')),
        body: Center(
          child: Padding(
            padding: const EdgeInsets.all(16.0),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const Icon(Icons.error_outline, size: 48, color: Colors.red),
                const SizedBox(height: 16),
                Text(
                  _errorMessage ?? 'Pesanan tidak ditemukan.',
                  textAlign: TextAlign.center,
                  style: const TextStyle(fontSize: 16),
                ),
                const SizedBox(height: 24),
                ElevatedButton(
                  onPressed: () => Navigator.pop(context),
                  child: const Text('Kembali'),
                ),
              ],
            ),
          ),
        ),
      );
    }

    final detail = _bookingDetails!;
    final String imagePath =
        detail['imageUrl'] ??
        (detail['image'] != null
            ? 'http://10.0.2.2:3000/assets/${detail['image']}'
            : '');
    final String category = detail['category'] ?? "Wedding Organizer";
    final String title = detail['name'] ?? detail['title'] ?? "Unknown Service";
    final String description =
        detail['description'] ?? "Deskripsi Belum Tersedia";
    final String price = detail['price']?.toString() ?? "0";
    final String scheduleDate = detail['date'] ?? "Jadwal belum ditentukan";
    final String statusText = detail['status'] ?? "Sudah Dipesan";

    return Scaffold(
      backgroundColor: Colors.white,
      body: Stack(
        children: [
          // Background Image
          Positioned(
            top: 0,
            left: 0,
            right: 0,
            height: MediaQuery.of(context).size.height * 0.45,
            child: imagePath.isNotEmpty
                ? Image.network(
                    imagePath,
                    fit: BoxFit.cover,
                    errorBuilder: (context, error, stackTrace) =>
                        Container(color: Colors.grey[300]),
                  )
                : Container(
                    color: Colors.grey[300],
                    child: const Center(
                      child: Icon(Icons.image, size: 50, color: Colors.grey),
                    ),
                  ),
          ),

          // Back Button Container
          Positioned(
            top: 40,
            left: 16,
            child: CircleAvatar(
              backgroundColor: Colors.white.withValues(alpha: 0.5),
              child: IconButton(
                icon: const Icon(
                  Icons.arrow_back_ios_new,
                  color: Colors.white,
                  size: 20,
                ),
                onPressed: () => Navigator.pop(context),
              ),
            ),
          ),

          // Status Badge "Sudah Dipesan"
          Positioned(
            top: 48,
            right: 16,
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
              decoration: BoxDecoration(
                color: Colors.redAccent,
                borderRadius: BorderRadius.circular(20),
              ),
              child: Text(
                statusText,
                style: const TextStyle(
                  color: Colors.white,
                  fontSize: 12,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
          ),

          // Sliding Sheet Details
          Positioned.fill(
            top: MediaQuery.of(context).size.height * 0.35,
            child: Container(
              decoration: const BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(30),
                  topRight: Radius.circular(30),
                ),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Padding(
                    padding: const EdgeInsets.only(
                      top: 24,
                      left: 24,
                      right: 24,
                    ),
                    child: Row(
                      children: [
                        const Icon(
                          Icons.calendar_today,
                          color: Color(0xFF00C48C),
                          size: 20,
                        ),
                        const SizedBox(width: 8),
                        Text(
                          "Jadwal: $scheduleDate",
                          style: const TextStyle(
                            color: Color(0xFF00C48C),
                            fontSize: 14,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ],
                    ),
                  ),
                  const Padding(
                    padding: EdgeInsets.symmetric(
                      horizontal: 24.0,
                      vertical: 16,
                    ),
                    child: Divider(height: 1, color: Colors.grey),
                  ),
                  Expanded(
                    child: SingleChildScrollView(
                      padding: const EdgeInsets.symmetric(horizontal: 24),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Text(
                            "Deskripsi Layanan",
                            style: TextStyle(
                              fontSize: 16,
                              fontWeight: FontWeight.bold,
                              color: Colors.black87,
                            ),
                          ),
                          const SizedBox(height: 16),
                          Text(
                            description,
                            style: const TextStyle(
                              fontSize: 14,
                              color: Colors.black54,
                              height: 1.5,
                            ),
                          ),
                          const SizedBox(height: 100), // spacing for bottom bar
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),

          // Header over Image Component (Category & Title)
          Positioned(
            top: MediaQuery.of(context).size.height * 0.35 - 90,
            left: 24,
            right: 24,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 12,
                    vertical: 6,
                  ),
                  decoration: BoxDecoration(
                    color: const Color(0xFF00C48C),
                    borderRadius: BorderRadius.circular(4),
                  ),
                  child: Text(
                    category,
                    style: const TextStyle(
                      color: Colors.white,
                      fontSize: 12,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
                const SizedBox(height: 8),
                Text(
                  title,
                  style: const TextStyle(
                    color: Colors.white,
                    fontSize: 24,
                    fontWeight: FontWeight.bold,
                    shadows: [Shadow(color: Colors.black45, blurRadius: 4)],
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
      bottomSheet: Container(
        padding: const EdgeInsets.all(24),
        decoration: const BoxDecoration(
          color: Colors.white,
          boxShadow: [
            BoxShadow(
              color: Colors.black12,
              blurRadius: 10,
              offset: Offset(0, -2),
            ),
          ],
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  "TOTAL HARGA",
                  style: TextStyle(
                    fontSize: 10,
                    fontWeight: FontWeight.bold,
                    color: Colors.grey,
                  ),
                ),
                Text(
                  _formatCurrency(price),
                  style: const TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                    color: Colors.black87,
                  ),
                ),
              ],
            ),
            ElevatedButton(
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.white,
                side: const BorderSide(color: Colors.redAccent),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(10),
                ),
                padding: const EdgeInsets.symmetric(
                  horizontal: 24,
                  vertical: 14,
                ),
              ),
              onPressed: _cancelBooking,
              child: const Text(
                "Batalkan",
                style: TextStyle(
                  color: Colors.redAccent,
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
