export type NavItem = { labelKey: string; href: string };
export type HeroChip = { labelKey: string };
export type StatItem = { labelKey: string; valueKey: string };
export type ServiceCardKey =
  | 'personalRehab'
  | 'bankruptcy'
  | 'oldDebt'
  | 'garnishment'
  | 'release';

export type ServiceCard = {
  key: ServiceCardKey;
  titleKey: string;
  costKey: string;
  durationKey: string;
  descKey: string;
  extraNoteKey?: string;
};

export type InquiryStep = { noKey: string; titleKey: string };

import landing from './landing.json';

export const landingContent = landing as {
  anchors: { top: string; about: string; services: string; inquiry: string };
  nav: NavItem[];
  hero: { chips: HeroChip[]; primaryCtaHref: string; secondaryCtaHref: string };
  stats: StatItem[];
  about: { carousel: Array<{ imageUrl: string; altKey: string }> };
  services: { cards: ServiceCard[] };
  inquiry: {
    steps: InquiryStep[];
    serviceOptions: Array<{ labelKey: string; value: ServiceCardKey }>;
  };
  links: { telHref: string; kakaoHref: string };
};

