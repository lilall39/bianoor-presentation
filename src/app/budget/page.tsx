"use client";

import Section from '@/components/Section';
import { Card, CardGrid } from '@/components/CardGrid';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

import Link from 'next/link';

export default function BudgetPage() {
  const { t } = useLanguage();

  return (
    <main className="pb-24">
      <LanguageSwitcher />
      <Section 
        subtitle={t('budget_subtitle')}
        title={t('budget_title')}
      >
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-8 md:mb-12">
          {t('budget_intro')}
        </p>

        <CardGrid columns={2}>
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold">{t('budget_investments')}</h3>
            <div className="overflow-x-auto rounded-xl border border-accent/10">
              <table className="w-full text-left min-w-[300px]">
                <thead className="bg-[#F0E6DD]/30 border-bottom border-accent/10">
                  <tr>
                    <th className="p-3 md:p-4 font-bold text-sm md:text-base">{t('budget_table_item')}</th>
                    <th className="p-3 md:p-4 font-bold text-sm md:text-base">{t('budget_table_amount')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-accent/10">
                  <tr className="text-sm md:text-base">
                    <td className="p-3 md:p-4">{t('budget_item1')}</td>
                    <td className="p-3 md:p-4 text-gray-400">{t('budget_tobecompleted')}</td>
                  </tr>
                  <tr className="text-sm md:text-base">
                    <td className="p-3 md:p-4">{t('budget_item2')}</td>
                    <td className="p-3 md:p-4 text-gray-400">{t('budget_tobecompleted')}</td>
                  </tr>
                  <tr className="text-sm md:text-base">
                    <td className="p-3 md:p-4">{t('budget_item3')}</td>
                    <td className="p-3 md:p-4 text-gray-400">{t('budget_tobecompleted')}</td>
                  </tr>
                  <tr className="text-sm md:text-base">
                    <td className="p-3 md:p-4">{t('budget_item4')}</td>
                    <td className="p-3 md:p-4 text-gray-400">{t('budget_tobecompleted')}</td>
                  </tr>
                </tbody>
                <tfoot className="bg-[#F0E6DD]/30 font-bold text-sm md:text-base">
                  <tr>
                    <td className="p-3 md:p-4">{t('budget_total')}</td>
                    <td className="p-3 md:p-4 text-gray-400">{t('budget_tobecompleted')}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <ImagePlaceholder text="Répartition budgétaire (Graphique)" className="aspect-video md:aspect-auto" />
        </CardGrid>
      </Section>

      <Section subtitle={t('budget_phase_subtitle')} title={t('budget_phase_title')}>
        <CardGrid columns={3}>
          <Card 
            title={t('budget_p1_title')}
            description={t('budget_p1_desc')}
            className="border-dashed"
          />
          <Card 
            title={t('budget_p2_title')}
            description={t('budget_p2_desc')}
            className="border-dashed"
          />
          <Card 
            title={t('budget_p3_title')}
            description={t('budget_p3_desc')}
            className="border-dashed"
          />
        </CardGrid>
      </Section>

      <Section subtitle={t('budget_hyp_subtitle')} title={t('budget_hyp_title')}>
        <div className="p-6 md:p-8 bg-[#F0E6DD]/30 rounded-3xl border border-accent/10">
          <ul className="space-y-4 text-gray-600 text-sm md:text-base">
            <li className="flex items-start gap-4">
              <span className="font-bold text-accent">01.</span>
              <p>{t('budget_hyp1')}</p>
            </li>
            <li className="flex items-start gap-4">
              <span className="font-bold text-accent">02.</span>
              <p>{t('budget_hyp2')}</p>
            </li>
            <li className="flex items-start gap-4">
              <span className="font-bold text-accent">03.</span>
              <p>{t('budget_hyp3')}</p>
            </li>
          </ul>
        </div>
      </Section>

      <div className="px-4 sm:px-6 md:px-12 lg:px-24">
        <Link href="/" className="inline-block py-4 text-accent font-bold hover:underline text-sm md:text-base">{t('budget_back')}</Link>
      </div>
    </main>
  );
}

