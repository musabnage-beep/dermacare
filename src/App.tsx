import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { MobileNav } from './components/layout/MobileNav'
import { WhatsAppOrder } from './components/layout/WhatsAppOrder'
import { SeoHead } from './components/SeoHead'
import { ShopPanel } from './components/shop/ShopPanel'
import { About } from './components/sections/About'
import { BeautyBanner } from './components/sections/BeautyBanner'
import { BrandIntro } from './components/sections/BrandIntro'
import { Contact } from './components/sections/Contact'
import { ContactBand } from './components/sections/ContactBand'
import { Experience } from './components/sections/Experience'
import { Hero } from './components/sections/Hero'
import { Products } from './components/sections/Products'
import { TrustStrip } from './components/sections/TrustStrip'
import { WhyUs } from './components/sections/WhyUs'
import { useLanguage } from './i18n/useLanguage'

export default function App() {
  const { t } = useLanguage()

  return (
    <>
      <SeoHead />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-teal focus:px-6 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        {t('nav.skip')}
      </a>

      <Header />

      <main id="main">
        <Hero />
        <TrustStrip />
        <BrandIntro />
        <Products />
        <BeautyBanner />
        <WhyUs />
        <Experience />
        <About />
        <Contact />
        <ContactBand />
      </main>

      <Footer />
      <WhatsAppOrder />
      <MobileNav />
      <ShopPanel />
    </>
  )
}
