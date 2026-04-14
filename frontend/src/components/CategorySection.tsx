import React from "react";

const ArrowRightIcon = ({ className }: { className?: string }) => (
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
        <path d="M5 12h14"></path>
        <path d="m12 5 7 7-7 7"></path>
    </svg>
);

const CameraIcon = ({ className }: { className?: string }) => (
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
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
        <circle cx="12" cy="13" r="3"></circle>
    </svg>
);

const UtensilsIcon = ({ className }: { className?: string }) => (
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
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
        <path d="M7 2v20"></path>
        <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
    </svg>
);

const GridIcon = ({ className }: { className?: string }) => (
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
        <rect width="7" height="7" x="3" y="3" rx="1"></rect>
        <rect width="7" height="7" x="14" y="3" rx="1"></rect>
        <rect width="7" height="7" x="14" y="14" rx="1"></rect>
        <rect width="7" height="7" x="3" y="14" rx="1"></rect>
    </svg>
);

const ShieldCheckIcon = ({ className }: { className?: string }) => (
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
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
        <path d="m9 12 2 2 4-4"></path>
    </svg>
);

export default function CategorySection() {
    const categories = [
        {
            title: "FOTOGRAFI",
            count: "120+",
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
            icon: <CameraIcon className="h-4 w-4 text-[#2A2A2A]" />,
            offset: false,
        },
        {
            title: "KATERING",
            count: "85+",
            image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop",
            icon: <UtensilsIcon className="h-4 w-4 text-[#2A2A2A]" />,
            offset: false,
        },
        {
            title: "DEKORASI",
            count: "50+",
            image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
            icon: <GridIcon className="h-4 w-4 text-[#2A2A2A]" />,
            offset: true,
        },
        {
            title: "WEDDING ORGANIZER",
            count: "30+",
            image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop",
            icon: <ShieldCheckIcon className="h-4 w-4 text-[#2A2A2A]" />,
            offset: true,
        },
    ];

    return (
        <section id="kategori" className="w-full border-b border-[#ececef] bg-brand-bg pt-8 pb-20 md:pt-10 md:pb-28">
            <div className="mx-auto max-w-325 px-6 sm:px-10 lg:px-12">
                <div className="mb-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
                    <div className="max-w-xl">
                        <h2 className="mb-4 text-[2.5rem] font-black leading-[1.02] tracking-[-0.05em] text-[#2A2A2A] md:text-[3.5rem]">
                            KATEGORI PILIHAN <br />
                            <span className="font-black italic text-[#A8A8A8]">TERINTEGRASI.</span>
                        </h2>
                        <p className="pr-0 text-sm leading-relaxed text-[#A8A8A8] md:pr-10 md:text-base">
                            Satu sistem untuk seluruh kebutuhan acara Anda. Pilih kategori yang Anda butuhkan dan
                            temukan ribuan paket menarik.
                        </p>
                    </div>

                    <div className="group flex cursor-pointer items-center gap-4">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2A2A2A]">
                            LIHAT SEMUA
                        </span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FCE6E3] transition-transform duration-300 group-hover:scale-110">
                            <ArrowRightIcon className="h-4 w-4 text-[#2A2A2A]" />
                        </div>
                    </div>
                </div>

                <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A8A8A8] sm:hidden">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FCE6E3]"></span>
                    Geser untuk lihat kategori lainnya
                </div>

                <div className="-mx-6 flex flex-nowrap gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] touch-pan-x overscroll-x-contain snap-x snap-mandatory sm:hidden [&::-webkit-scrollbar]:hidden">
                    {categories.map((category, index) => (
                        <div key={index} className="group flex min-w-[74vw] max-w-[320px] shrink-0 cursor-grab snap-start flex-col gap-4 active:cursor-grabbing">
                            <div className="relative aspect-4/5 w-full rounded-[2.1rem] bg-white p-2.5 shadow-[0_18px_42px_-18px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:-translate-y-2">
                                <img src={category.image} alt={category.title} className="h-full w-full rounded-[1.55rem] object-cover" />

                                <div className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-md">
                                    {category.icon}
                                </div>
                            </div>

                            <div className="flex flex-col pl-2">
                                <h3 className="mb-1 text-lg font-extrabold tracking-[-0.02em] text-[#2A2A2A]">
                                    {category.title}
                                </h3>
                                <span className="text-[9px] font-bold uppercase tracking-widest text-[#A8A8A8]">
                                    {category.count} VENDOR AKTIF
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="hidden grid-cols-1 gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {categories.map((category, index) => (
                        <div key={index} className={`group flex cursor-pointer flex-col gap-4 ${category.offset ? "lg:mt-20" : ""}`}>
                            <div className="relative aspect-4/5 w-full rounded-[2.1rem] bg-white p-2.5 shadow-[0_18px_42px_-18px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:-translate-y-2">
                                <img src={category.image} alt={category.title} className="h-full w-full rounded-[1.55rem] object-cover" />

                                <div className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-md">
                                    {category.icon}
                                </div>
                            </div>

                            <div className="flex flex-col pl-2">
                                <h3 className="mb-1 text-lg font-extrabold tracking-[-0.02em] text-[#2A2A2A]">
                                    {category.title}
                                </h3>
                                <span className="text-[9px] font-bold uppercase tracking-widest text-[#A8A8A8]">
                                    {category.count} VENDOR AKTIF
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}