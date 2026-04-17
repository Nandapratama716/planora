'use client';

type AdminPaginationProps = {
    pages: number[];
    currentPage: number;
    prevLabel?: string;
    nextLabel?: string;
};

const ChevronLeftIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m15 18-6-6 6-6" /></svg>
);
const ChevronRightIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6" /></svg>
);

export default function AdminPagination({ pages, currentPage, prevLabel = 'SEBELUMNYA', nextLabel = 'SELANJUTNYA' }: AdminPaginationProps) {
    return (
        <div className="flex items-center justify-between mt-auto">
            <button type="button" className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 rounded-full text-[9px] font-bold tracking-widest text-[#A8A8A8] hover:text-[#2A2A2A] uppercase transition-colors">
                <ChevronLeftIcon className="w-3.5 h-3.5" />
                {prevLabel}
            </button>

            <div className="flex items-center gap-2">
                {pages.map((page) => (
                    <button
                        key={page}
                        type="button"
                        className={`w-8 h-8 rounded-full text-[10px] font-bold flex items-center justify-center transition-colors ${page === currentPage
                                ? 'bg-[#2A2A2A] text-white shadow-md'
                                : 'bg-white border border-gray-100 text-[#A8A8A8] hover:bg-gray-50'
                            }`}
                    >
                        {page}
                    </button>
                ))}
            </div>

            <button type="button" className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 rounded-full text-[9px] font-bold tracking-widest text-[#A8A8A8] hover:text-[#2A2A2A] uppercase transition-colors">
                {nextLabel}
                <ChevronRightIcon className="w-3.5 h-3.5" />
            </button>
        </div>
    );
}
