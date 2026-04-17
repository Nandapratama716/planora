'use client';

import React, { useState } from 'react';
import AdminHeader from '@/components/admin/AdminHeader';
import FilterTabs from '@/components/admin/FilterTabs';
import AdminPagination from '@/components/admin/AdminPagination';
import AdminStatCard from '@/components/admin/AdminStatCard';
import StatusBadge from '@/components/admin/StatusBadge';

const BuildingIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 22h16" /><path d="M12 2 4 7h16Z" /><path d="M18 22V11" /><path d="M14 22V11" /><path d="M10 22V11" /><path d="M6 22V11" /></svg>
);
const ClockIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
);
const CheckSquareIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
);
const AlertCircleIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></svg>
);

export default function AdminMonitoringTrxPage() {
    const [activeTab, setActiveTab] = useState<'semua' | 'tertahan' | 'sudah-cair'>('semua');

    return (
        <>
            <AdminHeader searchPlaceholder="CARI INVOICE ATAU ID TRANSAKSI..." />

            <div className="flex-1 overflow-y-auto p-10 pb-16">
                <div className="max-w-[1300px] mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
                        <div>
                            <span className="text-[10px] font-bold tracking-[0.2em] text-[#A8A8A8] uppercase mb-2 block">
                                ARUS KAS EKOSISTEM GLOBAL
                            </span>
                            <h1 className="text-4xl md:text-[2.75rem] leading-[1.05] font-black italic tracking-tighter text-[#2A2A2A]">
                                MONITORING <br /> TRANSAKSI SISTEM.
                            </h1>
                        </div>

                        <div className="flex items-center bg-white rounded-full px-8 py-2 border border-gray-100 shadow-sm h-14">
                            <div className="flex flex-col items-center justify-center pr-8 border-r border-gray-100">
                                <span className="text-[8px] font-bold tracking-widest text-[#A8A8A8] uppercase">FEE PLATFORM</span>
                                <span className="text-base font-black text-emerald-500 leading-none mt-1">Rp 124.5M</span>
                            </div>
                            <div className="flex flex-col items-center justify-center pl-8">
                                <span className="text-[8px] font-bold tracking-widest text-[#A8A8A8] uppercase">REFUND PENDING</span>
                                <span className="text-base font-black text-red-500 leading-none mt-1">02</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-14">
                        <AdminStatCard
                            icon={<BuildingIcon className="w-6 h-6" />}
                            label="TOTAL NILAI TRANSAKSI (GMV)"
                            value="Rp 2.450M"
                        />

                        <AdminStatCard
                            icon={<ClockIcon className="w-6 h-6" />}
                            label="SALDO TERTAHAN (ESCROW)"
                            value="Rp 840.2M"
                            valueClassName="text-[#A8A8A8]"
                            iconWrapClassName="bg-[#F4F4F5] text-gray-400"
                        />

                        <AdminStatCard
                            icon={<CheckSquareIcon className="w-6 h-6" />}
                            label="SUDAH CAIR HARI INI"
                            value="Rp 42.5M"
                            valueClassName="text-emerald-500"
                            iconWrapClassName="bg-emerald-50 text-emerald-500"
                            cardBorderClassName="border-emerald-100/50"
                        />

                        <AdminStatCard
                            icon={<AlertCircleIcon className="w-6 h-6" />}
                            label="KASUS SENGKETA"
                            value="02 Kasus"
                            valueClassName="text-red-500"
                            iconWrapClassName="bg-[#FDF1F0] text-red-500"
                            cardBorderClassName="border-red-100/50"
                        />
                    </div>

                    <div className="bg-white rounded-[2rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100 p-8 flex flex-col">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                            <FilterTabs
                                active={activeTab}
                                onChange={setActiveTab}
                                tabs={[
                                    { label: 'SEMUA TRANSAKSI', value: 'semua' },
                                    { label: 'TERTAHAN', value: 'tertahan' },
                                    { label: 'SUDAH CAIR', value: 'sudah-cair' },
                                ]}
                            />

                            <span className="text-[9px] font-bold tracking-[0.2em] text-[#A8A8A8] uppercase">
                                PERIODE: APRIL 2026
                            </span>
                        </div>

                        <div className="flex flex-col w-full mb-10">
                            <div className="flex items-center pb-5 border-b border-gray-100">
                                <div className="w-[30%] text-[9px] font-bold tracking-[0.2em] text-[#A8A8A8] uppercase">INVOICE & VENDOR</div>
                                <div className="w-[30%] text-[9px] font-bold tracking-[0.2em] text-[#A8A8A8] uppercase">NAMA PELANGGAN</div>
                                <div className="w-[20%] text-[9px] font-bold tracking-[0.2em] text-[#A8A8A8] uppercase">NOMINAL (RP)</div>
                                <div className="w-[20%] text-[9px] font-bold tracking-[0.2em] text-[#A8A8A8] uppercase text-right pr-2">STATUS ARUS DANA</div>
                            </div>

                            <div className="flex items-center py-6 border-b border-gray-50 transition-colors hover:bg-gray-50/50">
                                <div className="w-[30%] flex flex-col">
                                    <span className="text-[11px] font-extrabold text-[#2A2A2A] mb-1 tracking-widest uppercase">INV/2026/04/001</span>
                                    <span className="text-[8px] font-medium text-gray-400 uppercase tracking-wider">WAFA MEDIA STUDIO</span>
                                </div>
                                <div className="w-[30%] flex flex-col">
                                    <span className="text-[11px] font-extrabold text-[#2A2A2A] mb-1 tracking-tight">ANDI PRATAMA</span>
                                    <span className="text-[8px] font-medium text-gray-400">andi.pratama@gmail.com</span>
                                </div>
                                <div className="w-[20%]">
                                    <span className="text-[11px] font-bold text-[#2A2A2A] tracking-wider">5.500.000</span>
                                </div>
                                <div className="w-[20%] flex justify-end">
                                    <StatusBadge text="SUDAH CAIR" variant="emerald" />
                                </div>
                            </div>

                            <div className="flex items-center py-6 border-b border-gray-50 transition-colors hover:bg-gray-50/50">
                                <div className="w-[30%] flex flex-col">
                                    <span className="text-[11px] font-extrabold text-[#2A2A2A] mb-1 tracking-widest uppercase">INV/2026/04/002</span>
                                    <span className="text-[8px] font-medium text-gray-400 uppercase tracking-wider">CATERING JAYA RAYA</span>
                                </div>
                                <div className="w-[30%] flex flex-col">
                                    <span className="text-[11px] font-extrabold text-[#2A2A2A] mb-1 tracking-tight">SITI AMINAH</span>
                                    <span className="text-[8px] font-medium text-gray-400">siti.a@outlook.com</span>
                                </div>
                                <div className="w-[20%]">
                                    <span className="text-[11px] font-bold text-[#2A2A2A] tracking-wider">12.000.000</span>
                                </div>
                                <div className="w-[20%] flex justify-end">
                                    <StatusBadge text="TERTAHAN (ESCROW)" variant="blue" bordered />
                                </div>
                            </div>

                            <div className="flex items-center py-6 border-b border-gray-50 transition-colors hover:bg-gray-50/50">
                                <div className="w-[30%] flex flex-col">
                                    <span className="text-[11px] font-extrabold text-[#2A2A2A] mb-1 tracking-widest uppercase">INV/2026/04/003</span>
                                    <span className="text-[8px] font-medium text-gray-400 uppercase tracking-wider">DREAM DECOR PADANG</span>
                                </div>
                                <div className="w-[30%] flex flex-col">
                                    <span className="text-[11px] font-extrabold text-[#2A2A2A] mb-1 tracking-tight">BUDI SANTOSO</span>
                                    <span className="text-[8px] font-medium text-gray-400">budi.san@gmail.com</span>
                                </div>
                                <div className="w-[20%]">
                                    <span className="text-[11px] font-bold text-[#2A2A2A] tracking-wider">7.500.000</span>
                                </div>
                                <div className="w-[20%] flex justify-end">
                                    <StatusBadge text="SENGKETA / MASALAH" variant="red" bordered helperActionText="BANTU PENENGAH" />
                                </div>
                            </div>
                        </div>

                        <AdminPagination pages={[1, 2]} currentPage={1} />
                    </div>

                    <div className="mt-16 pb-4 text-center">
                        <p className="text-[8px] font-bold tracking-[0.3em] text-[#A8A8A8] uppercase">
                            PLANORA ECOSYSTEM • MONITORING FINANSIAL • 2026
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
