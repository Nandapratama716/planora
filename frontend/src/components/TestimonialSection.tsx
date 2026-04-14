'use client';

import React, { useState, useEffect, useCallback } from 'react';

// --- Komponen Bintang (SVG Inline) ---
const StarIcon = ({ active }: { active: boolean }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`h-4 w-4 md:h-5 md:w-5 transition-colors duration-500 ${active ? 'text-[#FCE6E3]' : 'text-[#2A2A2A]'}`}
    >
        <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
        />
    </svg>
);

// --- Komponen Panah (SVG Inline) ---
const ChevronLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m15 18-6-6 6-6" />
    </svg>
);

const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 18 6-6-6-6" />
    </svg>
);

export default function TestimonialSection() {
    const testimonials = [
        {
            id: 1,
            name: 'Andien K.',
            role: 'Calon Pengantin',
            text: 'Awalnya bingung banget mulai dari mana buat urus nikahan, tapi Planora benar-benar jadi penyelamat. Semua vendor impian ada di sini!',
            avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop',
        },
        {
            id: 2,
            name: 'Salsabila Maulidia',
            role: 'Customer',
            text: 'Nggak nyangka ngurus acara lamaran bisa se-smooth ini. Nggak perlu lagi chat vendor satu-satu cuma buat nanya jadwal kosong.',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop',
        },
        {
            id: 3,
            name: 'Renanda A.',
            role: 'Vendor Photography',
            text: 'Sebagai vendor, ini ngebantu banget buat ngatur jadwal pemotretan. Klien senang, manajemen tim kami juga jadi jauh lebih rapi.',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop',
        },
        {
            id: 4,
            name: 'Ilham Fahrozi',
            role: 'Event Planner',
            text: 'Sangat memudahkan kerjaan planner. Booking katering dan dekor buat ratusan tamu jadi super praktis. Keren banget sih sistemnya!',
            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop',
        },
        {
            id: 5,
            name: 'Budi Santoso',
            role: 'Vendor Dekorasi',
            text: 'Jadwal padat di akhir pekan bukan masalah lagi. Sistemnya bener-bener ngebantu mencegah bentrok jadwal antar klien kami.',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop',
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    // Fungsi Navigasi (Infinite Loop)
    const handleNext = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, [testimonials.length]);

    const handlePrev = useCallback(() => {
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }, [testimonials.length]);

    // Auto Slide
    useEffect(() => {
        const timer = setTimeout(() => {
            handleNext();
        }, 5000);
        return () => clearTimeout(timer);
    }, [activeIndex, handleNext]);

    // Fungsi untuk menentukan posisi kelas CSS secara 3D
    const getCardStyles = (index: number) => {
        const total = testimonials.length;
        const diff = (index - activeIndex + total) % total;

        if (diff === 0) {
            return 'translate-x-0 scale-100 opacity-100 z-30 bg-[#2A2A2A] shadow-[0_20px_50px_-15px_rgba(42,42,42,0.4)]';
        }
        if (diff === 1) {
            return 'translate-x-[110%] md:translate-x-[115%] scale-[0.85] opacity-0 md:opacity-60 z-20 bg-white border border-gray-100 cursor-pointer hover:bg-gray-50';
        }
        if (diff === total - 1) {
            return '-translate-x-[110%] md:-translate-x-[115%] scale-[0.85] opacity-0 md:opacity-60 z-20 bg-white border border-gray-100 cursor-pointer hover:bg-gray-50';
        }

        return 'translate-x-0 scale-75 opacity-0 z-10 bg-white pointer-events-none';
    };

    return (
        <section className="w-full overflow-hidden bg-white py-14 sm:py-20 md:py-32">
            <div className="mx-auto max-w-325 px-6 sm:px-10 lg:px-12">
                <div className="mb-10 flex flex-col items-start justify-between gap-6 md:mb-24 md:flex-row md:items-end md:gap-8">
                    <div className="max-w-xl text-left">
                        <h2 className="mb-3 text-3xl font-black italic tracking-tighter text-[#2A2A2A] md:mb-4 md:text-[3rem]">
                            KATA MEREKA
                        </h2>
                        <p className="text-sm leading-relaxed text-[#A8A8A8] md:text-base">
                            Pengalaman nyata dari pelanggan dan vendor di seluruh Indonesia.
                        </p>
                    </div>

                    <div className="flex w-full items-center justify-end gap-3 md:w-auto md:gap-4">
                        <button
                            onClick={handlePrev}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-[#2A2A2A] shadow-sm transition-all hover:-translate-y-1 hover:border-[#FCE6E3] hover:bg-[#FCE6E3] hover:shadow-md active:scale-95 focus:outline-none md:h-14 md:w-14"
                            aria-label="Previous Testimonial"
                        >
                            <ChevronLeftIcon />
                        </button>

                        <button
                            onClick={handleNext}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-[#2A2A2A] shadow-sm transition-all hover:-translate-y-1 hover:border-[#FCE6E3] hover:bg-[#FCE6E3] hover:shadow-md active:scale-95 focus:outline-none md:h-14 md:w-14"
                            aria-label="Next Testimonial"
                        >
                            <ChevronRightIcon />
                        </button>
                    </div>
                </div>

                <div className="relative flex h-80 w-full items-center justify-center sm:h-90 md:h-100">
                    {testimonials.map((testimonial, index) => {
                        const isActive = index === activeIndex;
                        const diff = (index - activeIndex + testimonials.length) % testimonials.length;

                        return (
                            <div
                                key={testimonial.id}
                                className={`absolute flex h-full w-full max-w-75 flex-col justify-between rounded-[1.7rem] p-6 transition-all duration-700 ease-in-out sm:max-w-[320px] sm:rounded-4xl sm:p-8 md:max-w-95 md:p-10 ${getCardStyles(index)}`}
                                onClick={() => {
                                    if (diff === 1) handleNext();
                                    if (diff === testimonials.length - 1) handlePrev();
                                }}
                            >
                                <div>
                                    <div className="mb-5 flex items-center gap-1.5 sm:mb-8">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <StarIcon key={star} active={isActive} />
                                        ))}
                                    </div>

                                    <p className={`mb-5 line-clamp-5 text-sm leading-relaxed italic transition-colors duration-500 sm:mb-8 md:text-base ${isActive ? 'text-gray-300' : 'text-gray-500'}`}>
                                        "{testimonial.text}"
                                    </p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm md:h-12 md:w-12"
                                    />
                                    <div className="flex flex-col">
                                        <span className={`text-xs font-bold tracking-wide transition-colors duration-500 md:text-sm ${isActive ? 'text-white' : 'text-[#2A2A2A]'}`}>
                                            {testimonial.name}
                                        </span>
                                        <span className={`text-[9px] font-bold uppercase tracking-[0.15em] transition-colors duration-500 md:text-[10px] ${isActive ? 'text-[#FCE6E3]/80' : 'text-[#A8A8A8]'}`}>
                                            {testimonial.role}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}