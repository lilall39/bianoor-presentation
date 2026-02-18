"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, Variants } from 'framer-motion';
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
  Target,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

function TargetCarousel() {
  const [current, setCurrent] = useState(0);
  const slides = [
    {
      title: "Cible principale",
      text: "Familles musulmanes résidant en France et en Europe à la recherche de produits sains."
    },
    {
      title: "Cibles secondaires",
      text: "Consommateurs bio non musulmans et collectivités (B2B)."
    },
    {
      title: "Usages",
      text: "Consommation quotidienne, période du Ramadan, et coffrets cadeaux."
    }
  ];

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const carouselVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <motion.div 
      variants={carouselVariants}
      className="relative group w-full"
    >
      <div 
        className="overflow-hidden rounded-2xl shadow-lg min-h-[225px] md:min-h-[245px] flex items-center relative"
        style={{
          background: 'linear-gradient(to bottom right, #F0E6DD, #E2D1C3) padding-box, linear-gradient(to bottom right, #9B6B4A, #4A3224) border-box',
          border: '2px solid transparent'
        }}
      >
        <motion.div 
          className="flex w-full h-full"
          animate={{ x: `-${current * 100}%` }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="w-full flex-shrink-0 p-6 md:p-8 flex flex-col items-center justify-center text-center space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-[#2D1E14]">{slide.title}</h3>
              <p className="text-lg md:text-xl text-[#2D1E14]/80 leading-relaxed max-w-[90%] mx-auto">
                {slide.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <button 
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 border border-black/5 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hidden md:block text-accent hover:bg-white z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 border border-black/5 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hidden md:block text-accent hover:bg-white z-10"
      >
        <ChevronRight size={24} />
      </button>

      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${current === i ? 'bg-accent w-6' : 'bg-accent/20'}`}
          />
        ))}
      </div>
    </motion.div>
  );
}

function SolutionCarousel() {
  const [current, setCurrent] = useState(0);
  const slides = [
    {
      title: "Notre Solution",
      text: "Bio certifié. Halal conforme par process."
    },
    {
      title: "Bio certifié",
      text: "De l’origine Algérie (zones identifiées) jusqu’au consommateur final."
    },
    {
      title: "Halal conforme par process",
      text: "Procédures respectées à chaque étape de la chaîne de production."
    },
    {
      title: "Qualité & transparence",
      text: "Produits sains et naturels, qualité constante, transparence totale sur les process."
    }
  ];

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const carouselVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <motion.div 
      variants={carouselVariants}
      className="relative group w-full"
    >
      <div 
        className="overflow-hidden rounded-2xl shadow-lg min-h-[225px] md:min-h-[245px] flex items-center relative"
        style={{
          background: 'linear-gradient(to bottom right, #E2D1C3, #C5B4A7) padding-box, linear-gradient(to bottom right, #9B6B4A, #4A3224) border-box',
          border: '2px solid transparent'
        }}
      >
        <motion.div 
          className="flex w-full h-full"
          animate={{ x: `-${current * 100}%` }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {slides.map((slide, i) => (
            <div 
              key={i} 
              className="w-full flex-shrink-0 p-6 md:p-8 flex flex-col items-center justify-center text-center space-y-4"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[#2D1E14]">{slide.title}</h3>
              <p className="text-lg md:text-xl text-[#2D1E14] leading-relaxed max-w-[90%] mx-auto">
                {slide.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <button 
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 border border-black/5 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hidden md:block text-accent hover:bg-white z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 border border-black/5 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hidden md:block text-accent hover:bg-white z-10"
      >
        <ChevronRight size={24} />
      </button>

      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${current === i ? 'bg-accent w-6' : 'bg-accent/20'}`}
          />
        ))}
      </div>
    </motion.div>
  );
}

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
      className={`h-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-[0.95] blur-[2px]'
      }`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div className="bg-[#EFE9E1] pt-6">
        <div className="w-full py-4 flex items-center justify-center px-4 border-b border-accent/30 shadow-sm">
          <span className="text-[10px] sm:text-xs md:text-base font-bold tracking-wider text-[#2D1E14] uppercase text-center leading-tight">
            BIONOOR — Présentation · Marché & opportunité d’investissement
          </span>
        </div>
      </div>
      {/* 1. Hero */}
      <Hero 
        title="BIONOOR"
        subtitle="Bio halal premium depuis plus de 20 ans"
        description="BIONOOR est une marque éthique ancrée depuis plus de 20 ans dans l’alimentation bio et halal, fondée autour des valeurs humaines de son dirigeant."
        imageSrc="/images/hero-oasis-blue-sky.png"
      />

      <Section 
        subtitle="Le Problème"
        title="Une demande forte, une offre peu lisible."
        className="pt-10 md:pt-16"
        animated={true}
        viewportAmount={0.01}
        viewportMargin="-10% 0px -43% 0px"
      >
        <TwoColumns>
          <motion.div 
            className="space-y-6 text-justify"
          >
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Le marché bio + traçabilité manque de marques fortes et lisibles.
            </motion.p>
            <ul className="space-y-4">
              <motion.li 
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
                }}
                className="flex gap-4"
              >
                <AlertTriangle className="text-accent shrink-0" />
                <span><strong>Origine floue :</strong> Difficulté à tracer la provenance réelle des produits.</span>
              </motion.li>
              <motion.li 
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
                }}
                className="flex gap-4"
              >
                <AlertTriangle className="text-accent shrink-0" />
                <span><strong>Traçabilité limitée :</strong> Manque de transparence sur la chaîne de production.</span>
              </motion.li>
              <motion.li 
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
                }}
                className="flex gap-4"
              >
                <AlertTriangle className="text-accent shrink-0" />
                <span><strong>Qualité variable :</strong> Constance de qualité souvent aléatoire.</span>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0.92 },
              visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
            }}
            className="shadow-xl rounded-2xl border border-black/5 overflow-hidden"
          >
            <div className="relative aspect-[4/3]">
              <img 
                src="/images/probleme-marche-dattes.png" 
                alt="Visualisation des freins du marché" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </TwoColumns>
      </Section>

      {/* 3. Marché & opportunité */}
      <Section 
        subtitle="Opportunité"
        title="Marché bio en croissance en Europe."
        dark
        animated={true}
      >
        <CardGrid columns={2} className="items-start">
          <Card 
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
            }}
            title="Croissance Halal"
            description="• Le marché halal en Europe est estimé à ~93 milliards USD en 2025, avec un TCAC attendu ≈ 7,8 % (projection 2025→2030).\n• D’autres études donnent des estimations plus larges selon périmètre (ex. IMARC : valeur importante et forte croissance à l’horizon 2034).\n• En France, le rayon halal en grande distribution reste limité (~480 M€ GD), le marché total alimentaire halal (tous circuits) atteignant plusieurs milliards (≈ ~6 Md€ selon périmètre)."
            className="bg-[#F0E6DD]/40 border-accent/10 !pt-2 !pb-4 !px-5 flex flex-col items-start justify-start [&_p]:!text-[#1F1F1F] [&_p]:text-[17px] [&_h3]:!text-accent [&_h3]:text-[22px] [&_h3]:!mt-0 [&_h3]:!mb-1 [&_p]:whitespace-pre-line [&_p]:text-justify md:col-span-1"
          />
          <Card 
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
            }}
            title="Hausse du Bio"
            description="• Le marché bio européen pèse désormais autour de ~58–60 Md€ (ventes retail Europe récentes, record 2024).\n• En France, le rapport annuel de l'Agence BIO montre une dynamique constante malgré les variations de marché.\n• La part de surface agricole bio en Europe continue d’augmenter (zone UE ≈ 10–10.5 % de la SAU)."
            className="bg-[#F0E6DD]/40 border-accent/10 !pt-2 !pb-4 !px-5 flex flex-col items-start justify-start [&_p]:!text-[#1F1F1F] [&_p]:text-[17px] [&_h3]:!text-accent [&_h3]:text-[22px] [&_h3]:!mt-0 [&_h3]:!mb-1 [&_p]:whitespace-pre-line [&_p]:text-justify md:col-span-1"
          />
          <Card 
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
            }}
            title="Segment peu structuré"
            description="Le marché halal en grande distribution en France reste fragmenté (~480 M € GD, ~6 Md € total).\n• Marques certifiées comme Zakia, Isla Délice, Wassila, Italal existent, mais rare combinaison bio + halal.\n• Très peu de marques européennes établies avec une offre bio + halal crédible (segment encore jeune)"
            className="bg-[#F0E6DD]/40 border-accent/10 !pt-2 !pb-4 !px-5 flex flex-col items-start justify-start [&_p]:!text-[#1F1F1F] [&_p]:text-[17px] [&_h3]:!text-accent [&_h3]:text-[22px] [&_h3]:!mt-0 [&_h3]:!mb-1 [&_p]:whitespace-pre-line [&_p]:text-justify md:col-span-2"
          />
        </CardGrid>
      </Section>

      {/* 4. Cibles clients & usages */}
      <Section 
        className="pt-10 md:pt-16"
        animated={true}
      >
        <CardGrid columns={2} className="items-end">
          <div className="space-y-6">
            <div className="overflow-hidden">
              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
                }}
                className="text-base font-bold uppercase tracking-widest mb-3 md:mb-4 text-accent"
              >
                Cibles
              </motion.p>
              <motion.h2 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
                }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6 leading-tight font-serif font-medium tracking-tight"
              >
                Qui sont les consommateurs BIONOOR ?
              </motion.h2>
            </div>
            <TargetCarousel />
          </div>
          <div className="space-y-6">
            <div className="overflow-hidden">
              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
                }}
                className="text-base font-bold uppercase tracking-widest mb-3 md:mb-4 text-accent"
              >
                Notre Solution
              </motion.p>
              <motion.h2 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
                }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6 leading-tight font-serif font-medium tracking-tight"
              >
                Bio certifié. Halal conforme par process.
              </motion.h2>
            </div>
            <SolutionCarousel />
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
              Produit B2B existant depuis 20 ans with une identité algérienne forte. Le bio est rare sur ce segment, ce qui nous confère un avantage compétitif majeur.
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
        dark
        className="mt-12 min-h-[40vh] md:h-[58vh] flex items-center justify-center overflow-hidden p-4 sm:p-8 md:p-12"
      >
        <div className="w-full h-full flex items-center justify-center max-w-5xl mx-auto">
          <img 
            src="/images/avantages-humain-filieres-v3.png" 
            alt="Avantages : Humain & Filières" 
            className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
          />
        </div>
      </Section>

      {/* 8. Actifs existants */}
      <Section 
        subtitle="Actifs"
        title="Un socle déjà solide pour décoller."
        className="pt-10 md:pt-16"
      >
        <CardGrid columns={4}>
          <FadeInScroll delay={0}>
            <Card 
              title="10 000"
              description="Emails qualifiés en base."
              className="h-full bg-[#F0E6DD]/40 !border-4 !border-accent !pt-2 !pb-4 !px-5 flex flex-col items-start justify-start [&_p]:!text-[#1F1F1F] [&_p]:text-[17px] [&_h3]:!text-accent [&_h3]:text-[22px] [&_h3]:!mt-0 [&_h3]:!mb-1 [&_p]:text-justify"
            />
          </FadeInScroll>
          <FadeInScroll delay={150}>
            <Card 
              title="25 000"
              description="Membres sur Facebook."
              className="h-full bg-[#F0E6DD]/40 !border-4 !border-accent !pt-2 !pb-4 !px-5 flex flex-col items-start justify-start [&_p]:!text-[#1F1F1F] [&_p]:text-[17px] [&_h3]:!text-accent [&_h3]:text-[22px] [&_h3]:!mt-0 [&_h3]:!mb-1 [&_p]:text-justify"
            />
          </FadeInScroll>
          <FadeInScroll delay={300}>
            <Card 
              title="B2B"
              description="Référencements historiques collectivités."
              className="h-full bg-[#F0E6DD]/40 !border-4 !border-accent !pt-2 !pb-4 !px-5 flex flex-col items-start justify-start [&_p]:!text-[#1F1F1F] [&_p]:text-[17px] [&_h3]:!text-accent [&_h3]:text-[22px] [&_h3]:!mt-0 [&_h3]:!mb-1 [&_p]:text-justify"
            />
          </FadeInScroll>
          <FadeInScroll delay={450}>
            <Card 
              title="Filières"
              description="Sourcing direct Algérie."
              className="h-full bg-[#F0E6DD]/40 !border-4 !border-accent !pt-2 !pb-4 !px-5 flex flex-col items-start justify-start [&_p]:!text-[#1F1F1F] [&_p]:text-[17px] [&_h3]:!text-accent [&_h3]:text-[22px] [&_h3]:!mt-0 [&_h3]:!mb-1 [&_p]:text-justify"
            />
          </FadeInScroll>
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
          <Card 
            title="Produits & sourcing"
            description="[À compléter]"
            className="bg-[#F0E6DD]/40 border-accent/10 !pt-2 !pb-4 !px-5 flex flex-col items-start justify-start [&_p]:!text-[#1F1F1F] [&_p]:text-[17px] [&_h3]:!text-accent [&_h3]:text-[22px] [&_h3]:!mt-0 [&_h3]:!mb-1 [&_p]:text-justify"
          />
          <Card 
            title="E-commerce & outils"
            description="[À compléter]"
            className="bg-[#F0E6DD]/40 border-accent/10 !pt-2 !pb-4 !px-5 flex flex-col items-start justify-start [&_p]:!text-[#1F1F1F] [&_p]:text-[17px] [&_h3]:!text-accent [&_h3]:text-[22px] [&_h3]:!mt-0 [&_h3]:!mb-1 [&_p]:text-justify"
          />
          <Card 
            title="Activation marketing"
            description="[À compléter]"
            className="bg-[#F0E6DD]/40 border-accent/10 !pt-2 !pb-4 !px-5 flex flex-col items-start justify-start [&_p]:!text-[#1F1F1F] [&_p]:text-[17px] [&_h3]:!text-accent [&_h3]:text-[22px] [&_h3]:!mt-0 [&_h3]:!mb-1 [&_p]:text-justify"
          />
          <Card 
            title="Logistique"
            description="[À compléter]"
            className="bg-[#F0E6DD]/40 border-accent/10 !pt-2 !pb-4 !px-5 flex flex-col items-start justify-start [&_p]:!text-[#1F1F1F] [&_p]:text-[17px] [&_h3]:!text-accent [&_h3]:text-[22px] [&_h3]:!mt-0 [&_h3]:!mb-1 [&_p]:text-justify"
          />
          <Card 
            title="Sécurité & imprévus"
            description="[À compléter]"
            className="bg-[#F0E6DD]/40 border-accent/10 !pt-2 !pb-4 !px-5 flex flex-col items-start justify-start [&_p]:!text-[#1F1F1F] [&_p]:text-[17px] [&_h3]:!text-accent [&_h3]:text-[22px] [&_h3]:!mt-0 [&_h3]:!mb-1 [&_p]:text-justify"
          />
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
            className="bg-[#F0E6DD]/40 border-accent/10 !pt-2 !pb-4 !px-5 flex flex-col items-start justify-start [&_p]:!text-[#1F1F1F] [&_p]:text-[17px] [&_h3]:!text-accent [&_h3]:text-[22px] [&_h3]:!mt-0 [&_h3]:!mb-1 [&_p]:text-justify"
          />
          <Card 
            title="Actions de mitigation"
            description="Diversification progressive, stocks stratégiques courts, tests marché, pilotage par data."
            className="bg-[#F0E6DD]/40 border-accent/10 !pt-2 !pb-4 !px-5 flex flex-col items-start justify-start [&_p]:!text-[#1F1F1F] [&_p]:text-[17px] [&_h3]:!text-accent [&_h3]:text-[22px] [&_h3]:!mt-0 [&_h3]:!mb-1 [&_p]:text-justify"
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
