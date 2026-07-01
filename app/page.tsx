import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import HowItWorks from '@/components/HowItWorks'
import MobilePreview from '@/components/MobilePreview'
import Testimonials from '@/components/Testimonials'
import ServiceAreas from '@/components/ServiceAreas'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <HowItWorks />
      <MobilePreview />
      <Testimonials />
      <ServiceAreas />
      <Contact />
      <Footer />
    </main>
  )
}
