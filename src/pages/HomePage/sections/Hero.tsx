// Created by add_section_from_catalog (HeroBrand).

import React from 'react';
import HeroBrand from '@/components/sections/hero/HeroBrand';

export default function HeroSection(): React.JSX.Element {
  return (
    <div data-webild-section="hero" data-section="hero" id="hero">
      <HeroBrand
        description="Step into our barbershop and walk out with a personalized look that brings out your best confidence."
        textAnimation="slide-up"
        imageSrc="https://storage.googleapis.com/webild/users/user_3FlzQsxiYdrM4aXHZmSOeQNKP1F/uploaded-1786949826037-78lm7cjf.jpg"
        primaryButton={{"href":"#contact","text":"Book Appointment"}}
        brand="Hair That Turns Heads"
        secondaryButton={{"text":"Our Services","href":"#features"}}
      />
    </div>
  );
}
