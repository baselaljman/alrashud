import { Wrench, Paintbrush, RefreshCcw, ShieldAlert, Settings, Zap, Thermometer, ShieldCheck } from 'lucide-react';
import { PlaceHolderImages } from './placeholder-images';

export const services = [
  {
    id: 'bodywork',
    title: 'سمكرة سيارات احترافية',
    description: 'إصلاح جميع صدمات الهيكل بأحدث التقنيات والمعدات الاحترافية. نعد من أفضل مراكز السمكرة في الرياض لإصلاح الصدمات القوية والبسيطة لضمان عودة السيارة لحالتها الأصلية بدقة متناهية. تخصصنا في سمكرة مرسيدس، بي ام دبليو، لكزس، وتويوتا بجودة الوكالة.',
    icon: Wrench,
    image: PlaceHolderImages.find(img => img.id === 'service-bodywork')?.imageUrl,
  },
  {
    id: 'pdr',
    title: 'تعديل بارد بدون رش (PDR)',
    description: 'تقنية التعديل البارد (PDR) لإصلاح الصدمات والبرَد بدون الحاجة لرش البوية. نحافظ على صبغة الوكالة الأصلية باستخدام أحدث أدوات شفط الصدمات وتعديل الهيكل بدقة ليزرية. مثالي لإصلاح الانبعاجات البسيطة في صناعية العروبة بالرياض.',
    icon: ShieldCheck,
    image: PlaceHolderImages.find(img => img.id === 'service-renewal')?.imageUrl,
  },
  {
    id: 'painting',
    title: 'رش بوية فرن حراري',
    description: 'دهان حراري (فرن) بأعلى معايير الجودة العالمية مع مطابقة الألوان بالكمبيوتر 100%. نستخدم أفضل أنواع الأصباغ الألمانية لضمان لمسة نهائية مثالية ومقاومة للعوامل الجوية مع ضمان 5 سنوات. رش جنوط، رش مطفي، ورش لمعة وكالة لجميع السيارات الفارهة.',
    icon: Paintbrush,
    image: PlaceHolderImages.find(img => img.id === 'service-painting')?.imageUrl,
  },
  {
    id: 'renewal',
    title: 'تجديد سيارات كامل',
    description: 'إعادة إحياء وتجديد السيارات القديمة والمتضررة كلياً داخلياً وخارجياً. خدمات تجديد الصبغة، تلميع المقاصير، وإعادة السيارة وكالة بمواد عالية الجودة وإشراف فنيين مختصين في تجديد لاند كروزر ونيسان باترول وجيب لكزس.',
    icon: RefreshCcw,
    image: PlaceHolderImages.find(img => img.id === 'service-renewal')?.imageUrl,
  },
  {
    id: 'airbag',
    title: 'إصلاح الأيرباق والبرمجة',
    description: 'فحص وإصلاح وبرمجة أنظمة الأكياس الهوائية (Airbags) بعد الحوادث. إعادة ضبط حساسات الأمان وتغيير الأغطية المتضررة لضمان سلامة الركاب القصوى وفق معايير المصنع. برمجة كنترول ايرباق لسيارات مرسيدس وبي ام دبليو وبورش.',
    icon: ShieldAlert,
    image: PlaceHolderImages.find(img => img.id === 'service-airbag')?.imageUrl,
  },
  {
    id: 'mechanic',
    title: 'ميكانيكا سيارات عامة',
    description: 'صيانة المحركات، ناقل الحركة (الجيربوكس)، وجميع الأجزاء الميكانيكية. توضيب مكائن وجيربوكس بأيدي فنيين متخصصين في السيارات الألماني، الياباني، والكوري في الرياض. إصلاح المساعدات والهيدروليك ونظام الفرامل والخرط.',
    icon: Settings,
    image: PlaceHolderImages.find(img => img.id === 'service-mechanic')?.imageUrl,
  },
  {
    id: 'electricity',
    title: 'كهرباء وفحص كمبيوتر',
    description: 'فحص وتشخيص وإصلاح جميع الأعطال الكهربائية المعقدة وبرمجة الحساسات والكنترولات بأحدث أجهزة الفحص المتطورة لضمان دقة التشخيص وسرعة الإصلاح. فحص كمبيوتر شامل قبل الشراء مع تقرير دقيق للحالة.',
    icon: Zap,
    image: PlaceHolderImages.find(img => img.id === 'service-electricity')?.imageUrl,
  },
  {
    id: 'ac',
    title: 'صيانة تكييف السيارات',
    description: 'فحص تسريب الفريون بأحدث الأجهزة، شحن فريون أصلي، وإصلاح الكومبريسور والرديتر لضمان أفضل برودة لمكيف السيارة في أجواء الرياض الحارة. تغيير فلاتر المكيف وتنظيف ثلاجة المكيف بدون فك الطبلون.',
    icon: Thermometer,
    image: PlaceHolderImages.find(img => img.id === 'service-ac')?.imageUrl,
  },
];

