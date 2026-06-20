"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import { beforeAfterCases } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

export function BeforeAfter() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="before-after" className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary">إبداعاتنا</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#0F172A]">
            معرض الأعمال <span className="text-[#FDD60C] glow-yellow bg-[#0F172A] px-4 py-1.5 rounded-xl inline-block mt-2 md:mt-0 shadow-lg">(قبل وبعد)</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            شاهد نتائج احترافيتنا في إصلاح السيارات وتجديدها بأدق التفاصيل. اضغط على الصور لتكبيرها.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {beforeAfterCases.map((item) => (
            <div key={item.id}>
              {mounted ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <div 
                      className="cursor-pointer group relative rounded-xl overflow-hidden shadow-lg border-2 border-transparent hover:border-primary transition-all bg-muted"
                    >
                      <div className="grid grid-cols-2 gap-0.5 h-48">
                        <div className="relative w-full h-full">
                          <Image 
                            src={item.before!} 
                            alt={`${item.title} - قبل`} 
                            fill 
                            className="object-cover"
                          />
                          <div className="absolute top-2 right-2 bg-red-500/90 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">قبل</div>
                        </div>
                        <div className="relative w-full h-full">
                          <Image 
                            src={item.after!} 
                            alt={`${item.title} - بعد`} 
                            fill 
                            className="object-cover"
                          />
                          <div className="absolute top-2 right-2 bg-green-500/90 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">بعد</div>
                        </div>
                      </div>
                      <div className="p-4 bg-white">
                        <h3 className="font-bold text-lg text-[#0F172A] border-r-4 border-[#FDD60C] pr-2">{item.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1">عرض التفاصيل والمقارنة</p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[95vh] flex flex-col p-4">
                    <DialogHeader className="mb-2">
                      <DialogTitle className="text-right text-xl">{item.title}</DialogTitle>
                      <DialogDescription className="text-right">مقارنة بين حالة السيارة قبل وبعد عملية الإصلاح والدهان في مركز الرشود.</DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="flex-1 w-full pr-4">
                      <div className="space-y-6 pb-4">
                        <div className="space-y-2">
                          <Badge className="bg-red-500 text-white">الحالة قبل الإصلاح</Badge>
                          <div className="relative aspect-video rounded-lg overflow-hidden border bg-muted">
                            <Image 
                              src={item.before!} 
                              alt="Before Large" 
                              fill 
                              className="object-contain md:object-cover" 
                            />
                          </div>
                        </div>
                        
                        <div className="flex justify-center">
                          <div className="h-8 w-1 bg-primary/20 rounded-full" />
                        </div>

                        <div className="space-y-2">
                          <Badge className="bg-green-500 text-white">النتيجة النهائية (بعد)</Badge>
                          <div className="relative aspect-video rounded-lg overflow-hidden border bg-muted shadow-inner">
                            <Image 
                              src={item.after!} 
                              alt="After Large" 
                              fill 
                              className="object-contain md:object-cover" 
                            />
                          </div>
                        </div>
                        
                        <div className="p-4 bg-primary/5 rounded-lg border border-primary/10 text-sm leading-relaxed">
                          <p className="font-bold text-primary mb-1">تفاصيل العمل:</p>
                          تم استخدام أحدث تقنيات شفط الصدمات وطلاء حراري (فرن) مع ضمان مطابقة اللون الأصلي بالكمبيوتر بنسبة 100%. العمل تم تحت إشراف فنيين متخصصين لضمان جودة الوكالة.
                        </div>
                      </div>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              ) : (
                <div 
                  className="relative rounded-xl overflow-hidden shadow-lg bg-muted"
                >
                  <div className="grid grid-cols-2 gap-0.5 h-48">
                    <div className="relative w-full h-full">
                      <Image 
                        src={item.before!} 
                        alt={`${item.title} - قبل`} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div className="relative w-full h-full">
                      <Image 
                        src={item.after!} 
                        alt={`${item.title} - بعد`} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-bold text-lg text-[#0F172A] border-r-4 border-[#FDD60C] pr-2">{item.title}</h3>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}