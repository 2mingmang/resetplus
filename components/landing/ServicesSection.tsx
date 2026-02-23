import React from 'react';
import { landingContent } from '../../content/landing';
import { t } from '../../i18n/translation';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { landingStyles as s } from './landingStyles';

export function ServicesSection() {
  const cards = landingContent.services.cards;
  return (
    <Section id="services" className={s.services.root}>
      <Container>
        <div className={s.services.headingWrap}>
          <h2 className={s.services.title}>{t('site.services.title')}</h2>
          <p className={s.services.subtitle}>{t('site.services.subtitle')}</p>
        </div>

        <div className={s.services.cardsGrid}>
          {cards.slice(0, 3).map((card) => (
            <ServiceCard key={card.key} card={card} />
          ))}
          {cards.slice(3).map((card) => (
            <ServiceCard key={card.key} card={card} />
          ))}
        </div>

        <div className={s.services.disclaimerWrap}>
          <div className={s.services.disclaimer}>
            {t('site.services.disclaimer')}
          </div>
        </div>
      </Container>
    </Section>
  );
}

const ServiceCard: React.FC<{
  card: (typeof landingContent.services.cards)[number];
}> = ({ card }) => {
  return (
    <div className={s.services.card.root}>
      <div className={s.services.card.top}>
        {card.isFeatured && (
          <div className={s.services.card.featured}>
            <svg className={s.services.card.featuredIcon} fill="currentColor" viewBox="0 0 20 20">
              <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
            </svg>
            {t('site.services.labels.featured')}
          </div>
        )}
        <div className={s.services.card.title}>{t(card.titleKey)}</div>

        <div className={s.services.card.meta}>
          <div className={s.services.card.metaRow}>
            <span>{t('site.services.labels.baseCost')}</span>
            <div className={s.services.card.costWrapper}>
              {card.oldCostKey && (
                <span className={s.services.card.oldCost}>{t(card.oldCostKey)}</span>
              )}
              <span className={s.services.card.cost}>{t(card.costKey)}</span>
            </div>
          </div>
          <div className={s.services.card.metaRow}>
            <span>{t('site.services.labels.avgDuration')}</span>
            <span className={s.services.card.duration}>{t(card.durationKey)}</span>
          </div>
          {card.extraNoteKey ? (
            <div className={s.services.card.extra}>{t(card.extraNoteKey)}</div>
          ) : null}
        </div>
      </div>

      <div className={s.services.card.desc}>
        {t(card.descKey)}
      </div>
    </div>
  );
};

