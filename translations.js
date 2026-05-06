// ── Language translations ──────────────────────────────────────
const translations = {
  en: {
    // Nav
    'nav-home':       'Home',
    'nav-resume':     'Resume',
    'nav-portfolio':  'Portfolio',
    'nav-hire':       'Hire Me',

    // Hero
    'hero-headline':  'I design products people<br />actually <span class="hero__accent">finish using.</span>',
    'hero-sub':       'Hi! I\'m a Product Designer with 13 years of experience and a thing for fintech. I work across UX, UI and copywriting in Arabic and English, and my favorite part of the job is making something complicated feel like it was never complicated to begin with.',
    'hero-btn':       'View Resume',

    // Work section
    'work-label':     'Selected Work',
    'work-title':     'Projects that move the needle',
    'work-sub':       'Complex flows, measurable outcomes. Every project here drove a real business result — from conversion lifts to retention gains.',

    // Tabs
    'tab-all':        'All',
    'tab-apps':       'Apps',
    'tab-dashboards': 'Dashboards',
    'tab-websites':   'Websites',

    // Cards
    'card-cta':           'View Case Study →',
    'card-locked':        '🔒 Locked',
    'card-kyc-cat':       'Mobile App',
    'card-kyc-title':     'Madfu — Redesigning the KYC & Sign-Up Flow',
    'card-kyc-sub':       'Redesigned KYC onboarding flow — conversion rose from 14.65% to 31.67%',
    'card-merchant-cat':  'Dashboard',
    'card-merchant-title':'Madfu — Redesigning the Merchant Onboarding Flow',
    'card-merchant-sub':  'Replaced days of manual verification with 11 real-time API integrations — self-serve in under 10 minutes',
    'card-business-cat':   'Dashboard',
    'card-business-title': 'Madfu Business — Designing a Compliant Merchant Financing Sign-Up',
    'card-business-sub':   'Compliance-constrained financing flow — 7 required documents, 4 steps, ~12 minutes from start to approval',
    'card-tuwaiq-cat':    'Website',
    'card-tuwaiq-title':  'Tuwaiq Pay — Building a Fintech Website From Scratch',
    'card-tuwaiq-sub':    'Zero-to-one bilingual marketing website for a Saudi payment platform — Arabic & English',

    // Testimonials
    'test-label':   'Kind Words',
    'test-title':   'What people say',
    'test1-quote':  '"I didn\'t ask for animations. I just asked for screens. She came back with motion that made the whole product feel like a different tier. She clearly thinks in experience, not just interface."',
    'test1-role':   'Product Manager, MADFU',
    'test2-quote':  '"Working with Rana on MADFU B2B has been an exceptional experience. She didn\'t just design screens; she shaped the entire B2B experience from the ground up, translating complex business requirements into intuitive, polished flows that our users genuinely love. Her ability to bridge the gap between product thinking and design execution made collaboration seamless and productive."',
    'test2-role':   'Product Manager, MADFU Business',
    'test3-quote':  '"She asked maybe three questions and came back with something that already made sense structurally. No back and forth, no missing states. Just clean work, fast."',
    'test3-role':   'Partner, Tuwaiq',
    'test4-quote':  '"What surprised me was how easily she moved between brand and product. One week she\'s solving a visual identity problem, the next she\'s deep in flows. The output was consistent across both. That\'s not common."',
    'test4-role':   'Head of Product, Orascom',
    'test5-quote':  '"Collaborating with Rana is seamless because her process is clear. She brings structure to ambiguous briefs, articulates her decisions well, and the output is always something the team can build on."',
    'test5-role':   'Senior Product Designer, Orascom',
    'test6-quote':  '"Rana is the most proactive person I\'ve really enjoyed working with. Her positive attitude towards work and the initiatives she takes let the process go smoothly and more efficiently than expected. Her product sense and ability to consistently make correct decisions about a product drive the product to the growth stage."',
    'test6-role':   'Senior Product Designer, Madfu',

    // Tools
    'tools-label': 'Toolkit',
    'tools-title': 'Tools I work with',

    // Footer
    'footer-tagline':   'Designing experiences that convert.',
    'footer-cta-title': 'Let\'s work together',
    'footer-cta-sub':   'Open to full-time roles and freelance projects.',
    'footer-cta-btn':   'Get in Touch',
    'footer-copy':      '© 2025 Rana Allam. All rights reserved.',
  },

  ar: {
    // Nav
    'nav-home':       'الرئيسية',
    'nav-resume':     'السيرة الذاتية',
    'nav-portfolio':  'أعمالي',
    'nav-hire':       'وظّفني',

    // Hero
    'hero-headline':  'شغلي إن المستخدم<br /><span class="hero__accent">ما يوقف في النص.</span>',
    'hero-sub':       'هاي! أنا مصممة بخبرة 13 سنة وعندي شغف خاص بالفينتك. بشتغل على UX وUI والكوبي رايتنج بالعربي والإنجليزي، وأكثر شي بحبه في شغلي إني أخلي الأشياء المعقدة تحس إنها ما كانت معقدة أصلاً.',
    'hero-btn':       'شوف السيرة الذاتية',

    // Work section
    'work-label':     'أعمال مختارة',
    'work-title':     'مشاريع تُحرّك النتائج',
    'work-sub':       'تدفقات معقدة ونتائج قابلة للقياس. كل مشروع هنا أحدث أثراً حقيقياً في الأعمال، من رفع معدلات التحويل إلى تحسين الاحتفاظ بالمستخدمين.',

    // Tabs
    'tab-all':        'الكل',
    'tab-apps':       'التطبيقات',
    'tab-dashboards': 'لوحات التحكم',
    'tab-websites':   'المواقع',

    // Cards
    'card-cta':           'عرض دراسة الحالة ←',
    'card-locked':        '🔒 محمي',
    'card-kyc-cat':       'تطبيق جوّال',
    'card-kyc-title':     'مدفوع — إعادة تصميم تدفق KYC والتسجيل',
    'card-kyc-sub':       'إعادة تصميم تدفق الإعداد — ارتفع معدل التحويل من 14.65% إلى 31.67%',
    'card-merchant-cat':  'لوحة تحكم',
    'card-merchant-title':'مدفوع — إعادة تصميم تدفق إعداد التجار',
    'card-merchant-sub':  'استبدال أيام التحقق اليدوي بـ 11 تكاملاً برمجياً فورياً — إعداد ذاتي في أقل من 10 دقائق',
    'card-business-cat':   'لوحة تحكم',
    'card-business-title': 'مدفوع بيزنس — تصميم تدفق تسجيل تمويل تجاري متوافق مع الامتثال',
    'card-business-sub':   'تدفق تمويل مقيّد بمتطلبات الامتثال — 7 وثائق مطلوبة، 4 خطوات، ~12 دقيقة من البداية إلى الموافقة',
    'card-tuwaiq-cat':    'موقع إلكتروني',
    'card-tuwaiq-title':  'طويق باي — بناء موقع تقنية مالية من الصفر',
    'card-tuwaiq-sub':    'موقع تسويقي ثنائي اللغة من الصفر لمنصة دفع سعودية — عربي وإنجليزي',

    // Testimonials
    'test-label':   'كلمات طيبة',
    'test-title':   'ماذا يقول الناس',
    'test1-quote':  '"ما طلبت منها حركات. طلبت شاشات فقط. رجعت بحركة خلّت المنتج كله يحس إنه من فئة ثانية. واضح إنها تفكر بالتجربة، مش بس الواجهة."',
    'test1-role':   'مدير منتج، مدفوع',
    'test2-quote':  '"العمل مع رنا على مدفوع بيزنس كان تجربة استثنائية. ما اكتفت بتصميم الشاشات، بل شكّلت تجربة B2B بالكامل من الصفر، وترجمت متطلبات الأعمال المعقدة إلى تدفقات بديهية ومصقولة يحبها مستخدمونا فعلاً. قدرتها على ربط التفكير المنتجي بالتنفيذ التصميمي جعلت التعاون سلساً ومثمراً."',
    'test2-role':   'مدير منتج، مدفوع بيزنس',
    'test3-quote':  '"سألت ثلاثة أسئلة تقريباً ورجعت بشيء منطقي هيكلياً من البداية. ما في ذهاب وإياب، ما في حالات ناقصة. شغل نظيف وسريع."',
    'test3-role':   'شريك، طويق',
    'test4-quote':  '"اللي فاجأني هو سهولة تنقّلها بين البراند والمنتج. أسبوع تحل مشكلة هوية بصرية، والأسبوع الثاني غارقة في التدفقات. والناتج كان متسقاً في الحالتين. هذا مش شائع."',
    'test4-role':   'رئيس المنتج، أوراسكوم',
    'test5-quote':  '"التعاون مع رنا سلس لأن أسلوبها واضح. تُدخل منهجية على المهام الغامضة، وتوضح قراراتها بشكل جيد، والناتج دائماً شيء يستطيع الفريق البناء عليه."',
    'test5-role':   'مصممة منتج أولى، أوراسكوم',
    'test6-quote':  '"رنا من أكثر الأشخاص الذين استمتعت بالعمل معهم. موقفها الإيجابي تجاه العمل والمبادرات التي تأخذها تجعل العملية تسير بسلاسة وكفاءة أكثر مما هو متوقع. حسها المنتجي وقدرتها على اتخاذ قرارات صحيحة باستمرار يدفعان المنتج نحو مرحلة النمو."',
    'test6-role':   'مصممة منتج أولى، مدفوع',

    // Tools
    'tools-label': 'أدواتي',
    'tools-title': 'الأدوات التي أستخدمها',

    // Footer
    'footer-tagline':   'أصمّم تجارب تُحوّل.',
    'footer-cta-title': 'لنعمل معاً',
    'footer-cta-sub':   'متاحة للتوظيف الكامل والمشاريع المستقلة.',
    'footer-cta-btn':   'تواصل معي',
    'footer-copy':      '© 2025 رنا عالم. جميع الحقوق محفوظة.',
  }
};

// ── Apply a language ───────────────────────────────────────────
function setLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  // Update html attributes
  document.documentElement.lang = lang;
  document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';

  // Swap plain text
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Swap HTML content (for elements with inner tags like <br>, <span>)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Update toggle button label
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = lang === 'ar' ? 'EN' : 'عربي';

  // Persist choice
  localStorage.setItem('portfolio-lang', lang);
}

// ── Boot ───────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('portfolio-lang') || 'en';
  setLanguage(saved);

  document.getElementById('lang-toggle').addEventListener('click', () => {
    const current = document.documentElement.lang;
    setLanguage(current === 'ar' ? 'en' : 'ar');
  });
});
