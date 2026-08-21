import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Difference from './components/Difference'
import Features from './components/Features'
import UseCases from './components/UseCases'
import HowItWorks from './components/HowItWorks'
import Results from './components/Results'
import Examples from './components/Examples'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Difference />
        <Features />
        <UseCases />
        <HowItWorks />
        <Results />
        <Examples />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
