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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const serviceOptions = useMemo(() => landingContent.inquiry.serviceOptions, []);

  const onSubmit: React.FormEventHandler = async (e) => {
    e.preventDefault();
    
    // 필수 필드 검증
    if (!form.name || !form.phone || !form.service) {
      alert('성함, 연락처, 의뢰 서비스를 모두 입력해주세요.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // 백엔드 API 엔드포인트 호출
      // 환경 변수 또는 설정에서 API URL을 가져올 수 있습니다
      const apiUrl = import.meta.env.VITE_API_URL || '/api/inquiry';
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          service: form.service,
          period: form.period || null,
        }),
      });

      if (!response.ok) {
        throw new Error('서버 오류가 발생했습니다.');
      }

      const data = await response.json();
      
      // 성공 시 폼 초기화
      setForm({
        name: '',
        phone: '',
        service: '',
        period: '',
      });
      
      setSubmitStatus('success');
      
      // 성공 메시지 (선택사항)
      alert('의뢰가 접수되었습니다. 담당자가 곧 연락드리겠습니다.');
      
    } catch (error) {
      console.error('의뢰 제출 오류:', error);
      setSubmitStatus('error');
      alert('의뢰 제출 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
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

              <Button 
                type="submit" 
                variant="primary" 
                className={s.inquiry.submit}
                disabled={isSubmitting}
              >
                {isSubmitting ? '제출 중...' : t('site.inquiry.form.submit')}
              </Button>

              {submitStatus === 'success' && (
                <div className="mt-4 text-center text-sm text-green-600">
                  의뢰가 성공적으로 접수되었습니다.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 text-center text-sm text-red-600">
                  오류가 발생했습니다. 다시 시도해주세요.
                </div>
              )}

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

