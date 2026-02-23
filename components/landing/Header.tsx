import React from 'react';
import { landingContent } from '../../content/landing';
import { t } from '../../i18n/translation';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { landingStyles as s } from './landingStyles';

import logoHorizontal from '../../logo/가로.png';

export function Header() {
  return (
    <header className={s.header.root}>
      <Container className={s.header.container}>
        <a href={landingContent.anchors.top} className={s.header.brand}>
          <img src={logoHorizontal} alt={t('site.name')} className="h-9 object-contain" />
        </a>

        <nav className={s.header.nav}>
          {landingContent.nav.map((item) => (
            <a key={item.href} href={item.href} className={s.header.navLink}>
              {t(item.labelKey)}
            </a>
          ))}
          <Button as="a" href={landingContent.anchors.inquiry} variant="primary" className={s.header.ctaDesktop}>
            {t('site.nav.inquiry')}
          </Button>
        </nav>

        <div className={s.header.ctaMobileWrap}>
          <Button as="a" href={landingContent.anchors.inquiry} variant="primary" className={s.header.ctaMobile}>
            {t('site.nav.inquiry')}
          </Button>
        </div>
      </Container>
    </header>
  );
}

