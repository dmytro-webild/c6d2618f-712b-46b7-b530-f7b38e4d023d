import React from 'react';
import HeroSection from './HomePage/sections/Hero';
import TestimonialSection from './HomePage/sections/Testimonial';
import FeaturesSection from './HomePage/sections/Features';
import MetricsSection from './HomePage/sections/Metrics';
import TeamSection from './HomePage/sections/Team';
import ContactSection from './HomePage/sections/Contact';

export default function HomePage(): React.JSX.Element {
  return (
    <>
      <HeroSection />

      <TestimonialSection />

      <FeaturesSection />

      <MetricsSection />

      <TeamSection />

      <ContactSection />
    </>
  );
}