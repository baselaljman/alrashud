
"use client";

import React from 'react';
import Image from 'next/image';
import { carBrands } from '@/lib/data';

export function BrandSlider() {
  return (
    <section className="py-16 bg-white border-t border-b overflow-hidden">
      <div className="container px-4 mx-auto mb-8 text-center">
        <h3 className="text-xl font-bold text-slate-800 border-b-2 border-[#FDD60C] pb-2 inline-block uppercase tracking-widest">الماركات التي نخدمها</h3>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="py-4 animate-marquee whitespace-nowrap flex gap-16 items-center">
          {[...carBrands, ...carBrands].map((brand, i) => (
            <div key={i} className="inline-flex items-center gap-4">
              {brand.logo ? (
                <div className="relative w-32 h-16 transition-all duration-300 hover:scale-110 flex items-center justify-center">
                  <Image 
                    src={brand.logo} 
                    alt={brand.name} 
                    fill 
                    className="object-contain"
                  />
                </div>
              ) : (
                <span className="text-3xl md:text-5xl font-black text-primary/60 hover:text-primary transition-colors cursor-default uppercase">
                  {brand.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
