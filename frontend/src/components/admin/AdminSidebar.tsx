'use client';

import { useState, type ComponentType } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const GridIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /></svg>
);
const ShieldCheckIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
);
const UsersIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
);
const ActivityIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
);
const LayersIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
);
const SettingsIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
);
const LogoutIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" /></svg>
);

type NavItem = {
    href: string;
    label: string;
    icon: ComponentType<{ className?: string }>;
    activeMatch?: string[];
};

const navGroups: Array<{ title: string; items: NavItem[] }> = [
    {
        title: 'SUPERVISION',
        items: [
            { href: '/admin/dashboard', label: 'DASHBOARD', icon: GridIcon, activeMatch: ['/admin/dashboard'] },
            { href: '/admin/verifikasi', label: 'VERIFIKASI VENDOR', icon: ShieldCheckIcon, activeMatch: ['/admin/verifikasi'] },
            { href: '/admin/manajemen-user', label: 'MANAJEMEN USER', icon: UsersIcon, activeMatch: ['/admin/manajemen-user'] },
        ],
    },
    {
        title: 'OPERATIONS',
        items: [
            { href: '/admin/monitoring', label: 'MONITORING TRX', icon: ActivityIcon, activeMatch: ['/admin/monitoring'] },
            { href: '/admin/kategori-jasa', label: 'KATEGORI JASA', icon: LayersIcon, activeMatch: ['/admin/kategori-jasa'] },
            { href: '/admin/pengaturan', label: 'SISTEM CONFIG', icon: SettingsIcon, activeMatch: ['/admin/pengaturan'] },
        ],
    },
];

export default function AdminSidebar() {
    const pathname = usePathname();
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const isActive = (item: NavItem) =>
        item.activeMatch?.some((match) => pathname === match || pathname.startsWith(`${match}/`)) ??
        (pathname === item.href || pathname.startsWith(`${item.href}/`));

    return (
        <>
            <aside className="w-[280px] bg-white border-r border-gray-100 flex flex-col h-full flex-shrink-0 z-20">
                <div className="p-8 pb-10 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#2A2A2A] rounded-full flex items-center justify-center shadow-sm">
                        <span className="text-white font-bold text-lg">P</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-extrabold text-lg text-[#2A2A2A] tracking-tight leading-none mb-1">PLANORA</span>
                        <span className="text-[8px] font-bold tracking-[0.2em] text-[#A8A8A8] uppercase">Admin Command</span>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto px-6 flex flex-col gap-8">
                    {navGroups.map((group) => (
                        <div key={group.title} className="flex flex-col gap-2">
                            <span className="text-[9px] font-bold tracking-[0.2em] text-[#D1D5DB] uppercase px-4 mb-2">{group.title}</span>
                            {group.items.map((item) => {
                                const active = isActive(item);
                                const Icon = item.icon;

                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-colors group ${active ? 'bg-[#2A2A2A] shadow-md shadow-[#2A2A2A]/20' : 'hover:bg-gray-50'}`}
                                    >
                                        <Icon className={`w-4 h-4 ${active ? 'text-white' : 'text-[#9CA3AF] group-hover:text-[#2A2A2A] transition-colors'}`} />
                                        <span className={`text-[10px] font-bold tracking-widest uppercase mt-0.5 ${active ? 'text-white' : 'text-[#9CA3AF] group-hover:text-[#2A2A2A] transition-colors'}`}>
                                            {item.label}
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>
                    ))}
                </div>

                <div className="p-6 mt-auto">
                    <button
                        type="button"
                        onClick={() => setShowLogoutModal(true)}
                        className="w-full flex items-center justify-center gap-2 bg-[#FAFAFC] border border-gray-100 hover:border-red-100 hover:bg-[#FDF1F0] py-3.5 rounded-2xl transition-all group"
                    >
                        <LogoutIcon className="w-4 h-4 text-[#EF4444] group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[10px] font-bold tracking-widest text-[#EF4444] uppercase mt-0.5">KELUAR</span>
                    </button>
                </div>
            </aside>

            {showLogoutModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#2A2A2A]/80 backdrop-blur-sm transition-all duration-300">
                    <div className="bg-white rounded-[2rem] p-8 md:p-10 w-full max-w-[380px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col items-center text-center transform scale-100 opacity-100 transition-all">
                        <div className="w-16 h-16 bg-[#FDF1F0] border border-[#FCE6E3] shadow-inner rounded-[1.25rem] flex items-center justify-center mb-6">
                            <LogoutIcon className="w-6 h-6 text-[#EF4444] ml-1" />
                        </div>
                        <h3 className="text-2xl font-black italic tracking-tighter text-[#2A2A2A] uppercase mb-2">Keluar Akun</h3>
                        <p className="text-[10px] font-bold tracking-wider text-[#A8A8A8] uppercase mb-8 leading-relaxed">Apakah Anda yakin ingin keluar dari <br /> Admin Command Planora?</p>
                        <div className="flex flex-col w-full gap-3">
                            <Link href="/login" className="w-full flex justify-center items-center py-4 rounded-xl bg-[#EF4444] text-white text-[10px] font-bold tracking-widest uppercase hover:bg-red-600 transition-colors shadow-lg shadow-red-500/20">YA, KELUAR SEKARANG</Link>
                            <button onClick={() => setShowLogoutModal(false)} className="w-full py-4 rounded-xl bg-white border-2 border-gray-100 text-[#A8A8A8] hover:text-[#2A2A2A] hover:border-gray-300 text-[10px] font-bold tracking-widest uppercase transition-colors">BATAL</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
