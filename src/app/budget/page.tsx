import Section from '@/components/Section';
import { Card, CardGrid } from '@/components/CardGrid';
import TwoColumns from '@/components/TwoColumns';
import ImagePlaceholder from '@/components/ImagePlaceholder';

import Link from 'next/link';

export default function BudgetPage() {
  return (
    <main className="pb-24">
      <Section 
        subtitle="Plan financier"
        title="Budget & Allocation des fonds"
      >
        <p className="text-xl text-gray-600 max-w-3xl mb-12">
          Cette section détaille la structure budgétaire prévue pour le projet BIONOOR. Tous les chiffres sont actuellement en attente de finalisation.
        </p>

        <CardGrid columns={2}>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Investissements initiaux</h3>
            <div className="overflow-x-auto rounded-xl border border-accent/10">
              <table className="w-full text-left min-w-[400px]">
                <thead className="bg-[#F0E6DD]/30 border-bottom border-accent/10">
                  <tr>
                    <th className="p-4 font-bold">Poste de dépense</th>
                    <th className="p-4 font-bold">Montant</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-accent/10">
                  <tr>
                    <td className="p-4">Sourcing & Stock initial</td>
                    <td className="p-4 text-gray-400">[À compléter]</td>
                  </tr>
                  <tr>
                    <td className="p-4">Développement plateforme e-commerce</td>
                    <td className="p-4 text-gray-400">[À compléter]</td>
                  </tr>
                  <tr>
                    <td className="p-4">Marketing & Acquisition</td>
                    <td className="p-4 text-gray-400">[À compléter]</td>
                  </tr>
                  <tr>
                    <td className="p-4">Logistique & Packaging</td>
                    <td className="p-4 text-gray-400">[À compléter]</td>
                  </tr>
                </tbody>
                <tfoot className="bg-[#F0E6DD]/30 font-bold">
                  <tr>
                    <td className="p-4">TOTAL BESOIN</td>
                    <td className="p-4 text-gray-400">[À compléter]</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <ImagePlaceholder text="Répartition budgétaire (Graphique)" />
        </CardGrid>
      </Section>

      <Section subtitle="Détail" title="Répartition par phase">
        <CardGrid columns={3}>
          <Card 
            title="Phase 1 : Lancement"
            description="Focus sur l'acquisition client et la mise en place technique. Allocation : [À compléter] %"
            className="border-dashed"
          />
          <Card 
            title="Phase 2 : Optimisation"
            description="Amélioration des process et élargissement de l'offre. Allocation : [À compléter] %"
            className="border-dashed"
          />
          <Card 
            title="Phase 3 : Scale"
            description="Augmentation des volumes et diversification. Allocation : [À compléter] %"
            className="border-dashed"
          />
        </CardGrid>
      </Section>

      <Section subtitle="Note" title="Hypothèses de calcul">
        <div className="p-8 bg-[#F0E6DD]/30 rounded-3xl border border-accent/10">
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start gap-4">
              <span className="font-bold text-accent">01.</span>
              <p>Marge brute cible maintenue à [À compléter] %</p>
            </li>
            <li className="flex items-start gap-4">
              <span className="font-bold text-accent">02.</span>
              <p>Coût d&apos;acquisition client (CAC) estimé à [À compléter] €</p>
            </li>
            <li className="flex items-start gap-4">
              <span className="font-bold text-accent">03.</span>
              <p>Panier moyen visé : [À compléter] €</p>
            </li>
          </ul>
        </div>
      </Section>

      <div className="px-4 sm:px-6 md:px-12 lg:px-24">
        <Link href="/" className="inline-block py-4 text-accent font-bold hover:underline">← Retour à la présentation</Link>
      </div>
    </main>
  );
}

