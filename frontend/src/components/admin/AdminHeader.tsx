'use client';

type AdminHeaderProps = {
    searchPlaceholder: string;
};

const SearchIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
);

export default function AdminHeader({ searchPlaceholder }: AdminHeaderProps) {
    return (
        <header className="h-[90px] bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-10 sticky top-0 z-10 flex-shrink-0">
            <div className="relative w-full max-w-[400px]">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                    type="text"
                    placeholder={searchPlaceholder}
                    aria-label={searchPlaceholder}
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
    );
}
