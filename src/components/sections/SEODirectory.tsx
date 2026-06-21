"use client";

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, Car, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';

// Highly optimized target Riyadh neighborhoods
const neighborhoods = [
  'حي الملقا', 'حي الصحافة', 'حي الياسمين', 'حي النرجس', 'حي حطين', 'حي النخيل', 'حي الغدير', 'حي العارض', 'حي القيروان',
  'حي الوادي', 'حي المروج', 'حي المصيف', 'حي التعاون', 'حي الازدهار', 'حي الفلاح', 'حي الواحة', 'حي الورود', 'حي السليمانية',
  'حي العليا', 'حي العقيق', 'حي غرناطة', 'حي الروضة', 'حي النسيم', 'حي السلي', 'حي الشفا', 'حي السويدي', 'حي البديعة',
  'صناعية العروبة', 'صناعية شمال الرياض', 'صناعية أم الحمام', 'شمال الرياض', 'شرق الرياض', 'غرب الرياض', 'جنوب الرياض', 'وسط الرياض'
];

// Target luxury and standard car brands
const targetCars = [
  'مرسيدس Mercedes', 'بي ام دبليو BMW', 'لكزس Lexus', 'بورش Porsche', 'أودي Audi', 'رنج روفر Range Rover',
  'تويوتا Toyota', 'هيونداي Hyundai', 'نيسان Nissan', 'كيا Kia', 'فورد Ford', 'جيب Jeep', 'شفروليه Chevrolet',
  'مازدا Mazda', 'جينيسيس Genesis', 'تسلا Tesla', 'كاديلاك Cadillac', 'لاندكروزر Land Cruiser', 'باترول Patrol'
];

// Base core services with alternative Arabic search terms
const serviceKeywords = [
  'سمكرة سيارات واصلاح صدمات', 'دهان ورش بوية فرن الماني', 'تعديل على البارد بدون رش PDR', 'شفط صدمات بالليزر وسحب حواف',
  'مطابقة ألوان بالكمبيوتر بدقة 100%', 'تلميع ساطع نانو سيراميك وحماية طلاء', 'اصلاح شواصي وسحب شاصي هيدروليك',
  'برمجة ايرباق واصلاح ارباقات بعد الحوادث', 'رش مطفي الماني ورش لمعة وكالة', 'تجديد سيارات كلاسيكية وقديمة بالكامل',
  'ميكانيكا عامة وتوضيب مكائن وجيربوكس', 'كهرباء وفحص كمبيوتر شامل للسيارات', 'شحن فريون مكيف واصلاح تسريب تبريد'
];

// Combine the matrices to dynamically output over 800 indexable search terms with maximum SEO weight
const generateSEOManualQueryPhrases = (): string[] => {
  const phrases: string[] = [];

  // Phase 1: Brand + Service + Neighborhood combinations
  targetCars.forEach(car => {
    neighborhoods.slice(0, 15).forEach(neighbor => { // 15 * 19 = 285 phrases
      phrases.push(`ورشة سمكرة ${car} في ${neighbor}`);
      phrases.push(`أفضل ورشة دهان سيارات لإصلاح ${car} بـ ${neighbor}`);
    });
  });

  // Phase 2: Action Nouns + Core Service + Riyadh Regions
  const nouns = ['ورشة سمكرة', 'مركز رش دهان بوية', 'تصليح صدمات دهان', 'محل تعديل صدمات بارد', 'أفضل سمكري', 'خصومات سمكرة ودهان'];
  nouns.forEach(noun => {
    serviceKeywords.slice(0, 6).forEach(service => { // 6 * 14 = 84 phrases
      neighborhoods.slice(0, 14).forEach(neighbor => {
        phrases.push(`${noun} ${service} في ${neighbor} بالرياض`);
      });
    });
  });

  // Phase 3: Detailed localized problems and repairs (150+ combinations)
  const problems = [
    'إصلاح صدمة كبوت وباب', 'سمكرة رفرف خلفي وجانبي', 'تعديل المنيوم وفيبر جلاس لوكالة', 'رش جنوط اسود مطفي ولمعة',
    'وزن اذرعة وميزان الكتروني محترف', 'اصلاح خدوش البودي وازالة الحكوك', 'سحب شاصي على البارد والساخن',
    'تثمين سيارات وتقديم تقديرات حوادث نجم'
  ];
  problems.forEach(prob => {
    targetCars.forEach(car => { // 8 * 19 = 152 phrases
      phrases.push(`${prob} ${car} بضمان 5 سنوات`);
    });
  });

  // Phase 4: Dynamic hyper-local search intent for all remaining neighborhoods to total 800+ items
  neighborhoods.forEach(neighbor => {
    targetCars.forEach(car => {
      phrases.push(`سمكري سيارات ممتاز لـ ${car} قريب من ${neighbor}`);
      phrases.push(`رش صبغة وكالة لسيارة ${car} في ${neighbor}`);
      phrases.push(`تعديل صدمة بدون بويه لـ ${car} بـ ${neighbor}`);
    });
  });

  return phrases;
};

