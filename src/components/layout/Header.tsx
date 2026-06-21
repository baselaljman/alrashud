"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, ChevronDown, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { handleContactClick } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { services } from '@/lib/data';

export function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2 space-x-reverse">
            <div className="bg-primary p-1.5 rounded-lg">
              <Car className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold font-headline tracking-tight text-primary">الرشود</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">الرئيسية</Link>
          {mounted ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors outline-none">
                  خدماتنا <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {services.map((service) => (
                  <DropdownMenuItem key={service.id} asChild>
                    <Link href={`#${service.id}`} className="w-full cursor-pointer">{service.title}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <span className="text-sm font-medium opacity-50">خدماتنا</span>
          )}
          <Link href="#before-after" className="text-sm font-medium hover:text-primary transition-colors">قبل وبعد</Link>
          <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">لماذا نحن؟</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="default" className="hidden md:flex" asChild>
            <a 
              href="tel:0565218059"
              onClick={(e) => handleContactClick(e, "tel:0565218059", false)}
            >
              احجز موعدك
            </a>
          </Button>
          
          {/* Mobile Nav */}
          {mounted && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="text-right">القائمة</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
                  <Link href="/" className="text-lg font-medium border-b pb-2">الرئيسية</Link>
                  <div className="flex flex-col gap-2">
                    <span className="text-lg font-medium">خدماتنا</span>
                    <div className="grid grid-cols-1 gap-1 pr-4">
                      {services.map((service) => (
                        <Link 
                          key={service.id} 
                          href={`#${service.id}`} 
                          className="text-muted-foreground py-1 border-r-2 border-primary/20 pr-3"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link href="#before-after" className="text-lg font-medium border-b pb-2">قبل وبعد</Link>
                  <Link href="#features" className="text-lg font-medium border-b pb-2">لماذا نحن؟</Link>
                  <Button className="w-full mt-4" asChild>
                    <a 
                      href="tel:0565218059"
                      onClick={(e) => handleContactClick(e, "tel:0565218059", false)}
                    >
                      اتصل الآن
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
}