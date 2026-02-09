import React from 'react';
import { landingContent } from '../../content/landing';
import { t } from '../../i18n/translation';
import { Button } from '../ui/Button';
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
          </p>

          <div className={s.hero.ctas}>
            <Button as="a" href={landingContent.hero.primaryCtaHref} variant="primary" className={s.hero.ctaButton}>
              {t('site.hero.ctaPrimary')}
            </Button>
            <Button as="a" href={landingContent.hero.secondaryCtaHref} variant="secondary" className={s.hero.ctaButton}>
              <span className={s.hero.ctaInline}>
                {t('site.hero.ctaSecondary')}
              </span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
