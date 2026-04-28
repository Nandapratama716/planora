import 'package:flutter/material.dart';
import 'package:table_calendar/table_calendar.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class KalenderScreen extends StatefulWidget {
  const KalenderScreen({super.key});

  @override
  State<KalenderScreen> createState() => _KalenderScreenState();
}

class _KalenderScreenState extends State<KalenderScreen> {
  CalendarFormat _calendarFormat = CalendarFormat.month;
  DateTime _focusedDay = DateTime.now();
  DateTime? _selectedDay;

  // Menyimpan event berdasarkan tanggal
  Map<DateTime, List<dynamic>> _events = {};
  bool _isLoading = true;

  @override
  void initState() {
    super.initState();
    _selectedDay = _focusedDay;
    _fetchEvents();
  }

  Future<void> _fetchEvents() async {
    try {
      final response = await http.get(
        Uri.parse('http://10.0.2.2:3000/api/orders'),
      );

      if (response.statusCode == 200) {
        final data = json.decode(response.body) as List<dynamic>;

        Map<DateTime, List<dynamic>> parsedEvents = {};

        for (var order in data) {
          if (order['date'] != null) {
            try {
              // Asumsi format tanggal dari backend adalah MM/dd/yyyy atau yyyy-MM-dd
              // Kita coba parse. Kalau gagal, kita abaikan.
              DateTime rawDate;
              // Jika formatnya 'MM/dd/yyyy' seperti hasil _dateController
              if (order['date'].toString().contains('/')) {
                List<String> parts = order['date'].split('/');
                if (parts.length == 3) {
                  rawDate = DateTime(
                    int.parse(parts[2]),
                    int.parse(parts[0]),
                    int.parse(parts[1]),
                  );
                } else {
                  rawDate = DateTime.parse(order['date']);
                }
              } else {
                rawDate = DateTime.parse(order['date']);
              }

              // Normalisasi ke midnight
              final date = DateTime.utc(
                rawDate.year,
                rawDate.month,
                rawDate.day,
              );

              if (parsedEvents[date] == null) {
                parsedEvents[date] = [];
              }
              parsedEvents[date]!.add(order);
            } catch (e) {
              // lewati jika parse gagal
            }
          }
        }

        setState(() {
          _events = parsedEvents;
          _isLoading = false;
        });
      } else {
        setState(() {
          _isLoading = false;
        });
      }
    } catch (e) {
      setState(() {
        _isLoading = false;
      });
    }
  }

  List<dynamic> _getEventsForDay(DateTime day) {
    // Cari di map event
    final normalizedDay = DateTime.utc(day.year, day.month, day.day);
    return _events[normalizedDay] ?? [];
  }

  @override
  Widget build(BuildContext context) {
    final selectedEvents = _getEventsForDay(_selectedDay ?? _focusedDay);

    return Scaffold(
      backgroundColor: const Color(0xFFF9F9F9),
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back, color: Colors.black87),
          onPressed: () => Navigator.pop(context),
        ),
        title: const Text(
          'Kalender Acara',
          style: TextStyle(color: Colors.black87, fontWeight: FontWeight.bold),
        ),
        centerTitle: true,
      ),
      body: _isLoading
          ? const Center(child: CircularProgressIndicator())
          : SafeArea(
              child: SingleChildScrollView(
                child: Padding(
                  padding: const EdgeInsets.all(24.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      // Bagian Calendar
                      Container(
                        padding: const EdgeInsets.symmetric(
                          vertical: 16.0,
                          horizontal: 8.0,
                        ),
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(20),
                          boxShadow: [
                            BoxShadow(
                              color: Colors.black.withValues(alpha: 0.05),
                              blurRadius: 10,
                              offset: const Offset(0, 4),
                            ),
                          ],
                        ),
                        child: TableCalendar(
                          firstDay: DateTime.utc(2020, 10, 16),
                          lastDay: DateTime.utc(2030, 3, 14),
                          focusedDay: _focusedDay,
                          calendarFormat: _calendarFormat,
                          selectedDayPredicate: (day) {
                            return isSameDay(_selectedDay, day);
                          },
                          onDaySelected: (selectedDay, focusedDay) {
                            if (!isSameDay(_selectedDay, selectedDay)) {
                              setState(() {
                                _selectedDay = selectedDay;
                                _focusedDay = focusedDay;
                              });
                            }
                          },
                          onFormatChanged: (format) {
                            if (_calendarFormat != format) {
                              setState(() {
                                _calendarFormat = format;
                              });
                            }
                          },
                          onPageChanged: (focusedDay) {
                            _focusedDay = focusedDay;
                          },
                          eventLoader: _getEventsForDay,
                          calendarStyle: CalendarStyle(
                            selectedDecoration: const BoxDecoration(
                              color: Color(0xFF00C48C), // Warna hijau UI mockup
                              shape: BoxShape.circle,
                            ),
                            todayDecoration: BoxDecoration(
                              color: const Color(
                                0xFFFA9081,
                              ).withValues(alpha: 0.5), // Soft pastel
                              shape: BoxShape.circle,
                            ),
                            markerDecoration: const BoxDecoration(
                              color: Color(0xFFFA9081),
                              shape: BoxShape.circle,
                            ),
                          ),
                          headerStyle: const HeaderStyle(
                            formatButtonVisible: false,
                            titleCentered: true,
                          ),
                        ),
                      ),

                      const SizedBox(height: 32),

                      // Bagian Agenda
                      Text(
                        'Agenda Tanggal ${_selectedDay?.day ?? ""}',
                        style: const TextStyle(
                          fontSize: 18,
                          fontWeight: FontWeight.bold,
                          color: Color(0xFF333333),
                        ),
                      ),
                      const SizedBox(height: 16),

                      selectedEvents.isEmpty
                          ? const Center(
                              child: Padding(
                                padding: EdgeInsets.all(24.0),
                                child: Text(
                                  'Tidak ada agenda untuk tanggal ini.',
                                ),
                              ),
                            )
                          : ListView.builder(
                              shrinkWrap: true,
                              physics: const NeverScrollableScrollPhysics(),
                              itemCount: selectedEvents.length,
                              itemBuilder: (context, index) {
                                final event = selectedEvents[index];
                                return _buildAgendaCard(event);
                              },
                            ),
                    ],
                  ),
                ),
              ),
            ),
    );
  }

  Widget _buildAgendaCard(dynamic event) {
    final String title = event['name'] ?? 'Ceria\'s WO'; // Fallback
    // Memecah notes untuk mencari jam jika memungkinkan, jika tidak fallback manual
    final String timeInfo = 'Jadwal Mulai Persiapan (08:00 WIB)';
    final String imageUrl =
        event['imageUrl'] ??
        'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=300&auto=format&fit=crop';

    return Container(
      margin: const EdgeInsets.only(bottom: 16.0),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: 0.05),
            blurRadius: 10,
            offset: const Offset(0, 4),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          ClipRRect(
            borderRadius: const BorderRadius.only(
              topLeft: Radius.circular(20),
              topRight: Radius.circular(20),
            ),
            child: Image.network(
              imageUrl,
              height: 150,
              width: double.infinity,
              fit: BoxFit.cover,
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: const TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                    color: Color(0xFF333333),
                  ),
                ),
                const SizedBox(height: 8),
                Text(
                  timeInfo,
                  style: const TextStyle(fontSize: 14, color: Colors.grey),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
