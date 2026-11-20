import type { L10n } from '../config/business'

/*
  All visible UI copy. Arabic is the source language; English is the
  secondary locale. Keep both values in sync when editing.
*/
export const dictionary = {
  // ── Navigation ────────────────────────────────────────────────────────────
  'nav.home': { ar: 'الرئيسية', en: 'Home' },
  'nav.products': { ar: 'المنتجات', en: 'Shop' },
  'nav.experience': { ar: 'التجربة', en: 'Experience' },
  'nav.about': { ar: 'من نحن', en: 'About' },
  'nav.contact': { ar: 'تواصل معنا', en: 'Contact' },
  'nav.shopNow': { ar: 'تسوّقي الآن', en: 'Shop Now' },
  'nav.menu': { ar: 'القائمة', en: 'Menu' },
  'nav.primary': { ar: 'التنقل الرئيسي', en: 'Primary navigation' },
  'nav.mobile': { ar: 'تنقل سريع', en: 'Quick navigation' },
  'nav.skip': { ar: 'تخطي إلى المحتوى', en: 'Skip to content' },
  'nav.home.aria': { ar: 'ديرما كير بيوتي — الصفحة الرئيسية', en: 'Derma Care Beauty — home' },

  // ── Language switcher ─────────────────────────────────────────────────────
  'lang.label': { ar: 'اللغة', en: 'Language' },
  'lang.ar': { ar: 'العربية', en: 'العربية' },
  'lang.en': { ar: 'English', en: 'English' },
  'lang.switchTo': { ar: 'التبديل إلى الإنجليزية', en: 'Switch to Arabic' },

  // ── Hero ──────────────────────────────────────────────────────────────────
  'hero.eyebrow': {
    ar: 'عيادة تجميل ومنتجات عناية بالبشرة',
    en: 'Beauty clinic & skincare products',
  },
  'hero.title.line1': { ar: 'عناية بالبشرة', en: 'Skincare with' },
  'hero.title.line2': { ar: 'بخبرة', en: 'clinical' },
  'hero.title.accent': { ar: 'متخصصة', en: 'expertise' },
  'hero.subtitle': {
    ar: 'Derma Care Beauty',
    en: 'ديرما كير بيوتي',
  },
  'hero.body': {
    ar: 'نجمع بين خبرة عيادة التجميل ومنتجات العناية المختارة بعناية، لنقدّم لك روتيناً واضحاً وبسيطاً تثقين به كل يوم.',
    en: 'We bring the care of a beauty clinic together with a carefully selected range of skincare, so your daily routine stays simple, clear and dependable.',
  },
  'hero.cta.primary': { ar: 'اكتشفي منتجاتنا', en: 'Explore Products' },
  'hero.cta.secondary': { ar: 'تعرفي علينا', en: 'About Us' },
  'hero.image.alt': {
    ar: 'زجاجات عناية بالبشرة على سطح فاتح بإضاءة طبيعية',
    en: 'Skincare bottles arranged on a light surface in natural daylight',
  },
  'hero.badge.title': { ar: 'عناية موثوقة', en: 'Care you can trust' },
  'hero.badge.body': {
    ar: 'اختيار دقيق للمنتجات ومتابعة شخصية لكل عميلة.',
    en: 'Carefully chosen products and personal attention for every client.',
  },
  'hero.scroll': { ar: 'تابعي للأسفل', en: 'Scroll' },

  // ── Brand introduction ────────────────────────────────────────────────────
  'intro.eyebrow': { ar: 'من نحن', en: 'Our brand' },
  'intro.title': {
    ar: 'علامة سودانية للجمال والعناية بالبشرة',
    en: 'A Sudanese beauty & skincare brand',
  },
  'intro.body1': {
    ar: 'ديرما كير بيوتي علامة سودانية تجمع بين عيادة التجميل ومنتجات العناية بالبشرة في مكان واحد. نؤمن أن العناية الحقيقية تبدأ بفهم بشرتك، لا بتجربة كل ما هو جديد.',
    en: 'Derma Care Beauty is a Sudanese brand that brings a beauty clinic and a skincare range together under one name. We believe real care starts with understanding your skin, not with trying everything new.',
  },
  'intro.body2': {
    ar: 'نختار ما نقدّمه بعناية، ونشرح لك كيف تستخدمينه، ونبقى معك بعد الشراء. هدفنا تجربة واضحة ومريحة تمنحك الثقة في كل خطوة من روتينك.',
    en: 'We select what we offer with care, explain how to use it, and stay with you after the purchase. The goal is a calm, clear experience that leaves you confident at every step of your routine.',
  },
  'intro.pillar1.title': { ar: 'خبرة في الجمال والبشرة', en: 'Beauty & skin expertise' },
  'intro.pillar1.body': {
    ar: 'فريق متخصص في العناية بالبشرة يرشدك إلى ما يناسبك فعلاً.',
    en: 'A team focused on skincare, guiding you to what genuinely suits you.',
  },
  'intro.pillar2.title': { ar: 'التزام بالجودة', en: 'Commitment to quality' },
  'intro.pillar2.body': {
    ar: 'نختار منتجاتنا بمعايير واضحة ولا نقدّم ما لا نثق به.',
    en: 'We choose our products against clear standards and offer nothing we do not trust.',
  },
  'intro.pillar3.title': { ar: 'ثقة العميلة أولاً', en: 'Client confidence first' },
  'intro.pillar3.body': {
    ar: 'إجابات صادقة، نصائح مباشرة، ومتابعة بعد كل تجربة.',
    en: 'Honest answers, direct advice and follow-up after every visit.',
  },
  'intro.image.alt': {
    ar: 'تفاصيل زجاجة عناية بالبشرة بإضاءة ناعمة',
    en: 'Close detail of a skincare bottle in soft light',
  },

  // ── Products ──────────────────────────────────────────────────────────────
  'products.eyebrow': { ar: 'المنتجات', en: 'The range' },
  'products.title': { ar: 'فئات العناية التي نقدّمها', en: 'The categories we offer' },
  'products.lead': {
    ar: 'مجموعة مرتّبة حسب خطوات الروتين اليومي. اسألينا عن أي فئة وسنرشدك إلى المنتج المناسب لبشرتك.',
    en: 'A range organised around the steps of a daily routine. Ask us about any category and we will guide you to the right product for your skin.',
  },
  'products.view': { ar: 'عرض التفاصيل', en: 'View Product' },
  'products.inquire': { ar: 'استفسري عن الفئة', en: 'Ask about this' },
  'products.addToCart': { ar: 'أضيفي إلى السلة', en: 'Add to Cart' },
  'products.priceOnRequest': { ar: 'السعر عند الطلب', en: 'Price on request' },
  'products.note': {
    ar: 'الفئات أعلاه تمثّل خطوات العناية التي نوفّرها. يتم تحديث الأسماء والأسعار الرسمية عند توفّرها من المتجر.',
    en: 'The categories above describe the care steps we stock. Official product names and prices are published here once the shop provides them.',
  },
  'products.all': { ar: 'تواصلي لعرض المجموعة كاملة', en: 'Contact us for the full range' },

  'product.cleanser.name': { ar: 'غسول الوجه', en: 'Facial cleanser' },
  'product.cleanser.body': {
    ar: 'الخطوة الأولى في الروتين: تنظيف لطيف يهيّئ البشرة لما بعده.',
    en: 'The first step of the routine: a gentle cleanse that prepares the skin for everything after it.',
  },
  'product.toner.name': { ar: 'التونر', en: 'Toner' },
  'product.toner.body': {
    ar: 'يوازن البشرة بعد التنظيف ويساعد على امتصاص المنتجات التالية.',
    en: 'Balances the skin after cleansing and helps the next products absorb.',
  },
  'product.serum.name': { ar: 'السيروم', en: 'Serum' },
  'product.serum.body': {
    ar: 'تركيز مخصّص يُختار حسب حالة بشرتك وهدف روتينك.',
    en: 'A targeted concentrate chosen to match your skin and the goal of your routine.',
  },
  'product.moisturizer.name': { ar: 'المرطّب', en: 'Moisturiser' },
  'product.moisturizer.body': {
    ar: 'يحفظ ترطيب البشرة ويُغلق خطوات الروتين اليومي.',
    en: 'Holds moisture in the skin and closes the daily routine.',
  },
  'product.sunscreen.name': { ar: 'واقي الشمس', en: 'Sunscreen' },
  'product.sunscreen.body': {
    ar: 'الخطوة الأهم في المناخ السوداني، وتُستخدم كل صباح.',
    en: 'The most important step in the Sudanese climate, used every morning.',
  },
  'product.bodycare.name': { ar: 'عناية الجسم', en: 'Body care' },
  'product.bodycare.body': {
    ar: 'تنظيف وترطيب للجسم بنفس معايير العناية بالوجه.',
    en: 'Cleansing and moisturising for the body, held to the same standard as facial care.',
  },

  // ── Why choose us ─────────────────────────────────────────────────────────
  'why.eyebrow': { ar: 'لماذا ديرما كير', en: 'Why Derma Care' },
  'why.title': { ar: 'عناية مبنية على الوضوح', en: 'Care built on clarity' },
  'why.lead': {
    ar: 'لا نَعِدُ بالمعجزات. نَعِدُ بالصدق في النصيحة، والجودة في الاختيار، والاحترام في التعامل.',
    en: 'We do not promise miracles. We promise honesty in our advice, care in what we select, and respect in how we treat you.',
  },
  'why.item1.title': { ar: 'نصيحة قبل البيع', en: 'Advice before a sale' },
  'why.item1.body': {
    ar: 'نسألك عن بشرتك وروتينك الحالي قبل أن نقترح أي منتج، وقد ننصحك بعدم الشراء.',
    en: 'We ask about your skin and your current routine before suggesting anything — and we will tell you when not to buy.',
  },
  'why.item2.title': { ar: 'مجموعة مختارة لا مكرّرة', en: 'A curated, not crowded, range' },
  'why.item2.body': {
    ar: 'نُبقي عدد المنتجات محدوداً حتى نعرف كل منتج نقدّمه معرفة حقيقية.',
    en: 'We keep the range deliberately small so we know every product we offer properly.',
  },
  'why.item3.title': { ar: 'روتين واضح وقابل للتطبيق', en: 'A routine you can actually follow' },
  'why.item3.body': {
    ar: 'نشرح الترتيب والكمية والتوقيت بلغة بسيطة، لا بمصطلحات غامضة.',
    en: 'We explain order, amount and timing in plain language, not in jargon.',
  },
  'why.item4.title': { ar: 'عيادة ومنتجات معاً', en: 'Clinic and products together' },
  'why.item4.body': {
    ar: 'ما تستخدمينه في المنزل مكمّل لما نقدّمه في العيادة، لا منفصلاً عنه.',
    en: 'What you use at home complements what we do in the clinic instead of working against it.',
  },
  'why.item5.title': { ar: 'متابعة بعد الشراء', en: 'Follow-up after purchase' },
  'why.item5.body': {
    ar: 'نبقى متاحين للأسئلة بعد البيع، لأن النتيجة تحتاج وقتاً ومتابعة.',
    en: 'We stay available for questions afterwards, because results take time and attention.',
  },
  'why.item6.title': { ar: 'لغةٌ تفهمينها', en: 'In your language' },
  'why.item6.body': {
    ar: 'نتحدث بالعربية والإنجليزية ونشرح كل تفصيلة بالطريقة التي تريحك.',
    en: 'We work in Arabic and English and explain every detail in the way that suits you.',
  },

  // ── Experience ────────────────────────────────────────────────────────────
  'exp.eyebrow': { ar: 'التجربة', en: 'The experience' },
  'exp.title': { ar: 'بين العيادة والروتين اليومي', en: 'Between the clinic and your daily routine' },
  'exp.body': {
    ar: 'تبدأ التجربة بجلسة فهم لبشرتك في العيادة، وتستمر في منزلك مع منتجات مختارة لك تحديداً. الاثنان يعملان معاً — وهذا ما يصنع الفرق.',
    en: 'It starts with understanding your skin in the clinic and continues at home with products chosen specifically for you. The two work together — and that is what makes the difference.',
  },
  'exp.step1.title': { ar: 'فهم البشرة', en: 'Understanding your skin' },
  'exp.step1.body': {
    ar: 'حديث هادئ عن بشرتك وما جرّبتِه سابقاً وما تريدين الوصول إليه.',
    en: 'A calm conversation about your skin, what you have tried, and where you want to get to.',
  },
  'exp.step2.title': { ar: 'اختيار الروتين', en: 'Choosing the routine' },
  'exp.step2.body': {
    ar: 'نبني روتيناً من خطوات قليلة واضحة يمكنك الالتزام بها فعلاً.',
    en: 'We build a short, clear routine of a few steps you can realistically keep to.',
  },
  'exp.step3.title': { ar: 'الاستمرار والمتابعة', en: 'Staying with it' },
  'exp.step3.body': {
    ar: 'نتابع معك النتائج ونعدّل الروتين عند الحاجة، بلا استعجال.',
    en: 'We follow the results with you and adjust the routine when needed, without rushing.',
  },
  'exp.image1.alt': {
    ar: 'مستحضرات عناية بالبشرة مرتّبة بأناقة على رخام فاتح',
    en: 'Skincare products arranged on pale marble',
  },
  'exp.image2.alt': {
    ar: 'قطّارة سيروم زجاجية بإضاءة ناعمة',
    en: 'A glass serum dropper in soft light',
  },
  'exp.image3.alt': {
    ar: 'منشفة بيضاء وأدوات عناية في مساحة هادئة',
    en: 'White towel and care essentials in a calm space',
  },

  // ── About ─────────────────────────────────────────────────────────────────
  'about.eyebrow': { ar: 'قصة العلامة', en: 'Brand story' },
  'about.title': { ar: 'بدأنا بسؤال بسيط', en: 'It started with a simple question' },
  'about.body1': {
    ar: 'لماذا يصعب على الكثيرات في السودان العثور على عناية موثوقة ببشرتهن؟ منتجات كثيرة، نصائح متضاربة، ووعود كبيرة بلا متابعة.',
    en: 'Why is it still so hard for many women in Sudan to find skincare they can trust? Too many products, conflicting advice, and big promises with no follow-up.',
  },
  'about.body2': {
    ar: 'أنشأنا ديرما كير بيوتي للإجابة على هذا السؤال عملياً: عيادة تجميل تفهم البشرة، ومجموعة منتجات مختارة تُكمّل ما نقدّمه، وتعامل يحترم وقتك وثقتك.',
    en: 'We built Derma Care Beauty to answer that in practice: a beauty clinic that understands skin, a selected range that complements the work we do, and a way of working that respects your time and your trust.',
  },
  'about.body3': {
    ar: 'نكتب هذه القصة ونحن في بدايتها، وسنوسّعها كلما كبرت تجربتنا معك.',
    en: 'We are writing this story at its beginning, and we will keep expanding it as our experience with you grows.',
  },
  'about.quote': {
    ar: 'العناية الجيدة ليست أكثر منتجات — بل المنتج الصحيح والخطوات الصحيحة.',
    en: 'Good care is not more products — it is the right product and the right steps.',
  },
  'about.image.alt': {
    ar: 'مساحة عناية هادئة بألوان فاتحة ومستحضرات بشرة',
    en: 'A calm, light-toned care space with skincare products',
  },
  'about.cta': { ar: 'تواصلي معنا', en: 'Get in touch' },

  // ── Contact ───────────────────────────────────────────────────────────────
  'contact.eyebrow': { ar: 'تواصل معنا', en: 'Contact' },
  'contact.title': { ar: 'نسعد بالإجابة على سؤالك', en: 'We would be glad to help' },
  'contact.lead': {
    ar: 'اسألينا عن بشرتك أو عن أي منتج، وسنرد عليك بوضوح ومن دون مبالغة.',
    en: 'Ask us about your skin or about any product, and we will answer clearly and without exaggeration.',
  },
  'contact.whatsapp': { ar: 'واتساب', en: 'WhatsApp' },
  'contact.whatsapp.action': { ar: 'ابدئي محادثة', en: 'Start a chat' },
  'contact.phone': { ar: 'الهاتف', en: 'Phone' },
  'contact.email': { ar: 'البريد الإلكتروني', en: 'Email' },
  'contact.address': { ar: 'الموقع', en: 'Location' },
  'contact.hours': { ar: 'ساعات العمل', en: 'Opening hours' },
  'contact.social': { ar: 'تابعينا', en: 'Follow us' },
  'contact.pending.title': { ar: 'بيانات التواصل قيد التحديث', en: 'Contact details coming soon' },
  'contact.pending.body': {
    ar: 'سيتم نشر أرقام التواصل وحسابات التواصل الاجتماعي الرسمية هنا بعد تأكيدها من إدارة العلامة.',
    en: 'Official phone numbers and social accounts will be published here once confirmed by the brand.',
  },
  'contact.whatsapp.prefill': {
    ar: 'مرحباً ديرما كير بيوتي، لدي سؤال عن العناية بالبشرة.',
    en: 'Hello Derma Care Beauty, I have a question about skincare.',
  },

  // ── Footer ────────────────────────────────────────────────────────────────
  'footer.tagline': {
    ar: 'عيادة تجميل ومنتجات عناية بالبشرة في السودان.',
    en: 'A beauty clinic and skincare range in Sudan.',
  },
  'footer.explore': { ar: 'تنقّل', en: 'Explore' },
  'footer.reach': { ar: 'للتواصل', en: 'Reach us' },
  'footer.language': { ar: 'اللغة', en: 'Language' },
  'footer.rights': { ar: 'جميع الحقوق محفوظة.', en: 'All rights reserved.' },
  'footer.backToTop': { ar: 'إلى الأعلى', en: 'Back to top' },

  // ── Shared ────────────────────────────────────────────────────────────────
  'common.imageUnavailable': { ar: 'الصورة غير متوفرة', en: 'Image unavailable' },
} satisfies Record<string, L10n>

export type TranslationKey = keyof typeof dictionary
