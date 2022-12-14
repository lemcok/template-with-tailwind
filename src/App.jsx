import React from 'react'
import { CtaSection } from './components/CtaSection'
import { FeaturesSection } from './components/FeaturesSection'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { NavBar } from './components/NavBar'
import { TestimonialSection } from './components/TestimonialSection'

export const App = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <TestimonialSection />
      <CtaSection />
      <Footer />
    </>
  )
}
