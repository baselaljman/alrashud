"use client";

import React from 'react';
import Link from 'next/link';
import { Car, MapPin, Phone, Mail, Instagram, Twitter } from 'lucide-react';
import { handleContactClick } from '@/lib/utils';

export function Footer() {
  return (
    <footer className="bg-[#1C52E3] text-white pt-20 pb-10">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-white p-1.5 rounded-lg">
                <Car className="h-6 w-6 text-primary" />
              </div>
              <span className="text-2xl font-bold tracking-tight">الرشود</span>
            </Link>
            <p className="text-white/70 leading-relaxed">
              مركزنا الرائد في الرياض لصيانة السيارات بأعلى المعايير العالمية، نفخر بخدمتكم وتوفير أفضل النتائج الممكنة في السمكرة والدهان.
            </p>
            <div className="flex gap-4">
              <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
                <Twitter className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-white border-r-4 border-[#FDD60C] pr-3">روابط هامة</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link href="/" className="hover:text-white transition-colors">الرئيسية</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">سياسة الخصوصية</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">شروط الخدمة</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">خدماتنا</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-white border-r-4 border-[#FDD60C] pr-3">خدماتنا</h4>
            <ul className="space-y-4 text-white/70">
              <li>السمكرة والدهان</li>
              <li>ميكانيكا وكهرباء</li>
              <li>صيانة التكييف</li>
              <li>إصلاح الأيرباق</li>
              <li>تجديد السيارات</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-white border-r-4 border-[#FDD60C] pr-3">تواصل معنا</h4>
            <ul className="space-y-6 text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#FDD60C] shrink-0" />
                <a 
                  href="https://maps.google.com/?q=صناعية+العروبة+الرياض" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  الرياض، صناعية العروبة
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#FDD60C] shrink-0" />
                <a 
                  href="tel:0532526276" 
                  onClick={(e) => handleContactClick(e, "tel:0532526276", false)}
                  className="hover:text-white transition-colors" 
                  dir="ltr"
                >
                  0532526276
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#FDD60C] shrink-0" />
                <span>info@alrushood.sa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} الرشود. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
