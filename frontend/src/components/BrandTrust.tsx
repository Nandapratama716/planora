import React from "react";

export default function BrandTrust() {
    const brands = [
        { name: "PHOTOGRAPHY.CO", className: "font-black italic tracking-tight" },
        { name: "KATERING.KU", className: "font-bold tracking-[0.2em]" },
        { name: "DEKORASI.ID", className: "font-black italic tracking-tight" },
        { name: "WEDDINGPRO", className: "font-extrabold tracking-wider" },
    ];

    return (
        <section className="w-full border-b border-gray-100 bg-white py-6">
            <div className="mx-auto flex max-w-325 flex-col items-center justify-center px-6 sm:px-10 lg:px-12">
                <h2 className="mb-10 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gray md:text-xs">
                    Berbagi pengalaman dengan ribuan vendor profesional
                </h2>

                <div className="flex flex-wrap items-center justify-center gap-10 opacity-60 grayscale transition-all duration-300 hover:grayscale-0 md:gap-16 lg:gap-24">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className={`cursor-default text-xl text-brand-gray transition-colors hover:text-brand-dark md:text-2xl ${brand.className}`}
                        >
                            {brand.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}