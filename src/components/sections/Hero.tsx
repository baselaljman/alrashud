"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageSquare } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroBg = PlaceHolderImages.find(img => img.id === 'hero-bg')?.imageUrl || 'https://i.postimg.cc/dDcssKQK/newrenew.png';

  return (
    <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background with panoramic animation */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-no-repeat animate-pan-y"
        style={{ 
          backgroundImage: `url('${heroBg}')`,
          backgroundSize: '120% 120%',
        }}
        role="img"
        aria-label="أفضل مركز سمكرة ودهان سيارات في الرياض"
      />
      <div className="absolute inset-0 z-10 bg-black/50" />
      
      <div className="container relative z-20 px-4 mx-auto text-center">
        <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight text-white leading-tight">
          مركز <span className="text-[#FDD60C] glow-yellow">الرشود</span>
          <br />
          لسمكرة ودهان السيارات
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
          الخيار الأول للسمكرة والدهان في الرياض. جودة لا تضاهى، مطابقة ألوان بالكمبيوتر، وضمان 5 سنوات على جميع الأعمال.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 w-full sm:w-auto shadow-lg shadow-primary/20">
            <a href="tel:0532526276">
              <Phone className="ml-2 h-5 w-5" /> اتصل بنا للحصول على عرض سعر
            </a>
          </Button>
          <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white text-lg px-8 py-6 w-full sm:w-auto shadow-lg shadow-green-500/20">
            <a href="https://wa.me/966532526276" target="_blank" rel="noopener noreferrer">
              <MessageSquare className="ml-2 h-5 w-5" /> استفسر عبر الواتساب
            </a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
