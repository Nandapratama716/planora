'use client';

import AdminHeader from '@/components/admin/AdminHeader';

export default function AdminPengaturanPage() {
    return (
        <>
            <AdminHeader searchPlaceholder="CARI PENGATURAN SISTEM..." />

            <div className="flex-1 overflow-y-auto p-10 pb-16">
                <div className="max-w-[1100px] mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
                        <div>
                            <span className="text-[10px] font-bold tracking-[0.2em] text-[#A8A8A8] uppercase mb-2 block">
                                KONFIGURASI PLATFORM INTI
                            </span>
                            <h1 className="text-4xl md:text-[2.75rem] leading-[1.05] font-black italic tracking-tighter text-[#2A2A2A]">
                                SISTEM <br /> CONFIG.
                            </h1>
                        </div>
                    </div>

                    <div className="bg-white rounded-[2rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100 p-8 md:p-10">
                        <p className="text-[10px] font-bold tracking-[0.15em] text-[#A8A8A8] uppercase mb-4">
                            MODUL PENGATURAN
                        </p>
                        <p className="text-sm md:text-base text-[#2A2A2A] leading-relaxed">
                            Halaman ini disiapkan sebagai entry point untuk konfigurasi sistem admin.
                            Komponen pengaturan detail dapat ditambahkan pada iterasi berikutnya.
                        </p>
                    </div>

                    <div className="mt-16 pb-4 text-center">
                        <p className="text-[8px] font-bold tracking-[0.3em] text-[#A8A8A8] uppercase">
                            PLANORA ECOSYSTEM • MODUL SISTEM CONFIG • 2026
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
