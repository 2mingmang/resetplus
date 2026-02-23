import React, { useMemo, useState } from 'react';
import { t } from '../../i18n/translation';
import { landingStyles as s } from './landingStyles';

type Slide = { imageUrl: string; altKey: string };

export function ImageCarousel({ slides }: { slides: readonly Slide[] }) {
  const safeSlides = useMemo(() => (slides.length > 0 ? Array.from(slides) : []), [slides]);
  const [idx, setIdx] = useState(0);

  const current = safeSlides[idx];
  if (!current) return null;

  return (
    <div className={s.carousel.root}>
      <img
        src={current.imageUrl}
        alt={t(current.altKey)}
        className={s.carousel.img}
        loading="lazy"
      />
    </div>
  );
}

