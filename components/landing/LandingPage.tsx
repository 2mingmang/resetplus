import React from 'react';
import { Header } from './Header';
import { Hero } from './Hero';
import { StatsStrip } from './StatsStrip';
import { AboutSection } from './AboutSection';
import { ServicesSection } from './ServicesSection';
import { InquirySection } from './InquirySection';
import { FloatingActions } from './FloatingActions';
import { landingStyles as s } from './landingStyles';

export function LandingPage() {
  return (
    <div id="top" className={s.page.root}>
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <AboutSection />
        <ServicesSection />
        <InquirySection />
      </main>
      <FloatingActions />
    </div>
  );
}

