import React from 'react';
import { landingContent } from '../../content/landing';
import { t } from '../../i18n/translation';
import { Container } from '../ui/Container';
import { landingStyles as s } from './landingStyles';

export function StatsStrip() {
  return (
    <div className={s.stats.root}>
      <Container className={s.stats.container}>
        <div className={s.stats.grid}>
          {landingContent.stats.map((item) => (
            <div key={item.labelKey} className={s.stats.item}>
              <div className={s.stats.label}>{t(item.labelKey)}</div>
              <div className={s.stats.value}>{t(item.valueKey)}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

