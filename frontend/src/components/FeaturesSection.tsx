'use client';

import React from 'react';

// --- Komponen Ikon (SVG Inline) ---
const LightningIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
);

const CheckCircleIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);

const TrendingUpIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
);

export default function FeaturesSection() {
    const features = [
        {
            icon: <LightningIcon className="h-6 w-6" />,
            title: 'Waktu Anda Berharga',
            desc: 'Pesan vendor impian dalam hitungan menit. Ucapkan selamat tinggal pada kerumitan mencocokkan jadwal secara manual.'
        },
        {
            icon: <CheckCircleIcon className="h-6 w-6" />,
            title: 'Ketenangan Bertransaksi',
            desc: 'Dana Anda aman bersama kami. Pembayaran baru akan diteruskan ke vendor setelah layanan dipastikan selesai dengan sempurna.'
        },
        {
            icon: <TrendingUpIcon className="h-6 w-6" />,
            title: 'Kendali Penuh di Tangan Anda',
            desc: 'Pantau setiap detail acara atau pertumbuhan bisnis Anda melalui satu dashboard yang rapi dan transparan.'
        }
    ];

    return (
        <section id="features" className="w-full bg-[#FAFAFC] py-16 sm:py-20 md:py-32">
            <div className="mx-auto flex max-w-300 flex-col items-center gap-12 px-6 sm:px-10 lg:flex-row lg:gap-24 lg:px-12">
                <div className="flex w-full flex-col lg:w-1/2">
                    <h2 className="mb-10 text-[2.4rem] font-black leading-none tracking-tighter text-[#2A2A2A] sm:text-4xl md:mb-12 md:text-[3rem]">
                        KENAPA MEMILIH <br />
                        <span className="text-[#A8A8A8]">PLANORA?</span>
                    </h2>

                    <div className="flex flex-col gap-8 sm:gap-10">
                        {features.map((feature, index) => (
                            <div key={index} className="group flex cursor-pointer items-start gap-4 sm:gap-6">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FCE6E3] text-[#2A2A2A] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:shadow-[0_10px_25px_rgba(252,230,227,0.8)] sm:h-14 sm:w-14 md:h-16 md:w-16">
                                    {feature.icon}
                                </div>

                                <div className="flex flex-col pt-1">
                                    <h3 className="mb-2 text-base font-bold text-[#2A2A2A] transition-colors duration-300 group-hover:text-[#A8A8A8] sm:text-lg md:text-xl">
                                        {feature.title}
                                    </h3>
                                    <p className="pr-0 text-sm leading-relaxed text-[#A8A8A8] md:pr-4 md:text-base">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid w-full grid-cols-2 gap-3 sm:hidden">
                    <div className="group relative aspect-4/5 overflow-hidden rounded-4xl shadow-lg transition-transform duration-500 hover:-translate-y-2">
                        <img
                            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop"
                            alt="Wedding Party"
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent"></div>
                    </div>

                    <div className="group relative aspect-4/5 overflow-hidden rounded-4xl shadow-lg transition-transform duration-500 hover:-translate-y-2">
                        <img
                            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop"
                            alt="Wedding Moment"
                            className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-black/5 transition-colors duration-500 group-hover:bg-transparent"></div>
                    </div>
                </div>

                <div className="hidden w-full grid-cols-1 gap-4 sm:grid sm:grid-cols-2 md:gap-6 lg:w-1/2">
                    <div className="flex flex-col gap-4 md:gap-6">
                        <div className="flex aspect-square min-h-60 cursor-default flex-col items-start justify-end rounded-4xl bg-[#FCE6E3] p-5 text-left shadow-[0_15px_30px_-10px_rgba(252,230,227,0.5)] transition-transform duration-500 hover:-translate-y-2 sm:p-6 md:min-h-0 md:p-8">
                            <span className="mb-2 text-[3rem] font-black leading-none tracking-tighter text-[#2A2A2A] sm:text-4xl md:mb-3 md:text-[3.25rem]">99%</span>
                            <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#2A2A2A]/60 md:text-[10px]">Tingkat Kepuasan</span>
                        </div>

                        <div className="group relative aspect-4/5 min-h-70 cursor-pointer overflow-hidden rounded-4xl shadow-lg transition-transform duration-500 hover:-translate-y-2">
                            <img
                                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop"
                                alt="Wedding Party"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent"></div>
                        </div>
                    </div>

                    <div className="mt-0 flex flex-col gap-4 sm:mt-8 md:gap-6 md:mt-16">
                        <div className="group relative aspect-4/5 min-h-70 cursor-pointer overflow-hidden rounded-4xl shadow-lg transition-transform duration-500 hover:-translate-y-2">
                            <img
                                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop"
                                alt="Wedding Moment"
                                className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-black/5 transition-colors duration-500 group-hover:bg-transparent"></div>
                        </div>

                        <div className="flex aspect-square min-h-60 cursor-default flex-col items-start justify-end rounded-4xl border border-white bg-[#F4F4F5] p-5 text-left shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] transition-transform duration-500 hover:-translate-y-2 sm:p-6 md:min-h-0 md:p-8">
                            <span className="mb-2 text-[3rem] font-black leading-none tracking-tighter text-[#2A2A2A] sm:text-4xl md:mb-3 md:text-[3.25rem]">500+</span>
                            <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#A8A8A8] md:text-[10px]">Vendor</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
