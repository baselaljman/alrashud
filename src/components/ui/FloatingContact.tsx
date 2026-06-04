"use client";

import React from 'react';
import { MessageCircle, PhoneCall } from 'lucide-react';

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 left-6 z-[60] flex flex-col gap-4 items-start">
      {/* WhatsApp Button - Permanently Extended */}
      <a 
        href="https://wa.me/966504390007"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-[#25D366] text-white rounded-full px-5 py-3 shadow-2xl hover:scale-105 transition-all duration-300 border border-white/20"
        aria-label="WhatsApp Us"
      >
        <div className="bg-white/20 p-1.5 rounded-full">
          <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
        </div>
        <span className="font-bold text-sm md:text-base whitespace-nowrap">
          راسلنا واتساب
        </span>
      </a>

      {/* Phone Button - Permanently Extended & Pulsing */}
      <a 
        href="tel:0504390007"
        className="flex items-center gap-3 bg-primary text-white rounded-full px-5 py-3 shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse border border-white/20"
        aria-label="Call Us"
      >
        <div className="bg-white/20 p-1.5 rounded-full">
          <PhoneCall className="h-5 w-5 md:h-6 md:w-6" />
        </div>
        <span className="font-bold text-sm md:text-base whitespace-nowrap">
          اتصل بنا الآن
        </span>
      </a>
    </div>
  );
}
