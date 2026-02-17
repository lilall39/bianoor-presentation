import Section from '@/components/Section';
import { Card, CardGrid } from '@/components/CardGrid';
import ImagePlaceholder from '@/components/ImagePlaceholder';

import Link from 'next/link';

export default function RendementsPage() {
  return (
    <main className="min-h-screen pb-24">
      <Section 
        subtitle="Performances"
        title="Rendements & Projections"
      >
        <p className="text-xl text-gray-600 max-w-3xl mb-12">
          Structure des rendements attendus et projections financières sur 3 ans. Les valeurs chiffrées seront intégrées après validation finale.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-bold">Projections de Chiffre d&apos;Affaires</h3>
            <div className="aspect-[16/9] w-full">
              <ImagePlaceholder text="Graphique de croissance CA (3 ans)" />
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Indicateurs Clés (KPIs)</h3>
            <Card 
              title="ROI cible"
              description="[À compléter] % sur la période"
            />
            <Card 
              title="Break-even"
              description="Atteinte du point mort à M+[À compléter]"
            />
            <Card 
              title="LTV / CAC"
              description="Ratio visé : [À compléter]"
            />
          </div>
        </div>
      </Section>

      <Section subtitle="Scénarios" title="Analyse de sensibilité" dark>
        <CardGrid columns={3}>
          <div className="p-8 bg-accent-light rounded-2xl border border-accent-light/50">
            <h4 className="font-bold text-xl mb-4">Scénario Conservateur</h4>
            <p className="text-orange-100 opacity-80 mb-6">Hypothèse de croissance modérée basée sur les actifs existants.</p>
            <p className="text-2xl font-bold">[À compléter]</p>
          </div>
          <div className="p-8 bg-accent-light rounded-2xl border border-accent-light/50">
            <h4 className="font-bold text-xl mb-4">Scénario Médian</h4>
            <p className="text-orange-100 opacity-80 mb-6">Hypothèse de référence avec activation marketing standard.</p>
            <p className="text-2xl font-bold">[À compléter]</p>
          </div>
          <div className="p-8 bg-accent-light rounded-2xl border border-accent-light/50">
            <h4 className="font-bold text-xl mb-4">Scénario Ambitieux</h4>
            <p className="text-orange-100 opacity-80 mb-6">Accélération via partenariats et élargissement rapide gamme.</p>
            <p className="text-2xl font-bold">[À compléter]</p>
          </div>
        </CardGrid>
      </Section>

      <Section subtitle="Distribution" title="Politique de dividendes">
        <div className="max-w-3xl space-y-6">
          <p className="text-gray-600 leading-relaxed">
            La politique de distribution des dividendes sera définie selon les résultats de la Phase 3. 
            Priorité actuelle : Réinvestissement pour croissance organique et sécurisation des filières.
          </p>
          <div className="p-6 bg-[#F0E6DD]/30 border-l-4 border-accent rounded-r-xl">
            <p className="font-medium text-gray-800 italic">
              &quot;Notre objectif est de construire une valeur pérenne et un flux de trésorerie stable pour nos investisseurs.&quot;
            </p>
          </div>
        </div>
      </Section>

      <div className="px-6 md:px-12 lg:px-24">
        <Link href="/" className="text-accent font-bold hover:underline">← Retour à la présentation</Link>
      </div>
    </main>
  );
}

