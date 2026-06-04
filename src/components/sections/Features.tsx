
"use client";

import React from 'react';
import { features } from '@/lib/data';

export function Features() {
  return (
    <section id="features" className="py-24 bg-[#EDEFF0]">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-primary">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
