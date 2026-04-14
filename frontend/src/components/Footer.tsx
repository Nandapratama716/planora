'use client';

import React from 'react';
import Image from 'next/image';

const InstagramIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <rect x="3" y="3" width="18" height="18" rx="5"></rect>
        <circle cx="12" cy="12" r="4"></circle>
        <circle cx="17.5" cy="6.5" r="1"></circle>
    </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M14 4v9.5a4.5 4.5 0 1 1-3-4.24"></path>
        <path d="M14 4c1 2.2 2.8 3.4 5 3.5"></path>
    </svg>
);

const YouTubeIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <rect x="2" y="6" width="20" height="12" rx="4"></rect>
        <path d="m10 9 5 3-5 3z"></path>
    </svg>
);

export default function Footer() {
    const [activeItem, setActiveItem] = React.useState<string | null>(null);

    const footerLinks = {
        kategori: ['FOTOGRAFI & VIDEO', 'KATERING MEWAH', 'DEKORASI EVENT', 'WEDDING ORGANIZER'],
        perusahaan: ['TENTANG KAMI', 'BANTUAN USER', 'HUBUNGI KAMI', 'KARIR VENDOR'],
    };

    const socialMockups = [
        { name: 'INSTAGRAM', handle: '@planora.id', icon: InstagramIcon },
        { name: 'TIKTOK', handle: '@planora.official', icon: TikTokIcon },
        { name: 'YOUTUBE', handle: 'Planora Ecosystem', icon: YouTubeIcon },
    ];

    return (
        <footer className="w-full bg-[#2A2A2A] px-6 pb-10 pt-20 sm:px-10 lg:px-12">
            <div className="mx-auto max-w-325">
                <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    <div className="flex flex-col gap-6 lg:pr-10">
                        <div className="flex cursor-pointer items-center gap-3">
                            <Image
                                src="/images/logogmbr.png"
                                alt="Planora"
                                width={160}
                                height={42}
                                className="h-9 w-auto"
                            />
                            <span className="text-lg font-extrabold tracking-tight text-white">PLANORA</span>
                        </div>
                        <p className="pr-4 text-sm leading-relaxed text-[#9FA3A7]">
                            Platform marketplace penyedia jasa event terintegrasi berbasis teknologi modern. Menghubungkan kreativitas dan ketepatan.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">KATEGORI UTAMA</h4>
                        <ul className="flex flex-col gap-3">
                            {footerLinks.kategori.map((item, index) => (
                                <li key={index}>
                                    <button
                                        type="button"
                                        onClick={() => setActiveItem(item)}
                                        className={`block text-left text-xs font-semibold uppercase tracking-[0.08em] leading-relaxed transition-colors hover:text-[#FCE6E3] ${activeItem === item ? 'text-[#FCE6E3]' : 'text-[#9FA3A7]'}`}
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">PERUSAHAAN</h4>
                        <ul className="flex flex-col gap-3">
                            {footerLinks.perusahaan.map((item, index) => (
                                <li key={index}>
                                    <button
                                        type="button"
                                        onClick={() => setActiveItem(item)}
                                        className={`block text-left text-xs font-semibold uppercase tracking-[0.08em] leading-relaxed transition-colors hover:text-[#FCE6E3] ${activeItem === item ? 'text-[#FCE6E3]' : 'text-[#9FA3A7]'}`}
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">SOSIAL MEDIA</h4>

                        <div className="flex flex-col gap-3">
                            {socialMockups.map((social) => (
                                <button
                                    key={social.name}
                                    type="button"
                                    onClick={() => setActiveItem(social.name)}
                                    className="flex items-center justify-between rounded-xl border border-[#3f3f3f] bg-[#303030] px-3 py-2 text-left transition-all hover:border-[#FCE6E3]/50 hover:bg-[#383838]"
                                >
                                    <div className="flex items-center gap-2">
                                        <social.icon className={`h-4 w-4 ${activeItem === social.name ? 'text-[#FCE6E3]' : 'text-[#E6E6E6]'}`} />
                                        <span className={`text-[10px] font-bold uppercase tracking-[0.12em] ${activeItem === social.name ? 'text-[#FCE6E3]' : 'text-[#E6E6E6]'}`}>
                                            {social.name}
                                        </span>
                                    </div>
                                    <span className="text-[9px] font-semibold text-[#9FA3A7]">{social.handle}</span>
                                </button>
                            ))}
                        </div>

                        <div className="mt-2 flex cursor-pointer flex-col gap-2 rounded-2xl border border-[#444] bg-[#333333] p-5 transition-all hover:-translate-y-1 hover:bg-[#3A3A3A] hover:shadow-lg">
                            <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#D6D6D6]">BUTUH BANTUAN CEPAT?</span>
                            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-white">CHAT ADMIN PLANORA</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-6 border-t border-[#444] pt-8 md:flex-row">
                    <p className="text-center text-[10px] font-bold uppercase tracking-[0.16em] text-[#B8BBC0] md:text-left">
                        © 2026 PLANORA ECOSYSTEM - PIS KELOMPOK 2 UNP
                    </p>
                    <div className="flex items-center gap-8">
                        <button
                            type="button"
                            onClick={() => setActiveItem('PRIVASI')}
                            className={`text-[10px] font-bold uppercase tracking-[0.16em] transition-colors hover:text-[#FCE6E3] ${activeItem === 'PRIVASI' ? 'text-[#FCE6E3]' : 'text-[#B8BBC0]'}`}
                        >
                            PRIVASI
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveItem('SYARAT & KETENTUAN')}
                            className={`text-[10px] font-bold uppercase tracking-[0.16em] transition-colors hover:text-[#FCE6E3] ${activeItem === 'SYARAT & KETENTUAN' ? 'text-[#FCE6E3]' : 'text-[#B8BBC0]'}`}
                        >
                            SYARAT & KETENTUAN
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
