type AdminStatCardProps = {
    icon: React.ReactNode;
    label: string;
    value: string;
    valueClassName?: string;
    iconWrapClassName?: string;
    cardBorderClassName?: string;
};

export default function AdminStatCard({
    icon,
    label,
    value,
    valueClassName = 'text-[#2A2A2A]',
    iconWrapClassName = 'bg-[#2A2A2A] text-white',
    cardBorderClassName = 'border-gray-50',
}: AdminStatCardProps) {
    return (
        <div className={`bg-white p-8 rounded-[2rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border flex flex-col items-center justify-center text-center ${cardBorderClassName}`}>
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${iconWrapClassName}`}>
                {icon}
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#A8A8A8] uppercase block mb-2">
                {label}
            </span>
            <span className={`text-3xl md:text-4xl font-black italic tracking-tighter ${valueClassName}`}>
                {value}
            </span>
        </div>
    );
}
