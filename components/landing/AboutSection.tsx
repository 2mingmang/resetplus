import React from 'react';
import { landingContent } from '../../content/landing';
import { t } from '../../i18n/translation';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { ImageCarousel } from './ImageCarousel';
import { landingStyles as s } from './landingStyles';

import logoVertical from '../../logo/세로.png';

const aboutCarouselSlides = [
  { imageUrl: logoVertical, altKey: 'site.about.carousel.alt' as const },
];

export function AboutSection() {
  return (
    <Section id="about" className={s.about.root}>
      <Container>
        <div className={s.about.grid}>
          <div>
            <h2 className={s.about.title}>
              <span>{t('site.about.headingLine1')}</span>
              <br />
              <span className={s.about.titleAccent}>{t('site.about.headingLine2Em')}</span>
            </h2>
            <p className={`${s.about.p} ${s.about.p1}`}>{t('site.about.p1')}</p>
            <p className={`${s.about.p} ${s.about.p2}`}>{t('site.about.p2')}</p>
          </div>

          <div className={s.about.right}>
            <ImageCarousel slides={aboutCarouselSlides} />
          </div>
        </div>
      </Container>
    </Section>
  );
}

