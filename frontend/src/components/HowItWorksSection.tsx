'use client';

import React from 'react';

// --- Komponen Ikon (SVG Inline) ---
const SearchIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
    </svg>
);

const CalendarIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
        <line x1="16" x2="16" y1="2" y2="6"></line>
        <line x1="8" x2="8" y1="2" y2="6"></line>
        <line x1="3" x2="21" y1="10" y2="10"></line>
    </svg>
);

const ShieldCheckIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
        <path d="m9 12 2 2 4-4"></path>
    </svg>
);

export default function HowItWorksSection() {
    // Data langkah-langkah sekarang menggunakan ikon
    const steps = [
        {
            icon: <SearchIcon className="h-7 w-7 md:h-8 md:w-8" />,
            title: 'PILIH JASA',
            desc: 'Jelajahi ribuan vendor terverifikasi dengan data portofolio yang lengkap dan transparan.',
            titleClass: 'font-bold'
        },
        {
            icon: <CalendarIcon className="h-7 w-7 md:h-8 md:w-8" />,
            title: 'CEK JADWAL',
            desc: 'Sistem secara otomatis memverifikasi ketersediaan vendor secara real-time untuk mencegah bentrok.',
            titleClass: 'font-bold italic'
        },
        {
            icon: <ShieldCheckIcon className="h-7 w-7 md:h-8 md:w-8" />,
            title: 'KONFIRMASI',
            desc: 'Lakukan booking dan pembayaran yang aman. Pantau seluruh progres acara Anda melalui satu dashboard.',
            titleClass: 'font-bold'
        }
    ];

    return (
        <section id="cara-kerja" className="w-full bg-[#2A2A2A] py-24 md:py-32">
            <div className="mx-auto max-w-275 px-6 sm:px-10 lg:px-12">

                {/* Header Section dengan Tipografi Baru (Opsi 1) */}
                <div className="text-center mb-24 md:mb-32">
                    <h2 className="text-3xl md:text-[3.5rem] leading-tight font-bold text-white tracking-[-0.02em] mb-6">
                        Rencanakan <span className="text-[#FCE6E3] italic">Tanpa Beban.</span>
                    </h2>
                    <p className="text-[#A8A8A8] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                        Bagaimana Planora menyederhanakan perencanaan acara Anda dengan teknologi cerdas.
                    </p>
                </div>

                {/* Steps Container */}
                <div className="relative">

                    {/* Garis Horizontal Penghubung (Hanya muncul di Desktop) */}
                    <div className="hidden md:block absolute top-[4.85rem] left-[10%] right-[10%] h-px bg-[#444444] z-0"></div>

                    {/* Grid Langkah */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative z-10">
                        {steps.map((step, index) => (
                            // Tambahkan class 'group' di sini agar hover trigger ke seluruh elemen anak
                            <div key={index} className="flex flex-col items-center text-center group cursor-pointer">

                                {/* Indikator Lingkaran dengan Animasi Hover */}
                                <div className="mb-8 flex h-18 w-18 -translate-y-5 items-center justify-center rounded-full border border-[#444444] bg-[#2A2A2A] text-[#A8A8A8] transition-all duration-500 ease-in-out group-hover:-translate-y-7 group-hover:border-[#FCE6E3] group-hover:bg-[#FCE6E3] group-hover:text-[#2A2A2A] group-hover:shadow-[0_0_35px_rgba(252,230,227,0.35)]">
                                    {step.icon}
                                </div>

                                {/* Konten Teks */}
                                <div className="w-full md:border-t-0 pt-0 transition-transform duration-500 group-hover:-translate-y-1">
                                    <h3 className={`text-white text-lg md:text-xl tracking-[0.15em] mb-4 transition-colors duration-300 group-hover:text-[#FCE6E3] ${step.titleClass}`}>
                                        {step.title}
                                    </h3>
                                    <p className="text-[#A8A8A8] text-base leading-relaxed px-2 md:px-6">
                                        {step.desc}
                                    </p>
                                </div>

                                {/* Garis Pemisah Mobile (Hanya muncul di Mobile agar rapi) */}
                                {index !== steps.length - 1 && (
                                    <div className="mt-12 block h-px w-full bg-[#444444] md:hidden"></div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
