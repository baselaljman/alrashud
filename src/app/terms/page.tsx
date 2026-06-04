import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function TermsOfService() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-primary">شروط الخدمة</h1>
        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p>باستخدامكم لموقع <strong>الرشود</strong>، فإنكم توافقون على الالتزام بالشروط التالية:</p>
          
          <h2 className="text-2xl font-bold text-foreground">1. الخدمات المقدمة</h2>
          <p>يقدم مركز الرشود خدمات صيانة السيارات بما في ذلك السمكرة، الدهان، الميكانيكا، والكهرباء وفقاً للمعايير المهنية المعمول بها.</p>

          <h2 className="text-2xl font-bold text-foreground">2. الضمان</h2>
          <p>نقدم ضماناً لمدة 5 سنوات على أعمال السمكرة والدهان، ويشمل هذا الضمان جودة الطلاء وعدم تغير اللون، ولا يشمل الأضرار الناتجة عن سوء الاستخدام أو الحوادث الجديدة.</p>

          <h2 className="text-2xl font-bold text-foreground">3. عروض الأسعار</h2>
          <p>تعتبر عروض الأسعار المقدمة عبر الموقع أو الواتساب تقديرية، ويتم تأكيد السعر النهائي بعد الفحص المباشر للسيارة في المركز.</p>

          <h2 className="text-2xl font-bold text-foreground">4. المسؤولية</h2>
          <p>نحن غير مسؤولين عن أي أغراض شخصية تترك داخل السيارة أثناء فترة الصيانة، لذا نرجو من العملاء إفراغ سياراتهم من المقتنيات الثمينة.</p>

          <h2 className="text-2xl font-bold text-foreground">5. التعديلات</h2>
          <p>نحتفظ بالحق في تعديل هذه الشروط في أي وقت دون إشعار مسبق.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
