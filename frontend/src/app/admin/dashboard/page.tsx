import type { ReactNode } from 'react';

const TrendingUpIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
);
const UserCheckIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><polyline points="16 11 18 13 22 9" /></svg>
);
const UsersIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
);
const ClipboardIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /></svg>
);
const DownloadIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
);
const CheckCircleIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
);
const UserPlusIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" x2="19" y1="8" y2="14" /><line x1="22" x2="16" y1="11" y2="11" /></svg>
);
const ClockIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
);
const TerminalIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="4 17 10 11 4 5" /><line x1="12" x2="20" y1="19" y2="19" /></svg>
);

export default function AdminDashboardPage() {
    return (
        <div className="flex-1 overflow-y-auto p-10 pb-16">
            <div className="max-w-[1300px] mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
                    <div>
                        <span className="text-[10px] font-bold tracking-[0.2em] text-[#A8A8A8] uppercase mb-2 block">
                            RINGKASAN EKOSISTEM DIGITAL
                        </span>
                        <h1 className="text-4xl md:text-[2.75rem] leading-[1.05] font-black italic tracking-tighter text-[#2A2A2A]">
                            SUPERVISI <br /> OPERASIONAL GLOBAL.
                        </h1>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 px-6 h-12 rounded-full border border-gray-200 text-[#2A2A2A] text-[10px] font-bold tracking-widest uppercase hover:bg-gray-50 transition-colors shadow-sm bg-white">
                            HEALTH CHECK
                        </button>
                        <button className="flex items-center gap-2 px-6 h-12 rounded-full bg-[#2A2A2A] text-white text-[10px] font-bold tracking-widest uppercase hover:bg-[#1a1a1a] transition-colors shadow-lg shadow-[#2A2A2A]/20">
                            <DownloadIcon className="w-4 h-4" />
                            REKAP SELURUH DATA
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-14">
                    <div className="bg-white p-8 rounded-[2rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col items-center justify-center text-center">
                        <div className="w-14 h-14 rounded-2xl bg-[#2A2A2A] text-white flex items-center justify-center mb-6">
                            <TrendingUpIcon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold tracking-[0.2em] text-[#A8A8A8] uppercase block mb-2">
                            VOLUME TRANSAKSI
                        </span>
                        <span className="text-3xl md:text-4xl font-black italic text-[#2A2A2A] tracking-tighter">Rp 2.4M</span>
                    </div>

                    <div className="bg-white p-8 rounded-[2rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border-2 border-[#FCE6E3] flex flex-col items-center justify-center text-center relative overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[150px] bg-[#FCE6E3] rounded-full blur-[50px] opacity-20 pointer-events-none"></div>
                        <div className="w-14 h-14 rounded-2xl bg-[#FCE6E3] text-[#2A2A2A] flex items-center justify-center mb-6 relative z-10">
                            <UserCheckIcon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold tracking-[0.2em] text-[#A8A8A8] uppercase block mb-2 relative z-10">
                            ANTREAN VERIFIKASI
                        </span>
                        <span className="text-3xl md:text-4xl font-black italic text-[#2A2A2A] tracking-tighter relative z-10">08 Vendor</span>
                    </div>

                    <div className="bg-white p-8 rounded-[2rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col items-center justify-center text-center">
                        <div className="w-14 h-14 rounded-2xl bg-[#F4F4F5] text-gray-400 flex items-center justify-center mb-6">
                            <UsersIcon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold tracking-[0.2em] text-[#A8A8A8] uppercase block mb-2">
                            TOTAL PENGGUNA
                        </span>
                        <span className="text-3xl md:text-4xl font-black italic text-[#2A2A2A] tracking-tighter">2,840</span>
                    </div>

                    <div className="bg-white p-8 rounded-[2rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col items-center justify-center text-center">
                        <div className="w-14 h-14 rounded-2xl bg-[#F4F4F5] text-gray-400 flex items-center justify-center mb-6">
                            <ClipboardIcon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold tracking-[0.2em] text-[#A8A8A8] uppercase block mb-2">
                            PESANAN AKTIF
                        </span>
                        <span className="text-3xl md:text-4xl font-black italic text-[#2A2A2A] tracking-tighter">425</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
                    <div className="lg:col-span-2 bg-white rounded-[2rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100 p-8 lg:p-10 flex flex-col">
                        <div className="flex justify-between items-start mb-10 border-b border-gray-100 pb-6">
                            <div>
                                <h3 className="text-lg font-black italic tracking-tighter text-[#2A2A2A] uppercase mb-1">
                                    VERIFIKASI VENDOR BARU
                                </h3>
                                <span className="text-[9px] font-bold tracking-[0.15em] text-[#A8A8A8] uppercase">
                                    MENUNGGU PERSETUJUAN ADMIN
                                </span>
                            </div>
                            <button className="text-[9px] font-bold tracking-[0.2em] text-[#A8A8A8] hover:text-[#2A2A2A] uppercase transition-colors mt-1">
                                LIHAT SEMUA
                            </button>
                        </div>

                        <div className="flex flex-col w-full">
                            <div className="flex pb-4 border-b border-gray-50">
                                <div className="w-[40%] text-[9px] font-bold tracking-[0.2em] text-[#A8A8A8] uppercase">NAMA BISNIS & OWNER</div>
                                <div className="w-[20%] text-[9px] font-bold tracking-[0.2em] text-[#A8A8A8] uppercase">KATEGORI</div>
                                <div className="w-[20%] text-[9px] font-bold tracking-[0.2em] text-[#A8A8A8] uppercase">LOKASI</div>
                                <div className="w-[20%] text-[9px] font-bold tracking-[0.2em] text-[#A8A8A8] uppercase text-right">AKSI</div>
                            </div>

                            <div className="flex items-center py-6 border-b border-gray-50">
                                <div className="w-[40%] flex flex-col">
                                    <span className="text-[11px] font-extrabold text-[#2A2A2A] mb-0.5">WAFA MEDIA STUDIO</span>
                                    <span className="text-[9px] font-medium text-gray-400">WAHIDAH WAFA IHSANI</span>
                                </div>
                                <div className="w-[20%]"><span className="text-[10px] font-bold text-[#A8A8A8] uppercase">FOTOGRAFI</span></div>
                                <div className="w-[20%]"><span className="text-[10px] font-bold text-[#A8A8A8] uppercase">PADANG</span></div>
                                <div className="w-[20%] flex justify-end">
                                    <button className="px-5 py-2.5 bg-[#2A2A2A] text-white text-[9px] font-bold tracking-widest uppercase rounded-xl hover:bg-[#1a1a1a] transition-colors">
                                        PERIKSA
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center py-6">
                                <div className="w-[40%] flex flex-col">
                                    <span className="text-[11px] font-extrabold text-[#2A2A2A] mb-0.5">CATERING JAYA RAYA</span>
                                    <span className="text-[9px] font-medium text-gray-400">BUDI SANTOSO</span>
                                </div>
                                <div className="w-[20%]"><span className="text-[10px] font-bold text-[#A8A8A8] uppercase">KATERING</span></div>
                                <div className="w-[20%]"><span className="text-[10px] font-bold text-[#A8A8A8] uppercase">BUKITTINGGI</span></div>
                                <div className="w-[20%] flex justify-end">
                                    <button className="px-5 py-2.5 bg-[#2A2A2A] text-white text-[9px] font-bold tracking-widest uppercase rounded-xl hover:bg-[#1a1a1a] transition-colors">
                                        PERIKSA
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-1 flex flex-col gap-8 lg:gap-10">
                        <div className="bg-white rounded-[2rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100 p-8 lg:p-10 flex flex-col">
                            <h3 className="text-lg font-black italic tracking-tighter text-[#2A2A2A] uppercase mb-8">
                                LOG AKTIVITAS
                            </h3>

                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-2xl bg-[#EAF5EF] flex items-center justify-center shrink-0">
                                        <CheckCircleIcon className="w-4 h-4 text-emerald-500" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold text-[#2A2A2A] uppercase mb-0.5">PEMBAYARAN PLN-29302 TERVERIFIKASI</span>
                                        <span className="text-[8px] font-medium text-gray-400 uppercase tracking-wider">2 MENIT YANG LALU</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-2xl bg-[#EBF3FF] flex items-center justify-center shrink-0">
                                        <UserPlusIcon className="w-4 h-4 text-blue-500" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold text-[#2A2A2A] uppercase mb-0.5">VENDOR BARU MENDAFTAR</span>
                                        <span className="text-[8px] font-medium text-gray-400 uppercase tracking-wider">15 MENIT YANG LALU</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-2xl bg-[#F4F4F5] flex items-center justify-center shrink-0">
                                        <ClockIcon className="w-4 h-4 text-gray-400" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold text-[#2A2A2A] uppercase mb-0.5">BACKUP DATA MINGGUAN SELESAI</span>
                                        <span className="text-[8px] font-medium text-gray-400 uppercase tracking-wider">2 JAM YANG LALU</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#2A2A2A] rounded-[2rem] shadow-[0_20px_40px_-10px_rgba(42,42,42,0.4)] p-8 lg:p-10 flex flex-col relative overflow-hidden">
                            <TerminalIcon className="absolute -bottom-6 -right-6 w-32 h-32 text-white opacity-5 pointer-events-none transform -rotate-12" />

                            <h3 className="text-lg font-black italic tracking-tighter text-white uppercase mb-8 relative z-10">
                                INTEGRASI API
                            </h3>

                            <div className="flex justify-between items-end mb-3 relative z-10">
                                <span className="text-[9px] font-bold tracking-[0.2em] text-[#A8A8A8] uppercase">MOBILE LATENCY</span>
                                <span className="text-[11px] font-black text-emerald-400 tracking-wider">12MS</span>
                            </div>

                            <div className="w-full h-1.5 bg-[#444] rounded-full relative z-10 overflow-hidden">
                                <div className="h-full w-[85%] bg-[#FCE6E3] rounded-full relative">
                                    <div className="absolute right-0 top-0 bottom-0 w-8 bg-white/50 animate-pulse rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pb-4 text-center">
                    <p className="text-[8px] font-bold tracking-[0.3em] text-[#A8A8A8] uppercase">
                        PLANORA ECOSYSTEM • COMMAND & CONTROL • 2026
                    </p>
                </div>
            </div>
        </div>
    );
}