// All SEO variations compiled in background
const allSEOPhrases = generateSEOManualQueryPhrases();

export function SEODirectory() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // If searching, show up to 80 matches. If not searching, show 12 items by default when closed, and all 800+ when open.
  const filteredPhrases = searchQuery
    ? allSEOPhrases.filter(p => p.includes(searchQuery)).slice(0, 80)
    : (isOpen ? allSEOPhrases : allSEOPhrases.slice(0, 12));

  return (
    <section id="seo-directory" className="py-16 bg-slate-50 border-t border-slate-200">
      {/* Invisible crawler list specifically designed to guarantee maximum deep-indexation on Google Search Console */}
      <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
        {allSEOPhrases.map((phrase, idx) => (
          <span key={`crawler-${idx}`}>{phrase}, </span>
        ))}
      </div>

      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <Badge variant="outline" className="mb-3 text-[#FDD60C] bg-[#0F172A] border-transparent px-3 py-1 text-sm font-semibold">
            دليل التغطية والبحث الذكي للسيارات بالرياض
          </Badge>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#0F172A]">
            تغطيتنا الجغرافية والدليل البحثي لخدمات السمكرة والدهان
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            تخدم ورش الرشود كلاس كافة أرجاء وأحياء مدينة الرياض. يوضح هذا الدليل الكلمات البحثية المعتمدة والأحياء التي نوفر بها خدمات سطحات نقل وسحب مجانية وصيانة متكاملة مع الالتزام بأقصى درجات جودة الوكالة وضمان لغاية 5 سنوات.
          </p>
        </div>

        {/* Categories Highlights Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4">
            <div className="p-3 bg-[#FDD60C]/10 text-slate-800 rounded-xl h-fit">
              <MapPin className="h-6 w-6 stroke-[2]" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">أحياء شمال الرياض المشمولة</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                تغطية فورية مجانية للسطحات في أحياء: الصحافة، الياسمين، الملقا، حطين، النخيل، النرجس، والعروبة.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4">
            <div className="p-3 bg-[#FDD60C]/10 text-slate-800 rounded-xl h-fit">
              <Car className="h-6 w-6 stroke-[2]" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">ماركات نضمن عودتها وكالة</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                فنيون فلبينيون متخصصون في سمكرة ودهان لكزس، مرسيدس، بي ام دبليو، تويوتا، رنج روفر وجيب.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4">
            <div className="p-3 bg-[#FDD60C]/10 text-slate-800 rounded-xl h-fit">
              <ShieldCheck className="h-6 w-6 stroke-[2]" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">ضمان الجودة الألمانية</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                الدهانات والقطع والفرن الحراري المستخدمة تأتي بمطابقة ألوان ليزرية بالكمبيوتر وضمان 5 سنوات.
              </p>
            </div>
          </div>
        </div>

        {/* Search Widget & Complete SEO Index */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6 border-b pb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">البحث في دليل الأحياء ومفردات الخدمات بالرياض</h3>
              <p className="text-xs text-muted-foreground mt-1">
                {searchQuery ? `تم العثور على ${filteredPhrases.length} كلمة بحثية مطابقة` : 'تصفح الكلمات البحثية المقترحة أو ابحث'}
              </p>
            </div>
            
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="ابحث عن حي أو خدمة..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-sm border-2 rounded-xl pr-10 pl-4 py-2 bg-slate-50 outline-none focus:border-[#FDD60C] transition-all"
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          {/* Interactive view with 12 terms by default or expanded */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {filteredPhrases.map((phrase, idx) => (
              <div 
                key={idx} 
                className="text-xs text-slate-600 hover:text-slate-900 py-1.5 px-3 bg-slate-50 border rounded-lg flex items-center gap-2 hover:bg-[#FDD60C]/10 hover:border-[#FDD60C]/40 transition-colors"
                id={`seo-tag-${idx}`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#FDD60C] shrink-0" />
                <span className="truncate">{phrase}</span>
              </div>
            ))}
          </div>

          {/* Collapsible Action Trigger if not searching */}
          {!searchQuery && (
            <div className="mt-8 text-center border-t border-slate-100 pt-6">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="bg-slate-900 text-white font-medium hover:bg-slate-800 text-xs px-6 py-3 rounded-xl inline-flex items-center gap-2 shadow-md transition-all active:scale-95"
                id="btn-toggle-seo-coverage"
              >
                {isOpen ? (
                  <>
                    تقليص قائمة الكلمات البحثية وتغطية الأحياء <ChevronUp className="h-4 w-4 text-[#FDD60C]" />
                  </>
                ) : (
                  <>
                    تصفح كافة الـ 800+ عبارة استهدافية ومناطق الأرشيف للرياض <ChevronDown className="h-4 w-4 text-[#FDD60C]" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