export const beforeAfterCases = [
  {
    id: 1,
    title: 'إصلاح صدمة مرسيدس جانبية',
    before: PlaceHolderImages.find(img => img.id === 'ba-1-before')?.imageUrl,
    after: PlaceHolderImages.find(img => img.id === 'ba-1-after')?.imageUrl,
  },
  {
    id: 2,
    title: 'رش صدام لكزس مطابقة 100%',
    before: PlaceHolderImages.find(img => img.id === 'ba-2-before')?.imageUrl,
    after: PlaceHolderImages.find(img => img.id === 'ba-2-after')?.imageUrl,
  },
  {
    id: 3,
    title: 'تجديد خلفية بي ام دبليو (BMW)',
    before: PlaceHolderImages.find(img => img.id === 'ba-3-before')?.imageUrl,
    after: PlaceHolderImages.find(img => img.id === 'ba-3-after')?.imageUrl,
  },
];

export const carBrands = [
  { name: 'Lamborghini', logo: 'https://1000logos.net/wp-content/uploads/2022/12/Logo-Lamborghini.png' },
  { name: 'Mercedes', logo: 'https://1000logos.net/wp-content/uploads/2018/04/Mercedes-Benz-Logo.png' },
  { name: 'BMW', logo: 'https://1000logos.net/wp-content/uploads/2018/02/BMW-Logo.png' },
  { name: 'Bentley', logo: 'https://1000logos.net/wp-content/uploads/2018/03/Bentley-Logo-1.png' },
  { name: 'Porsche', logo: 'https://1000logos.net/wp-content/uploads/2018/02/Porsche-Logo.png' },
  { name: 'Ferrari', logo: 'https://1000logos.net/wp-content/uploads/2021/04/Ferrari-logo.png' },
  { name: 'Toyota', logo: 'https://1000logos.net/wp-content/uploads/2021/04/Toyota-logo.png' },
  { name: 'Hyundai', logo: 'https://1000logos.net/wp-content/uploads/2018/04/Hyundai-Logo.png' },
  { name: 'Genesis', logo: 'https://1000logos.net/wp-content/uploads/2021/03/Genesis-logo.png' },
  { name: 'Nissan', logo: 'https://1000logos.net/wp-content/uploads/2020/03/nissan-logo.png' },
  { name: 'Audi', logo: 'https://1000logos.net/wp-content/uploads/2018/05/Audi-Logo-2009.jpg' },
  { name: 'Changan', logo: 'https://1000logos.net/wp-content/uploads/2021/03/changan-logo.png' },
  { name: 'Land Rover', logo: 'https://1000logos.net/wp-content/uploads/2020/02/Land-Rover-Logo-1986.jpg' },
  { name: 'Honda', logo: 'https://1000logos.net/wp-content/uploads/2018/03/Honda-Logo-1981.png' },
  { name: 'Lexus', logo: 'https://1000logos.net/wp-content/uploads/2020/02/Lexus-emblem.jpg' },
  { name: 'GMC', logo: 'https://1000logos.net/wp-content/uploads/2023/03/GMC-Logo-768x432.png' }
];

export const features = [
  {
    title: 'ضمان 5 سنوات معتمد',
    description: 'نقدم ضماناً حقيقياً لمدة 5 سنوات على جودة الصبغة والسمكرة وعدم تغير اللون، لثقتنا في جودة المواد المستخدمة والدهان الألماني الأصلي.',
    icon: '🛡️'
  },
  {
    title: 'مطابقة ألوان احترافية',
    description: 'نستخدم أحدث أجهزة خلط الألوان بالكمبيوتر لضمان مطابقة لون وكالة سيارتك بنسبة 100% دون أي فروقات واضحة في أشعة الشمس.',
    icon: '🎨'
  },
  {
    title: 'خدمة سحب مجانية',
    description: 'نوفر خدمة سطحة مجانية لسحب السيارة المتعطلة أو المصدومة إلى مركزنا لعملائنا داخل مدينة الرياض لتسهيل خدمتكم وتوفير الجهد.',
    icon: '🚚'
  }
];
