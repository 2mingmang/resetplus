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
          <div className={s.services.cardsGridBottom}>
            <div className={s.services.cardsSpacer} />
            {cards.slice(3).map((card) => (
              <ServiceCard key={card.key} card={card} />
            ))}
          </div>
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
      <div className={s.services.card.title}>{t(card.titleKey)}</div>

      <div className={s.services.card.meta}>
        <div className={s.services.card.metaRow}>
          <span>{t('site.services.labels.baseCost')}</span>
          <span className={s.services.card.cost}>{t(card.costKey)}</span>
        </div>
        <div className={s.services.card.metaRow}>
          <span>{t('site.services.labels.avgDuration')}</span>
          <span className={s.services.card.duration}>{t(card.durationKey)}</span>
        </div>
        {card.extraNoteKey ? (
          <div className={s.services.card.extra}>{t(card.extraNoteKey)}</div>
        ) : null}
      </div>

      <div className={s.services.card.desc}>
        {t(card.descKey)}
      </div>
    </div>
  );
};

