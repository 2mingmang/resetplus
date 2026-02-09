import React from 'react';
import { landingContent } from '../../content/landing';
import { t } from '../../i18n/translation';
import { Button } from '../ui/Button';
import { Chip } from '../ui/Chip';
import { Container } from '../ui/Container';
import { landingStyles as s } from './landingStyles';

export function Hero() {
  return (
    <div className={s.hero.root}>
      <Container>
        <div className={s.hero.inner}>
          <h1 className={s.hero.title}>
            {t('site.hero.titleTop')}
            <br />
            <span className={s.hero.brand}>{t('site.hero.titleBrand')}</span>
          </h1>

          <p className={s.hero.subtitle}>
            {t('site.hero.subtitle1')}
            <br />
            {t('site.hero.subtitle2')}
          </p>

          <div className={s.hero.chips}>
            {landingContent.hero.chips.map((chip) => (
              <Chip key={chip.labelKey}>{t(chip.labelKey)}</Chip>
            ))}
          </div>

          <div className={s.hero.ctas}>
            <Button as="a" href={landingContent.hero.primaryCtaHref} variant="primary" className={s.hero.ctaButton}>
              {t('site.hero.ctaPrimary')}
            </Button>
            <Button as="a" href={landingContent.hero.secondaryCtaHref} variant="secondary" className={s.hero.ctaButton}>
              <span className={s.hero.ctaInline}>
                <DownloadIcon />
                {t('site.hero.ctaSecondary')}
              </span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3v10m0 0l4-4m-4 4l-4-4M5 17v3h14v-3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

