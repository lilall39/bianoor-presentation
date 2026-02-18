"use client";

import Section from '@/components/Section';
import { Card, CardGrid } from '@/components/CardGrid';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

import Link from 'next/link';

export default function RendementsPage() {
  const { t } = useLanguage();

  return (
    <main className="pb-24">
      <LanguageSwitcher />
      <Section 
        subtitle={t('rend_perf_subtitle')}
        title={t('rend_perf_title')}
      >
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-8 md:mb-12">
          {t('rend_perf_intro')}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            <h3 className="text-xl md:text-2xl font-bold">{t('rend_proj_title')}</h3>
            <div className="aspect-video lg:aspect-[16/9] w-full">
              <ImagePlaceholder text={t('rend_proj_chart')} />
            </div>
          </div>
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-2xl font-bold">{t('rend_kpi_title')}</h3>
            <Card 
              title={t('rend_roi_title')}
              description={t('rend_roi_desc')}
              className="p-4 md:p-6"
            />
            <Card 
              title={t('rend_be_title')}
              description={t('rend_be_desc')}
              className="p-4 md:p-6"
            />
            <Card 
              title={t('rend_ltv_title')}
              description={t('rend_ltv_desc')}
              className="p-4 md:p-6"
            />
          </div>
        </div>
      </Section>

      <Section subtitle={t('rend_sens_subtitle')} title={t('rend_sens_title')} dark>
        <CardGrid columns={3}>
          <div className="p-6 md:p-8 bg-accent-light rounded-2xl border border-accent-light/50">
            <h4 className="font-bold text-lg md:text-xl mb-3 md:mb-4">{t('rend_scen1_title')}</h4>
            <p className="text-orange-100 opacity-80 mb-4 md:mb-6 text-sm md:text-base">{t('rend_scen1_desc')}</p>
            <p className="text-xl md:text-2xl font-bold">[À compléter]</p>
          </div>
          <div className="p-6 md:p-8 bg-accent-light rounded-2xl border border-accent-light/50">
            <h4 className="font-bold text-lg md:text-xl mb-3 md:mb-4">{t('rend_scen2_title')}</h4>
            <p className="text-orange-100 opacity-80 mb-4 md:mb-6 text-sm md:text-base">{t('rend_scen2_desc')}</p>
            <p className="text-xl md:text-2xl font-bold">[À compléter]</p>
          </div>
          <div className="p-6 md:p-8 bg-accent-light rounded-2xl border border-accent-light/50">
            <h4 className="font-bold text-lg md:text-xl mb-3 md:mb-4">{t('rend_scen3_title')}</h4>
            <p className="text-orange-100 opacity-80 mb-4 md:mb-6 text-sm md:text-base">{t('rend_scen3_desc')}</p>
            <p className="text-xl md:text-2xl font-bold">[À compléter]</p>
          </div>
        </CardGrid>
      </Section>

      <Section subtitle={t('rend_dist_subtitle')} title={t('rend_dist_title')}>
        <div className="max-w-3xl space-y-6">
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            {t('rend_dist_text')}
          </p>
          <div className="p-4 md:p-6 bg-[#F0E6DD]/30 border-l-4 border-accent rounded-r-xl">
            <p className="text-sm md:text-base font-medium text-gray-800 italic">
              {t('rend_dist_quote')}
            </p>
          </div>
        </div>
      </Section>

      <div className="px-4 sm:px-6 md:px-12 lg:px-24">
        <Link href="/" className="inline-block py-4 text-accent font-bold hover:underline text-sm md:text-base">{t('rend_back')}</Link>
      </div>
    </main>
  );
}

