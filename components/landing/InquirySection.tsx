import React, { useMemo, useState } from 'react';
import { landingContent } from '../../content/landing';
import { t } from '../../i18n/translation';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { landingStyles as s } from './landingStyles';

type InquiryFormState = {
  name: string;
  phone: string;
  service: string;
  period: string;
};

export function InquirySection() {
  const [form, setForm] = useState<InquiryFormState>({
    name: '',
    phone: '',
    service: '',
    period: '',
  });

  const serviceOptions = useMemo(() => landingContent.inquiry.serviceOptions, []);

  const onSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    // Intentionally no hardcoded alerts/messages here.
  };

  return (
    <Section id="inquiry" className={s.inquiry.root}>
      <Container>
        <div className={s.inquiry.grid}>
          <div>
            <h2 className={s.inquiry.title}>{t('site.inquiry.title')}</h2>
            <p className={s.inquiry.subtitle}>
              {t('site.inquiry.subtitle1')}
              <br />
              {t('site.inquiry.subtitle2')}
            </p>

            <div className={s.inquiry.stepsGrid}>
              {landingContent.inquiry.steps.map((step) => (
                <div
                  key={step.noKey}
                  className={s.inquiry.stepCard}
                >
                  <div className={s.inquiry.stepNo}>{t(step.noKey)}</div>
                  <div className={s.inquiry.stepTitle}>{t(step.titleKey)}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={s.inquiry.formCard}>
            <form onSubmit={onSubmit} className={s.inquiry.form}>
              <Field
                label={t('site.inquiry.form.nameLabel')}
                placeholder={t('site.inquiry.form.namePlaceholder')}
                value={form.name}
                onChange={(v) => setForm((prev) => ({ ...prev, name: v }))}
              />
              <Field
                label={t('site.inquiry.form.phoneLabel')}
                placeholder={t('site.inquiry.form.phonePlaceholder')}
                value={form.phone}
                inputMode="numeric"
                onChange={(v) => setForm((prev) => ({ ...prev, phone: v }))}
              />

              <div className={s.inquiry.field}>
                <label className={s.inquiry.label}>{t('site.inquiry.form.serviceLabel')}</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm((prev) => ({ ...prev, service: e.target.value }))}
                  className={s.inquiry.select}
                >
                  <option value="">{t('site.inquiry.form.servicePlaceholder')}</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {t(opt.labelKey)}
                    </option>
                  ))}
                </select>
              </div>

              <Field
                label={t('site.inquiry.form.periodLabel')}
                placeholder={t('site.inquiry.form.periodPlaceholder')}
                value={form.period}
                onChange={(v) => setForm((prev) => ({ ...prev, period: v }))}
              />

              <Button type="submit" variant="primary" className={s.inquiry.submit}>
                {t('site.inquiry.form.submit')}
              </Button>

              <div className={s.inquiry.consent}>{t('site.inquiry.form.consent')}</div>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Field({
  label,
  placeholder,
  value,
  onChange,
  inputMode,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
}) {
  return (
    <div className={s.inquiry.field}>
      <label className={s.inquiry.label}>{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        inputMode={inputMode}
        className={s.inquiry.input}
      />
    </div>
  );
}

