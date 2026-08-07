// Created by add_section_from_catalog (HeroBrand).

import React from 'react';
import HeroBrand from '@/components/sections/hero/HeroBrand';

export default function HeroSection(): React.JSX.Element {
  return (
    <div data-webild-section="hero" data-section="hero" id="hero">
      <HeroBrand
        description="Experience personalized styling and premium treatments in our serene, high-end studio."
        textAnimation="slide-up"
        imageSrc="http://img.b2bpic.net/free-photo/hairdresser-giving-hairstyle-young-woman_23-2147769862.jpg"
        primaryButton={{"href":"#contact","text":"Book Appointment"}}
        brand="Luxe Salon"
        secondaryButton={{"text":"Our Services","href":"#features"}}
      />
    </div>
  );
}
