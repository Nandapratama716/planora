"use client";

import React from "react";

const SearchIcon = ({ className }: { className?: string }) => (
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
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.3-4.3"></path>
  </svg>
);

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

const StarSolidIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
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

export default function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-brand-bg font-sans text-gray-900">
      <div className="pointer-events-none absolute right-[-8%] top-[-10%] z-0 h-[620px] w-[620px] rounded-full bg-[#fff0ed] opacity-70 blur-[100px]"></div>
      <div className="pointer-events-none absolute bottom-[-12%] left-[-12%] z-0 h-[520px] w-[520px] rounded-full bg-[#e8eaee] opacity-60 blur-[120px]"></div>

      <div className="relative z-10 mx-auto max-w-[1320px] px-6 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between border-b border-[#ececef] py-5">
          <div className="flex cursor-pointer items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-dark">
              <span className="text-sm font-bold text-white">P</span>
            </div>
            <span className="text-lg font-extrabold tracking-tight">PLANORA</span>
          </div>

          <nav className="hidden items-center gap-10 md:flex">
            <div className="relative cursor-pointer">
              <span className="text-[11px] font-bold tracking-widest text-gray-900">BERANDA</span>
              <div className="absolute -bottom-2 left-1/2 h-[2px] w-4 -translate-x-1/2 transform bg-gray-900"></div>
            </div>
            <span className="cursor-pointer text-[11px] font-bold tracking-widest text-brand-gray transition-colors hover:text-gray-900">
              LAYANAN
            </span>
            <span className="cursor-pointer text-[11px] font-bold tracking-widest text-brand-gray transition-colors hover:text-gray-900">
              CARA KERJA
            </span>
            <span className="cursor-pointer text-[11px] font-bold tracking-widest text-brand-gray transition-colors hover:text-gray-900">
              BANTUAN
            </span>
          </nav>

          <div className="flex items-center gap-6">
            <span className="hidden cursor-pointer text-[11px] font-bold tracking-widest text-brand-gray transition-colors hover:text-gray-900 sm:block">
              MASUK
            </span>
            <button className="rounded-full bg-brand-peach px-6 py-3 text-[11px] font-bold tracking-widest text-brand-dark transition-colors hover:bg-brand-peachHover">
              MULAI GRATIS
            </button>
          </div>
        </header>

        <main className="grid grid-cols-1 items-center gap-12 pb-20 pt-16 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col items-start pr-0 lg:pr-12">
            <div className="mb-8 inline-flex items-center gap-2 rounded-md bg-brand-peach px-3 py-1.5">
              <StarSolidIcon className="h-3 w-3 text-brand-dark" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-brand-dark">
                PLATFORM MANAJEMEN EVENT TERINTEGRASI
              </span>
            </div>

            <h1 className="mb-6 text-[3.5rem] font-black leading-[1] tracking-[-0.05em] text-brand-dark md:text-[5.2rem] md:leading-[0.93]">
              RENCANAKAN <br />
              <span className="font-bold italic text-[#a4a4a4]">MOMEN</span> <br />
              TERBAIK <br />
              ANDA.
            </h1>

            <p className="mb-10 max-w-[540px] text-base leading-relaxed text-gray-500 md:text-lg md:leading-[1.45]">
              Temukan vendor terbaik, kelola jadwal otomatis, dan pantau progres acara Anda dalam satu
              sistem yang elegan dan transparan.
            </p>

            <div className="mb-12 flex w-full max-w-[560px] items-center rounded-full border border-gray-100 bg-white p-2.5 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)]">
              <div className="flex flex-1 items-center pl-4">
                <SearchIcon className="mr-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari Fotografer, WO, Katering..."
                  className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
                />
              </div>
              <button className="flex items-center gap-2 whitespace-nowrap rounded-full bg-brand-dark px-7 py-3.5 text-[11px] font-bold tracking-widest text-white transition-colors hover:bg-black">
                TEMUKAN JASA
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <img
                  className="h-9 w-9 rounded-full border-2 border-brand-bg object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                  alt="User 1"
                />
                <img
                  className="h-9 w-9 rounded-full border-2 border-brand-bg object-cover"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80"
                  alt="User 2"
                />
                <img
                  className="h-9 w-9 rounded-full border-2 border-brand-bg object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                  alt="User 3"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-brand-dark">10,000+</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gray">
                  Pengguna Terverifikasi
                </span>
              </div>
            </div>
          </div>

          <div className="relative mt-10 flex h-[500px] w-full justify-center md:h-[620px] lg:mt-0 lg:justify-end">
            <div className="relative z-10 h-full w-full max-w-[500px] rounded-[2.5rem] bg-white p-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)]">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
                alt="Event Decoration"
                className="h-full w-full rounded-[2rem] object-cover"
              />

              <div className="pointer-events-none absolute inset-3 rounded-[2rem] bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>

            <div className="absolute right-[-8px] top-[58px] z-20 flex items-start gap-4 rounded-[1.2rem] bg-white p-5 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.15)] md:right-[-16px] lg:right-[-18px]">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-peach">
                <ShieldCheckIcon className="h-5 w-5 text-brand-dark" />
              </div>
              <div className="flex flex-col">
                <span className="mb-0.5 text-[8px] font-bold uppercase tracking-widest text-brand-gray">Status</span>
                <span className="mb-2 text-xs font-bold text-brand-dark">VENDOR TERKURASI</span>
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarSolidIcon key={star} className="h-3 w-3 text-brand-dark" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}