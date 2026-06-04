"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { services } from '@/lib/data';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function Services() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="services" className="py-24 bg-[#EDEFF0]">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">خدماتنا المتخصصة</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">ماذا نقدم في مركز الرشود؟</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نقدم حزمة متكاملة من حلول صيانة السيارات باستخدام أحدث التقنيات لضمان أفضل النتائج.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              id={service.id}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-none bg-white scroll-mt-20"
            >
              {mounted ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative h-48 w-full overflow-hidden cursor-zoom-in">
                      <Image 
                        src={service.image || `https://picsum.photos/seed/${index}/600/400`}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        data-ai-hint="car repair"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 right-4 bg-primary p-3 rounded-full glow-primary">
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-none">
                    <DialogHeader className="sr-only">
                      <DialogTitle>{service.title}</DialogTitle>
                      <DialogDescription>{service.description}</DialogDescription>
                    </DialogHeader>
                    <div className="relative w-full h-[60vh] md:h-[80vh]">
                      <Image 
                        src={service.image || `https://picsum.photos/seed/${index}/1200/800`}
                        alt={service.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-sm opacity-90">{service.description}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              ) : (
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={service.image || `https://picsum.photos/seed/${index}/600/400`}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}