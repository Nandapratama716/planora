'use client';

import React, { useState } from 'react';

const SearchIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
);
const MapPinIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
);
const CalendarOutlineIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
);
const TrashIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
);
const LinkIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
);

function VendorCard({
    name,
    category,
    location,
    date,
    initial,
    accent = false,
    websiteLabel,
}: {
    name: string;
    category: string;
    location: string;
    date: string;
    initial: string;
    accent?: boolean;
    websiteLabel?: string;
}) {
    return (
        <div className="bg-white rounded-[2rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-6">
                <div className="relative flex items-center justify-center w-16 h-16 shrink-0">
                    <div className={`absolute inset-0 border-2 border-dashed rounded-full ${accent ? 'border-[#FCE6E3]' : 'border-gray-300'}`} />
                    <div className={`w-[3.25rem] h-[3.25rem] rounded-full flex items-center justify-center ${accent ? 'bg-[#FDF1F0]' : 'bg-[#FAFAFC]'}`}>
                        <span className="text-xl font-black text-[#2A2A2A]">{initial}</span>
                    </div>
                </div>

                <div className="flex flex-col">
                    <h3 className="text-[15px] font-extrabold text-[#2A2A2A] mb-2.5 tracking-tight uppercase">
                        {name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="bg-[#FAFAFC] text-gray-500 px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider">
                            {category}
                        </span>
                        <div className="flex items-center gap-1.5 text-gray-400">
                            <MapPinIcon className="w-3.5 h-3.5" />
                            <span className="text-[9px] font-bold uppercase tracking-wider mt-0.5">{location}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-400 ml-1">
                            <CalendarOutlineIcon className="w-3.5 h-3.5" />
                            <span className="text-[9px] font-bold uppercase tracking-wider mt-0.5">DAFTAR: {date}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-gray-50">
                {websiteLabel ? (
                    <button className="flex items-center justify-center gap-2 flex-1 md:flex-none px-6 py-3.5 bg-[#FAFAFC] hover:bg-gray-100 text-[#2A2A2A] text-[9px] font-bold tracking-widest uppercase rounded-xl transition-colors">
                        <LinkIcon className="w-3.5 h-3.5" />
                        {websiteLabel}
                    </button>
                ) : null}
                <button className="flex-1 md:flex-none px-6 py-3.5 bg-[#FAFAFC] hover:bg-gray-100 text-[#2A2A2A] text-[9px] font-bold tracking-widest uppercase rounded-xl transition-colors">
                    TINJAU DATA
                </button>
                <button type="button" aria-label="Tolak vendor" title="Tolak vendor" className="w-11 h-11 flex items-center justify-center rounded-xl border border-red-100 text-red-400 hover:bg-red-50 hover:text-red-500 transition-colors shrink-0">
                    <TrashIcon className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}

export default function AdminVerifikasiVendorPage() {
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    return (
        <div className="flex-1 flex flex-col h-full overflow-hidden relative bg-[#FAFAFC]">
            <header className="h-[90px] bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-10 sticky top-0 z-10 flex-shrink-0">
                <div className="relative w-full max-w-[400px]">
                    <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="CARI VENDOR YANG MENDAFTAR..."
                        className="w-full bg-[#F4F4F5] rounded-full py-2.5 pl-11 pr-4 text-[10px] font-bold tracking-widest text-[#2A2A2A] placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-200 transition-all"
                    />
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3">
                        <div className="flex flex-col text-right">
                            <span className="text-[11px] font-extrabold text-[#2A2A2A] tracking-wider uppercase">ADMIN PLANORA</span>
                            <span className="text-[8px] font-bold tracking-[0.15em] text-[#A8A8A8] uppercase">ROOT ACCESS</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-[#2A2A2A] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                            A
                        </div>
                    </div>
                </div>
            </header>

            <div className="flex-1 overflow-y-auto p-10 pb-16">
                <div className="max-w-[1100px] mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
                        <div>
                            <span className="text-[10px] font-bold tracking-[0.2em] text-[#A8A8A8] uppercase mb-2 block">
                                PENYARINGAN KUALITAS MITRA
                            </span>
                            <h1 className="text-4xl md:text-[2.75rem] leading-[1.05] font-black italic tracking-tighter text-[#2A2A2A]">
                                VERIFIKASI <br /> VENDOR BARU.
                            </h1>
                        </div>

                        <div className="flex items-center bg-white rounded-full px-6 py-2 border border-gray-100 shadow-sm h-14">
                            <div className="flex flex-col items-center justify-center pr-6 border-r border-gray-100">
                                <span className="text-[8px] font-bold tracking-widest text-[#A8A8A8] uppercase">ANTREAN</span>
                                <span className="text-sm font-black text-[#2A2A2A] leading-none mt-1">08</span>
                            </div>
                            <div className="flex flex-col items-center justify-center pl-6">
                                <span className="text-[8px] font-bold tracking-widest text-[#A8A8A8] uppercase">TINJAU HARI INI</span>
                                <span className="text-sm font-black text-emerald-500 leading-none mt-1">03</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <VendorCard
                            name="WAFA MEDIA STUDIO"
                            category="FOTOGRAFI"
                            location="PADANG"
                            date="14/04/2026"
                            initial="W"
                            accent
                        />
                        <VendorCard
                            name="CATERING JAYA RAYA"
                            category="KATERING"
                            location="BUKITTINGGI"
                            date="12/04/2026"
                            initial="C"
                            websiteLabel="WEBSITE"
                        />
                    </div>

                    <div className="mt-16 pb-4 text-center">
                        <p className="text-[8px] font-bold tracking-[0.3em] text-[#A8A8A8] uppercase">
                            PLANORA ECOSYSTEM • MODUL VERIFIKASI V.1 • 2026
                        </p>
                    </div>
                </div>
            </div>

            {showLogoutModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#2A2A2A]/80 backdrop-blur-sm transition-all duration-300">
                    <div className="bg-white rounded-[2rem] p-8 md:p-10 w-full max-w-[380px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col items-center text-center transform scale-100 opacity-100 transition-all">
                        <div className="w-16 h-16 bg-[#FDF1F0] border border-[#FCE6E3] shadow-inner rounded-[1.25rem] flex items-center justify-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#EF4444] ml-1"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" /></svg>
                        </div>
                        <h3 className="text-2xl font-black italic tracking-tighter text-[#2A2A2A] uppercase mb-2">Keluar Akun</h3>
                        <p className="text-[10px] font-bold tracking-wider text-[#A8A8A8] uppercase mb-8 leading-relaxed">Apakah Anda yakin ingin keluar dari <br /> Admin Command Planora?</p>
                        <div className="flex flex-col w-full gap-3">
                            <a href="/login" className="w-full flex justify-center items-center py-4 rounded-xl bg-[#EF4444] text-white text-[10px] font-bold tracking-widest uppercase hover:bg-red-600 transition-colors shadow-lg shadow-red-500/20">YA, KELUAR SEKARANG</a>
                            <button onClick={() => setShowLogoutModal(false)} className="w-full py-4 rounded-xl bg-white border-2 border-gray-100 text-[#A8A8A8] hover:text-[#2A2A2A] hover:border-gray-300 text-[10px] font-bold tracking-widest uppercase transition-colors">BATAL</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
