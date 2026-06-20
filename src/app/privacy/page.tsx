import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-[#0F172A] border-r-4 border-[#FDD60C] pr-4">سياسة الخصوصية</h1>
        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p>نحن في <strong>الرشود</strong> نقدر خصوصيتكم ونلتزم بحماية بياناتكم الشخصية. توضح هذه السياسة كيفية جمعنا واستخدامنا لمعلوماتكم.</p>
          
          <h2 className="text-2xl font-bold text-foreground">1. المعلومات التي نجمعها</h2>
          <p>نجمع المعلومات التي تزودوننا بها مباشرة عند التواصل معنا عبر الهاتف أو الواتساب، مثل الاسم ورقم الهاتف وتفاصيل السيارة لغرض تقديم الخدمة.</p>

          <h2 className="text-2xl font-bold text-foreground">2. كيف نستخدم معلوماتكم</h2>
          <p>نستخدم المعلومات للتواصل معكم بخصوص مواعيد الصيانة، تقديم عروض الأسعار، وتحسين جودة خدماتنا.</p>

          <h2 className="text-2xl font-bold text-foreground">3. حماية البيانات</h2>
          <p>نتخذ إجراءات أمنية تقنية وإدارية لحماية معلوماتكم من الوصول غير المصرح به.</p>

          <h2 className="text-2xl font-bold text-foreground">4. ملفات تعريف الارتباط</h2>
          <p>قد يستخدم موقعنا ملفات تعريف الارتباط (Cookies) لتحسين تجربة المستخدم وتحليل حركة المرور على الموقع.</p>

          <h2 className="text-2xl font-bold text-foreground">5. حقوقكم</h2>
          <p>يحق لكم التواصل معنا في أي وقت لطلب تحديث بياناتكم أو حذفها من سجلاتنا.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
