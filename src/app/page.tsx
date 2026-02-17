"use client";

import { useEffect, useRef, useState } from 'react';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import { Card, CardGrid } from '@/components/CardGrid';
import TwoColumns from '@/components/TwoColumns';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import CTA from '@/components/CTA';
import { 
  AlertTriangle, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  Calendar, 
  Database, 
  ShieldCheck, 
  Zap, 
  Flag,
  ShoppingCart,
  MapPin,
  Target
} from 'lucide-react';

function FadeInScroll({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-4 scale-[0.98] bg-[#EFE9E1]'
      }`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div className="w-full py-4 flex items-center justify-center px-4 bg-[#EFE9E1] border-b border-accent/30 shadow-sm">
        <span className="text-sm md:text-base font-bold tracking-wider text-[#2D1E14] uppercase text-center">
          BIONOOR — Présentation · Marché & opportunité d’investissement
        </span>
      </div>
      {/* 1. Hero */}
      <Hero 
        title="BIONOOR"
        subtitle="Bio halal premium depuis 20 ans"
        description="BIONOOR est une marque éthique ancrée depuis plus de 20 ans dans l’alimentation bio et halal, fondée autour des valeurs humaines de son dirigeant."
        ctaText="Lancer, mesurer, décider"
        imageSrc="/images/hero-palm-v2.png"
      />

      {/* 2. Problème marché */}
      <Section 
        subtitle="Le Problème"
        title="Une demande forte, une offre peu lisible."
        className="!pt-4"
      >
        <TwoColumns>
          <div className="space-y-6 text-justify">
            <p className="text-xl text-gray-600 leading-relaxed">
              Le marché bio + halal + traçabilité manque de marques fortes et lisibles.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <AlertTriangle className="text-accent shrink-0" />
                <span><strong>Origine floue :</strong> Difficulté à tracer la provenance réelle des produits.</span>
              </li>
              <li className="flex gap-4">
                <AlertTriangle className="text-accent shrink-0" />
                <span><strong>Traçabilité limitée :</strong> Manque de transparence sur la chaîne de production.</span>
              </li>
              <li className="flex gap-4">
                <AlertTriangle className="text-accent shrink-0" />
                <span><strong>Qualité variable :</strong> Constance de qualité souvent aléatoire.</span>
              </li>
            </ul>
          </div>
          <div className="shadow-xl rounded-2xl border border-black/5 overflow-hidden">
            <div className="relative aspect-[4/3]">
              <img 
                src="/images/probleme-marche-dattes.png" 
                alt="Visualisation des freins du marché" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </TwoColumns>
      </Section>

      {/* 3. Marché & opportunité */}
      <Section 
        subtitle="Opportunité"
        title="Marché halal et bio en croissance en Europe."
        dark
      >
        <CardGrid columns={2} className="items-start">
          <Card 
            title="Croissance Halal"
            description="• Le marché halal en Europe est estimé à ~93 milliards USD en 2025, avec un TCAC attendu ≈ 7,8 % (projection 2025→2030).\n• D’autres études donnent des estimations plus larges selon périmètre (ex. IMARC : valeur importante et forte croissance à l’horizon 2034).\n• En France, le rayon halal en grande distribution reste limité (~480 M€ GD), le marché total alimentaire halal (tous circuits) atteignant plusieurs milliards (≈ ~6 Md€ selon périmètre)."
            className="bg-[#FFFDFB] border-accent/10 !pt-2 !pb-4 !px-5 flex flex-col items-start justify-start [&_p]:!text-[#1F1F1F] [&_p]:text-[17px] [&_h3]:!text-accent [&_h3]:text-[22px] [&_h3]:!mt-0 [&_h3]:!mb-1 [&_p]:whitespace-pre-line [&_p]:text-justify md:col-span-1"
          />
          <Card 
            title="Hausse du Bio"
            description="• Le marché bio européen pèse désormais autour de ~58–60 Md€ (ventes retail Europe récentes, record 2024).\n• En France, les ventes bio en grande distribution ont connu une dynamique marquée récemment (ex. variation notable en 2023 ; ventes GD et circuits alternatifs à surveiller — rapport Agence BIO).\n• La part de surface agricole bio en Europe continue d’augmenter (zone UE ≈ 10–10.5 % de la SAU selon les années récentes)"
            className="bg-[#FFFDFB] border-accent/10 !pt-2 !pb-4 !px-5 flex flex-col items-start justify-start [&_p]:!text-[#1F1F1F] [&_p]:text-[17px] [&_h3]:!text-accent [&_h3]:text-[22px] [&_h3]:!mt-0 [&_h3]:!mb-1 [&_p]:whitespace-pre-line [&_p]:text-justify md:col-span-1"
          />
          <Card 
            title="Segment peu structuré"
            description="Le marché halal en grande distribution en France reste fragmenté (~480 M € GD, ~6 Md € total).\n• Marques certifiées comme Zakia, Isla Délice, Wassila, Italal existent, mais rare combinaison bio + halal.\n• Très peu de marques européennes établies avec une offre bio + halal crédible (segment encore jeune)"
            className="bg-[#FFFDFB] border-accent/10 !pt-2 !pb-4 !px-5 flex flex-col items-start justify-start [&_p]:!text-[#1F1F1F] [&_p]:text-[17px] [&_h3]:!text-accent [&_h3]:text-[22px] [&_h3]:!mt-0 [&_h3]:!mb-1 [&_p]:whitespace-pre-line [&_p]:text-justify md:col-span-2"
          />
        </CardGrid>
      </Section>

      {/* 4. Cibles clients & usages */}
      <Section 
        subtitle="Cibles"
        title="Qui sont les consommateurs BIONOOR ?"
      >
        <CardGrid columns={2} className="items-center">
          <div className="space-y-6 text-justify">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Cible principale</h3>
              <p className="text-gray-600">Familles musulmanes résidant en France et en Europe à la recherche de produits sains.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Cibles secondaires</h3>
              <p className="text-gray-600">Consommateurs bio non musulmans et collectivités (B2B).</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Usages</h3>
              <p className="text-gray-600">Consommation quotidienne, période du Ramadan, et coffrets cadeaux.</p>
            </div>
          </div>
          <FadeInScroll delay={300}>
            <div className="shadow-xl rounded-2xl border border-black/5 overflow-hidden max-w-[80%] mx-auto lg:ml-auto lg:mr-0">
              <div className="relative aspect-[4/3] bg-white/50 p-8">
                <img 
                  src="/images/cibles-usages-v4.png" 
                  alt="Portraits cibles / Usages BIONOOR" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </FadeInScroll>
        </CardGrid>
      </Section>

      {/* 5. Solution */}
      <Section 
        subtitle="Notre Solution"
        title="Bio certifié. Halal conforme par process."
      >
        <CardGrid columns={2} className="items-center">
          <div className="space-y-6 text-justify">
            <h3 className="text-2xl font-bold">Traçabilité totale</h3>
            <p className="text-gray-600">De l&apos;origine Algérie (zones identifiées) jusqu&apos;au consommateur final.</p>
            <ul className="space-y-4 text-left">
              <li className="flex gap-4">
                <CheckCircle className="text-accent shrink-0" />
                <span>Produits sains et naturels</span>
              </li>
              <li className="flex gap-4">
                <CheckCircle className="text-accent shrink-0" />
                <span>Qualité constante et supérieure</span>
              </li>
              <li className="flex gap-4">
                <CheckCircle className="text-accent shrink-0" />
                <span>Transparence absolue sur les process</span>
              </li>
            </ul>
          </div>

          <div className="shadow-xl rounded-2xl border border-black/5 overflow-hidden max-w-[80%] mx-auto lg:ml-auto lg:mr-0">
            <div className="relative aspect-[4/3] bg-white/50 p-8">
              <img 
                src="/images/solution-bio-v2.png" 
                alt="Schéma de la solution / Process BIONOOR" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </CardGrid>
      </Section>

      {/* 6. Produit phase 1 — Dattes */}
      <Section 
        subtitle="Phase 1"
        title="Les Dattes : Notre produit d'entrée"
      >
        <TwoColumns>
          <div className="space-y-6 text-justify">
            <div className="p-4 bg-[#F0E6DD] border-l-4 border-accent inline-block">
              <span className="font-bold text-accent">Notation qualité 18,2/20 (experts)</span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Produit B2B existant depuis 20 ans avec une identité algérienne forte. Le bio est rare sur ce segment, ce qui nous confère un avantage compétitif majeur.
            </p>
            <CardGrid columns={1} className="!gap-4 text-left">
              <div className="flex items-center gap-4 p-4 bg-[#F0E6DD]/40 rounded-xl">
                <ShoppingCart className="text-accent w-5 h-5" />
                <span>Formats : boîtes famille, coffrets premium, cadeaux B2B.</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-[#F0E6DD]/40 rounded-xl">
                <Calendar className="text-accent w-5 h-5" />
                <span>Produit à forte récurrence.</span>
              </div>
            </CardGrid>
          </div>
          <div className="shadow-xl rounded-2xl border border-black/5 overflow-hidden">
            <div className="relative aspect-[4/3]">
              <img 
                src="/images/packshot-dattes-v2.png" 
                alt="Packshot Dattes BIONOOR" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </TwoColumns>
      </Section>

      {/* 7. Avantage clé — humain & filières */}
      <Section 
        subtitle="Avantages"
        title="Humain & Filières : Le cœur de BIONOOR"
        dark
      >
        <TwoColumns align="top">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Hadj Khelil</h3>
            <p className="text-orange-100 opacity-90">
              Fondateur &amp; expert bio halal avec plus de 20 ans d&apos;expérience terrain. Sa connaissance des filières est notre plus grand atout.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Filières identifiées</h3>
            <p className="text-orange-100 opacity-90">
              Filières algériennes sourcées directement. Process documentés pour assurer la continuité et la qualité.
            </p>
          </div>
        </TwoColumns>
      </Section>

      {/* 8. Actifs existants */}
      <Section 
        subtitle="Actifs"
        title="Un socle déjà solide pour décoller."
      >
        <CardGrid columns={4}>
          <Card 
            title="10 000"
            description="Emails qualifiés en base."
            icon={<Database className="w-6 h-6" />}
            className="bg-[#F0E6DD]/40"
          />
          <Card 
            title="25 000"
            description="Membres sur Facebook."
            icon={<Users className="w-6 h-6" />}
            className="bg-[#F0E6DD]/40"
          />
          <Card 
            title="B2B"
            description="Référencements historiques collectivités."
            icon={<Target className="w-6 h-6" />}
            className="bg-[#F0E6DD]/40"
          />
          <Card 
            title="Filières"
            description="Sourcing direct Algérie."
            icon={<MapPin className="w-6 h-6" />}
            className="bg-[#F0E6DD]/40"
          />
        </CardGrid>
      </Section>


      {/* 9. Modèle économique */}
      <Section 
        subtitle="Business Model"
        title="Marge brute cible ~50 % (retail)."
      >
        <TwoColumns>
          <div className="space-y-6 text-gray-600">
            <p className="text-xl text-foreground font-semibold">D2C e-commerce prioritaire.</p>
            <p>Le canal direct permet de capter la valeur et d&apos;activer la communauté existante.</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle className="text-accent w-5 h-5" />
                <span>B2B existant maintenu pour le volume.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-accent w-5 h-5" />
                <span>Rotation rapide des stocks.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-accent w-5 h-5" />
                <span>BFR maîtrisé par les précommandes.</span>
              </li>
            </ul>
          </div>
          <ImagePlaceholder text="Graphique Modèle Économique" />
        </TwoColumns>
      </Section>

      {/* 10. Roadmap 12 mois */}
      <Section 
        subtitle="Roadmap"
        title="Une montée en puissance maîtrisée."
      >
        <div className="relative border-l-2 border-accent/20 ml-4 space-y-12 pb-8">
          <div className="relative pl-12">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
            <h3 className="text-xl font-bold mb-2">Phase 1 (0–3 mois)</h3>
            <p className="text-gray-600">Focus dattes only, lancement e-commerce, réactivation base, premières ventes.</p>
          </div>
          <div className="relative pl-12">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
            <h3 className="text-xl font-bold mb-2">Phase 2 (4–6 mois)</h3>
            <p className="text-gray-600">Structuration logistique, optimisation prix &amp; formats, offres B2B packagées.</p>
          </div>
          <div className="relative pl-12">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
            <h3 className="text-xl font-bold mb-2">Phase 3 (6–12 mois)</h3>
            <p className="text-gray-600">Nouvelles références (chocolat bio, thé bio, café bio, barres de dattes), montée en volume maîtrisée.</p>
          </div>
        </div>
      </Section>


      {/* 11. Financement & objectifs */}
      <Section 
        subtitle="Financement"
        title="Besoin de financement : [À compléter]"
      >
        <h4 className="text-xl font-bold mb-8">Utilisation des fonds :</h4>
        <CardGrid columns={3}>
          <div className="p-6 bg-[#F0E6DD]/30 rounded-xl border border-accent/10">
            <h5 className="font-bold mb-2">Produits & sourcing</h5>
            <p className="text-gray-400">[À compléter]</p>
          </div>
          <div className="p-6 bg-[#F0E6DD]/30 rounded-xl border border-accent/10">
            <h5 className="font-bold mb-2">E-commerce & outils</h5>
            <p className="text-gray-400">[À compléter]</p>
          </div>
          <div className="p-6 bg-[#F0E6DD]/30 rounded-xl border border-accent/10">
            <h5 className="font-bold mb-2">Activation marketing</h5>
            <p className="text-gray-400">[À compléter]</p>
          </div>
          <div className="p-6 bg-[#F0E6DD]/30 rounded-xl border border-accent/10">
            <h5 className="font-bold mb-2">Logistique</h5>
            <p className="text-gray-400">[À compléter]</p>
          </div>
          <div className="p-6 bg-[#F0E6DD]/30 rounded-xl border border-accent/10">
            <h5 className="font-bold mb-2">Sécurité & imprévus</h5>
            <p className="text-gray-400">[À compléter]</p>
          </div>
        </CardGrid>
        <div className="mt-12 p-8 bg-accent text-white rounded-2xl">
          <h4 className="text-xl font-bold mb-4">Objectifs clés :</h4>
          <p className="opacity-90">Traction B2C, validation marché, décision go/no-go.</p>
        </div>
      </Section>

      {/* 12. Risques & mitigation */}
      <Section 
        subtitle="Risques"
        title="Pilotage par la data et mitigation."
      >
        <CardGrid columns={2}>
          <Card 
            title="Risques identifiés"
            description="Filières saisonnières, logistique, traction B2C, constance qualité."
            icon={<AlertTriangle className="w-8 h-8" />}
          />
          <Card 
            title="Actions de mitigation"
            description="Diversification progressive, stocks stratégiques courts, tests marché, pilotage par data."
            icon={<ShieldCheck className="w-8 h-8" />}
          />
        </CardGrid>
      </Section>

      {/* 13. Équipe & pilotage */}
      <Section 
        subtitle="Équipe"
        title="Une expertise solide."
      >
        <TwoColumns align="top">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Direction</h3>
            <p className="text-gray-600"><strong>Hadj Khelil :</strong> Sourcing & qualité. Expert bio halal reconnu.</p>
            <p className="text-gray-600"><strong>Responsable BIONOOR :</strong> Pilotage B2C en interne.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Opérations</h3>
            <p className="text-gray-600">Prestataires spécialisés au départ pour le site, le CRM, la logistique et le marketing pour une agilité maximale.</p>
          </div>
        </TwoColumns>
      </Section>

      {/* 14. Conclusion / Pourquoi investir */}
      <Section>
        <CTA 
          title="Ce projet n&apos;est pas une promesse, c&apos;est la réactivation structurée d&apos;un actif réel."
          description="Produit déjà validé, marque existante, filières réelles et actifs existants activables. Un financement modeste pour une trajectoire claire vers le cash."
          buttonText="Lancer, mesurer, décider"
        />
      </Section>


      <footer className="py-12 text-center text-gray-400 border-t border-gray-100">
        <p>© 2026 BIONOOR. Tous droits réservés.</p>
      </footer>
    </main>
  );
}
