'use client';

type FilterTabItem<T extends string> = {
    label: string;
    value: T;
};

type FilterTabsProps<T extends string> = {
    active: T;
    onChange: (value: T) => void;
    tabs: FilterTabItem<T>[];
};

export default function FilterTabs<T extends string>({ active, onChange, tabs }: FilterTabsProps<T>) {
    return (
        <div className="flex items-center gap-2">
            {tabs.map((tab) => (
                <button
                    key={tab.value}
                    type="button"
                    onClick={() => onChange(tab.value)}
                    className={`px-5 py-2.5 rounded-full text-[9px] font-bold tracking-widest uppercase transition-colors border ${active === tab.value
                            ? 'bg-[#2A2A2A] text-white border-[#2A2A2A]'
                            : 'bg-white text-[#A8A8A8] border-gray-200 hover:border-gray-300'
                        }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
}
