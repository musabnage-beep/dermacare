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
  'nav.home.aria': {
    ar: 'ديرما كير بيوتي كلينك — الصفحة الرئيسية',
    en: 'Dermacare Beauty Clinic — home',
  },

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
    ar: 'Dermacare Beauty Clinic',
    en: 'ديرما كير بيوتي كلينك',
  },
  'hero.body': {
    ar: 'نجمع بين خبرة عيادة التجميل ومنتجات العناية المختارة بعناية، لنقدّم لك روتيناً واضحاً وبسيطاً تثقين به كل يوم.',
    en: 'We bring the care of a beauty clinic together with a carefully selected range of skincare, so your daily routine stays simple, clear and dependable.',
  },
  'hero.cta.primary': { ar: 'اكتشفي منتجاتنا', en: 'Explore Products' },
  'hero.cta.secondary': { ar: 'تعرفي علينا', en: 'About Us' },
  'hero.image.alt': {
    ar: 'امرأة تضع كريم العناية على بشرتها وقد لفّت شعرها بمنشفة',
    en: 'A woman applying skincare cream to her face, her hair wrapped in a towel',
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
    ar: 'ديرما كير بيوتي كلينك علامة سودانية تجمع بين عيادة التجميل ومنتجات العناية بالبشرة في مكان واحد. نؤمن أن العناية الحقيقية تبدأ بفهم بشرتك، لا بتجربة كل ما هو جديد.',
    en: 'Dermacare Beauty Clinic is a Sudanese brand that brings a beauty clinic and a skincare range together under one name. We believe real care starts with understanding your skin, not with trying everything new.',
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
  'products.title': { ar: 'تحضيرات ديرما كير', en: 'The Dermacare preparations' },
  'products.lead': {
    ar: 'تركيبات نحضّرها في العيادة ونتابع نتيجتها معك. اسألينا عن أي منتج وسنرشدك إلى المناسب لبشرتك.',
    en: 'Preparations we make at the clinic and follow up on with you. Ask us about any of them and we will point you to the one that suits your skin.',
  },
  'products.view': { ar: 'عرض التفاصيل', en: 'View Product' },
  'products.inquire': { ar: 'استفسري عن المنتج', en: 'Ask about this' },
  'products.addToCart': { ar: 'أضيفي إلى السلة', en: 'Add to Cart' },
  'products.priceOnRequest': { ar: 'السعر عند الطلب', en: 'Price on request' },
  'products.note': {
    ar: 'الأسماء والصور مأخوذة من عبوات المنتجات نفسها. تُنشر الأسعار الرسمية هنا عند تأكيدها من العيادة.',
    en: 'Names and photography are taken from the products’ own packaging. Official prices are published here once the clinic confirms them.',
  },
  'products.all': { ar: 'تواصلي لعرض المجموعة كاملة', en: 'Contact us for the full range' },

  /*
    Names are transcribed from the packaging. Bodies only restate what the
    label itself says — no ingredient, dosage or result claim is added.
  */
  'product.vitaminC.name': { ar: 'تفتيح ونضارة — Vit C', en: 'Brightening & Radiance — Vit C' },
  'product.vitaminC.body': {
    ar: 'كريم فيتامين سي. تذكر العبوة أنه يوحّد لون البشرة ويحفّز الكولاجين.',
    en: 'A vitamin C cream. The label states that it evens skin tone and stimulates collagen.',
  },
  'product.vitaminC.alt': {
    ar: 'عبوة كريم «تفتيح ونضارة» من ديرما كير بيوتي كلينك',
    en: 'Dermacare Beauty Clinic “Brightening & Radiance” cream jar',
  },

  'product.pigmentation.name': { ar: 'علاج تصبغات وتفتيح', en: 'Pigmentation & Brightening' },
  'product.pigmentation.body': {
    ar: 'تركيبة للتصبغات. تذكر العبوة تقليل آثار الكلف والنمش وتحفيز تجدّد الخلايا.',
    en: 'A preparation for pigmentation. The label mentions reducing the look of melasma and freckles and supporting cell renewal.',
  },
  'product.pigmentation.alt': {
    ar: 'عبوة «علاج تصبغات وتفتيح» من ديرما كير بيوتي كلينك',
    en: 'Dermacare Beauty Clinic “Pigmentation & Brightening” jar',
  },

  'product.caffeineGel.name': { ar: 'جل الكافيين', en: 'Caffeine Gel' },
  'product.caffeineGel.body': {
    ar: 'جل بمضخّة مخصّص لمنطقة ما حول العين، حسب ما هو مدوّن على العبوة.',
    en: 'A pump gel made for the area around the eyes, as stated on the bottle.',
  },
  'product.caffeineGel.alt': {
    ar: 'عبوة «Caffeine gel» من ديرما كير بيوتي كلينك',
    en: 'Dermacare Beauty Clinic “Caffeine gel” pump bottle',
  },

  'product.mangoExfoliant.name': { ar: 'تقشير وتفتيح — المانجو', en: 'Exfoliate & Brighten — Mango' },
  'product.mangoExfoliant.body': {
    ar: 'مقشّر بخلاصة المانجو من مجموعة «تقشير وتفتيح».',
    en: 'A mango scrub from the “Exfoliate & Brighten” line.',
  },
  'product.mangoExfoliant.alt': {
    ar: 'عبوة مقشّر المانجو من ديرما كير بيوتي كلينك بجانب ثمرة مانجو',
    en: 'Dermacare Beauty Clinic mango scrub jar beside a cut mango',
  },

  'product.bodyExfoliant.name': {
    ar: 'تقشير وتفتيح — المفاصل والركب والأكواع',
    en: 'Exfoliate & Brighten — Joints, Knees & Elbows',
  },
  'product.bodyExfoliant.body': {
    ar: 'تركيبة مخصّصة للمناطق الداكنة في المفاصل والركب والأكواع، كما هو مدوّن على العبوة.',
    en: 'A preparation for the darker areas at the joints, knees and elbows, as stated on the jar.',
  },
  'product.bodyExfoliant.alt': {
    ar: 'عبوة «تقشير وتفتيح» للمفاصل والركب والأكواع على منشفة بيضاء',
    en: 'Dermacare Beauty Clinic joints, knees and elbows jar resting on a white towel',
  },

  // ── Why choose us ─────────────────────────────────────────────────────────
  'why.eyebrow': { ar: 'لماذا ديرما كير', en: 'Why Dermacare' },
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
    ar: 'أنشأنا ديرما كير بيوتي كلينك للإجابة على هذا السؤال عملياً: عيادة تجميل تفهم البشرة، ومجموعة منتجات مختارة تُكمّل ما نقدّمه، وتعامل يحترم وقتك وثقتك.',
    en: 'We built Dermacare Beauty Clinic to answer that in practice: a beauty clinic that understands skin, a selected range that complements the work we do, and a way of working that respects your time and your trust.',
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
    ar: 'مرحباً ديرما كير بيوتي كلينك، لدي سؤال عن العناية بالبشرة.',
    en: 'Hello Dermacare Beauty Clinic, I have a question about skincare.',
  },

  // ── Floating WhatsApp order button ────────────────────────────────────────
  'order.cta': { ar: 'اطلبي عبر واتساب', en: 'Order on WhatsApp' },
  'order.prefill': {
    ar: 'مرحباً ديرما كير بيوتي كلينك، أرغب في الطلب.',
    en: 'Hello Dermacare Beauty Clinic, I would like to place an order.',
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
