"use client";

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import { Card, CardGrid } from '@/components/CardGrid';
import TwoColumns from '@/components/TwoColumns';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import CTA from '@/components/CTA';
import { 
  TriangleAlert,
  ShoppingCart,
  Calendar,
  CheckCircle,
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';

function TargetCarousel() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const slides = [
    {
      title: t('target1_title'),
      text: t('target1_text')
    },
    {
      title: t('target2_title'),
      text: t('target2_text')
    },
    {
      title: t('target3_title'),
      text: t('target3_text')
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
        className="overflow-hidden rounded-2xl shadow-lg min-h-[225px] md:min-h-[245px] flex items-center relative touch-pan-y"
        style={{
          background: 'linear-gradient(to bottom right, #F0E6DD, #E2D1C3) padding-box, linear-gradient(to bottom right, #9B6B4A, #4A3224) border-box',
          border: '2px solid transparent'
        }}
      >
        <motion.div 
          className="flex w-full h-full cursor-grab active:cursor-grabbing"
          animate={{ x: `-${current * 100}%` }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -30) next();
            if (info.offset.x > 30) prev();
          }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="w-full flex-shrink-0 p-6 md:p-8 flex flex-col items-center justify-center text-center space-y-4">
              <h3 className="text-xl md:text-3xl font-bold text-[#2D1E14]">{slide.title}</h3>
              <p className="text-base md:text-xl text-[#2D1E14]/80 leading-relaxed max-w-[90%] mx-auto">
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
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const slides = [
    {
      title: t('sol1_title'),
      text: t('sol1_text')
    },
    {
      title: t('sol2_title'),
      text: t('sol2_text')
    },
    {
      title: t('sol3_title'),
      text: t('sol3_text')
    },
    {
      title: t('sol4_title'),
      text: t('sol4_text')
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
        className="overflow-hidden rounded-2xl shadow-lg min-h-[225px] md:min-h-[245px] flex items-center relative touch-pan-y"
        style={{
          background: 'linear-gradient(to bottom right, #E2D1C3, #C5B4A7) padding-box, linear-gradient(to bottom right, #9B6B4A, #4A3224) border-box',
          border: '2px solid transparent'
        }}
      >
        <motion.div 
          className="flex w-full h-full cursor-grab active:cursor-grabbing"
          animate={{ x: `-${current * 100}%` }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -30) next();
            if (info.offset.x > 30) prev();
          }}
        >
          {slides.map((slide, i) => (
            <div 
              key={i} 
              className="w-full flex-shrink-0 p-6 md:p-8 flex flex-col items-center justify-center text-center space-y-4"
            >
              <h3 className="text-xl md:text-3xl font-bold text-[#2D1E14]">{slide.title}</h3>
              <p className="text-base md:text-xl text-[#2D1E14] leading-relaxed max-w-[90%] mx-auto">
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

function RisksCarousel() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const slides = [
    {
      title: t('risk1_title'),
      text: t('risk1_text')
    },
    {
      title: t('risk2_title'),
      text: t('risk2_text')
    },
    {
      title: t('risk3_title'),
      text: t('risk3_text')
    },
    {
      title: t('risk4_title'),
      text: t('risk4_text')
    },
    {
      title: t('risk5_title'),
      text: t('risk5_text')
    },
    {
      title: t('risk6_title'),
      text: t('risk6_text')
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
        className="overflow-hidden rounded-2xl shadow-lg min-h-[200px] md:min-h-[220px] flex items-center relative touch-pan-y"
        style={{
          background: 'linear-gradient(to bottom right, #F0E6DD, #E2D1C3) padding-box, linear-gradient(to bottom right, #9B6B4A, #4A3224) border-box',
          border: '2px solid transparent'
        }}
      >
        <motion.div 
          className="flex w-full h-full cursor-grab active:cursor-grabbing"
          animate={{ x: `-${current * 100}%` }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -30) next();
            if (info.offset.x > 30) prev();
          }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="w-full flex-shrink-0 p-6 md:p-8 flex flex-col items-center justify-center text-center space-y-3 relative overflow-hidden">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="/images/bg-oasis-risks.png" 
                  alt="" 
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-white/40" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-serif font-bold text-[#2D1E14]">{slide.title}</h3>
                <p className="text-sm md:text-lg text-[#2D1E14]/80 leading-relaxed max-w-[85%] mx-auto">
                  {slide.text}
                </p>
              </div>
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

      <div className="flex justify-center gap-2 mt-4">
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

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <main>
      <LanguageSwitcher />
      <div className="bg-[#EFE9E1] pt-6">
        <div className="w-full py-4 flex items-center justify-center px-4 border-b border-accent/30 shadow-sm">
          <span className="text-[10px] sm:text-xs md:text-base font-bold tracking-wider text-[#2D1E14] uppercase text-center leading-tight">
            {t('nav_title')}
          </span>
        </div>
      </div>
      {/* 1. Hero */}
      <Hero 
        title={t('hero_title')}
        subtitle={t('hero_subtitle')}
        description={t('hero_description')}
        imageSrc="/images/hero-oasis-blue-sky.png"
      />

      <Section 
        subtitle={t('problem_subtitle')}
        title={t('problem_title')}
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
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
            >
              {t('problem_intro')}
            </motion.p>
            <ul className="space-y-4">
              <motion.li 
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
                }}
                className="flex gap-4"
              >
                <TriangleAlert className="text-accent shrink-0" />
                <span className="text-sm md:text-base"><strong>{t('problem_item1_title')}</strong> {t('problem_item1_desc')}</span>
              </motion.li>
              <motion.li 
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
                }}
                className="flex gap-4"
              >
                <TriangleAlert className="text-accent shrink-0" />
                <span className="text-sm md:text-base"><strong>{t('problem_item2_title')}</strong> {t('problem_item2_desc')}</span>
              </motion.li>
              <motion.li 
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
                }}
                className="flex gap-4"
              >
                <TriangleAlert className="text-accent shrink-0" />
                <span className="text-sm md:text-base"><strong>{t('problem_item3_title')}</strong> {t('problem_item3_desc')}</span>
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
        subtitle={t('opportunity_subtitle')}
        title={t('opportunity_title')}
        dark
        animated={true}
      >
        <CardGrid columns={2} className="items-stretch">
          <Card 
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
            }}
            title={t('opp_card1_title')}
            description={t('opp_card1_desc')}
            className="bg-[#F0E6DD]/40 !border-2 !border-[#2D1E14]/30 !pt-2 !pb-4 !px-5 flex flex-col items-start justify-start [&_div]:!text-[#1F1F1F] [&_div]:text-[17px] [&_h3]:!text-[#2D1E14] [&_h3]:text-[18px] min-[1100px]:text-[22px] [&_h3]:font-serif [&_h3]:font-bold [&_h3]:tracking-tighter [&_h3]:whitespace-nowrap [&_h3]:!mt-0 [&_h3]:!mb-2 [&_div]:whitespace-pre-line [&_div]:text-justify md:col-span-1 h-full shadow-sm"
          />
          <Card 
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
            }}
            title={t('opp_card2_title')}
            description={t('opp_card2_desc')}
            className="bg-[#F0E6DD]/40 !border-2 !border-[#2D1E14]/30 !pt-2 !pb-4 !px-5 flex flex-col items-start justify-start [&_div]:!text-[#1F1F1F] [&_div]:text-[17px] [&_h3]:!text-[#2D1E14] [&_h3]:text-[18px] min-[1100px]:text-[22px] [&_h3]:font-serif [&_h3]:font-bold [&_h3]:tracking-tighter [&_h3]:whitespace-nowrap [&_h3]:!mt-0 [&_h3]:!mb-2 [&_div]:whitespace-pre-line [&_div]:text-justify md:col-span-1 h-full shadow-sm"
          />
        </CardGrid>
      </Section>

      <Section 
        title={t('competition_title')}
        animated={true}
        className="mt-12 !py-4 text-center"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
            }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            {t('competition_text')}
          </motion.p>
        </div>
      </Section>

      <Section 
        title={t('risks_title')}
        animated={true}
        className="mt-10 md:mt-16 text-center"
      >
        <RisksCarousel />
      </Section>

      {/* 6. Produit phase 1 — Dattes */}
      <Section 
        subtitle={t('phase1_subtitle')}
        title={t('phase1_title')}
        className="mt-10 md:mt-16"
      >
        <TwoColumns>
          <div className="space-y-6 text-justify">
            <div className="p-4 bg-[#F0E6DD] border-l-4 border-accent inline-block">
              <span className="font-bold text-accent text-sm md:text-base">{t('phase1_quality')}</span>
            </div>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {t('phase1_desc')}
            </p>
            <CardGrid columns={1} className="!gap-4 text-left">
              <div className="flex items-center gap-4 p-4 bg-[#F0E6DD]/40 rounded-xl">
                <ShoppingCart className="text-accent w-5 h-5" />
                <span className="text-xs sm:text-sm md:text-base">{t('phase1_formats')}</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-[#F0E6DD]/40 rounded-xl">
                <Calendar className="text-accent w-5 h-5" />
                <span className="text-xs sm:text-sm md:text-base">{t('phase1_recurrence')}</span>
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

      {/* 4. Cibles clients & usages */}
      <Section 
        className="mt-10 md:mt-16"
        animated={true}
      >
        <CardGrid columns={2} className="items-start">
          <div className="space-y-6">
            <div>
              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
                }}
                className="text-sm md:text-base font-bold uppercase tracking-widest mb-3 md:mb-4 text-accent"
              >
                {t('targets_subtitle')}
              </motion.p>
              <motion.h2 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
                }}
                className="text-[12px] min-[375px]:text-[14px] min-[425px]:text-[16px] sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6 leading-tight font-serif font-medium tracking-tighter whitespace-nowrap"
              >
                {t('targets_title')}
              </motion.h2>
            </div>
            <TargetCarousel />
          </div>
          <div className="space-y-6">
            <div>
              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
                }}
                className="text-sm md:text-base font-bold uppercase tracking-widest mb-3 md:mb-4 text-accent"
              >
                {t('solution_subtitle')}
              </motion.p>
              <motion.h2 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
                }}
                className="text-[9px] min-[320px]:text-[10px] min-[375px]:text-[11px] min-[425px]:text-[13px] sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6 leading-tight font-serif font-medium tracking-[-0.07em] whitespace-nowrap"
              >
                {t('solution_title')}
              </motion.h2>
            </div>
            <SolutionCarousel />
          </div>
        </CardGrid>
      </Section>

      {/* 7. Avantage clé — humain & filières */}
      <Section 
        dark
        className="mt-10 md:mt-16 min-h-[40vh] md:h-[58vh] flex items-center justify-center overflow-hidden p-4 sm:p-8 md:p-12"
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
        subtitle={t('assets_subtitle')}
        title={t('assets_title')}
        className="pt-10 md:pt-16 mt-10 md:mt-16"
        animated={true}
      >
        <CardGrid columns={4}>
          <Card 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] } }
            }}
            title={t('asset1_title')}
            description={t('asset1_desc')}
            className="h-full bg-[#F0E6DD]/40 !border-4 !border-accent !pt-2 !pb-4 !px-5 flex flex-col items-start justify-start [&_div]:!text-[#1F1F1F] [&_div]:text-[17px] [&_h3]:!text-accent [&_h3]:text-[22px] [&_h3]:!mt-0 [&_h3]:!mb-1 [&_div]:text-justify shadow-sm"
          />
          <Card 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } }
            }}
            title={t('asset2_title')}
            description={t('asset2_desc')}
            className="h-full bg-[#F0E6DD]/40 !border-4 !border-accent !pt-2 !pb-4 !px-5 flex flex-col items-start justify-start [&_div]:!text-[#1F1F1F] [&_div]:text-[17px] [&_h3]:!text-accent [&_h3]:text-[22px] [&_h3]:!mt-0 [&_h3]:!mb-1 [&_div]:text-justify shadow-sm"
          />
          <Card 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } }
            }}
            title={t('asset3_title')}
            description={t('asset3_desc')}
            className="h-full bg-[#F0E6DD]/40 !border-4 !border-accent !pt-2 !pb-4 !px-5 flex flex-col items-start justify-start [&_div]:!text-[#1F1F1F] [&_div]:text-[17px] [&_h3]:!text-accent [&_h3]:text-[22px] [&_h3]:!mt-0 [&_h3]:!mb-1 [&_div]:text-justify shadow-sm"
          />
          <Card 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } }
            }}
            title={t('asset4_title')}
            description={t('asset4_desc')}
            className="h-full bg-[#F0E6DD]/40 !border-4 !border-accent !pt-2 !pb-4 !px-5 flex flex-col items-start justify-start [&_div]:!text-[#1F1F1F] [&_div]:text-[17px] [&_h3]:!text-accent [&_h3]:text-[22px] [&_h3]:!mt-0 [&_h3]:!mb-1 [&_div]:text-justify shadow-sm"
          />
        </CardGrid>
      </Section>


      {/* 9. Modèle économique */}
      <Section 
        subtitle={t('bm_subtitle')}
        title={t('bm_title')}
        className="mt-10 md:mt-16"
      >
        <TwoColumns>
          <div className="space-y-6 text-gray-600">
            <p className="text-lg md:text-xl text-foreground font-semibold">{t('bm_d2c')}</p>
            <p className="text-sm md:text-base">{t('bm_d2c_desc')}</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle className="text-accent w-5 h-5" />
                <span className="text-sm md:text-base">{t('bm_b2b')}</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-accent w-5 h-5" />
                <span className="text-sm md:text-base">{t('bm_rotation')}</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-accent w-5 h-5" />
                <span className="text-sm md:text-base">{t('bm_bfr')}</span>
              </li>
            </ul>
          </div>
          <ImagePlaceholder text="Graphique Modèle Économique" />
        </TwoColumns>
      </Section>

      {/* 10. Roadmap 12 mois */}
      <Section 
        subtitle={t('roadmap_subtitle')}
        title={t('roadmap_title')}
      >
        <div className="relative border-l-2 border-accent/20 ml-4 space-y-12 pb-8">
          <div className="relative pl-8 md:pl-12">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
            <h3 className="text-lg md:text-xl font-bold mb-2">{t('roadmap_p1_title')}</h3>
            <p className="text-sm md:text-base text-gray-600">{t('roadmap_p1_desc')}</p>
          </div>
          <div className="relative pl-8 md:pl-12">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
            <h3 className="text-lg md:text-xl font-bold mb-2">{t('roadmap_p2_title')}</h3>
            <p className="text-sm md:text-base text-gray-600">{t('roadmap_p2_desc')}</p>
          </div>
          <div className="relative pl-8 md:pl-12">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
            <h3 className="text-lg md:text-xl font-bold mb-2">{t('roadmap_p3_title')}</h3>
            <p className="text-sm md:text-base text-gray-600">{t('roadmap_p3_desc')}</p>
          </div>
        </div>
      </Section>


      {/* 11. Financement & objectifs */}
      <Section 
        subtitle={t('finance_subtitle')}
        title={t('finance_title')}
      >
        <h4 className="text-lg md:text-xl font-bold mb-8">{t('finance_usage')}</h4>
        <CardGrid columns={3}>
          <Card 
            title={t('fin_item1_title')}
            description="[À compléter]"
            className="bg-[#F0E6DD]/40 border-accent/10 !pt-2 !pb-4 !px-5 flex flex-col items-start justify-start [&_div]:!text-[#1F1F1F] [&_div]:text-[17px] [&_h3]:!text-accent [&_h3]:text-[22px] [&_h3]:!mt-0 [&_h3]:!mb-1 [&_div]:text-justify"
          />
          <Card 
            title={t('fin_item2_title')}
            description="[À compléter]"
            className="bg-[#F0E6DD]/40 border-accent/10 !pt-2 !pb-4 !px-5 flex flex-col items-start justify-start [&_div]:!text-[#1F1F1F] [&_div]:text-[17px] [&_h3]:!text-accent [&_h3]:text-[22px] [&_h3]:!mt-0 [&_h3]:!mb-1 [&_div]:text-justify"
          />
          <Card 
            title={t('fin_item3_title')}
            description="[À compléter]"
            className="bg-[#F0E6DD]/40 border-accent/10 !pt-2 !pb-4 !px-5 flex flex-col items-start justify-start [&_div]:!text-[#1F1F1F] [&_div]:text-[17px] [&_h3]:!text-accent [&_h3]:text-[22px] [&_h3]:!mt-0 [&_h3]:!mb-1 [&_div]:text-justify"
          />
          <Card 
            title={t('fin_item4_title')}
            description="[À compléter]"
            className="bg-[#F0E6DD]/40 border-accent/10 !pt-2 !pb-4 !px-5 flex flex-col items-start justify-start [&_div]:!text-[#1F1F1F] [&_div]:text-[17px] [&_h3]:!text-accent [&_h3]:text-[22px] [&_h3]:!mt-0 [&_h3]:!mb-1 [&_div]:text-justify"
          />
          <Card 
            title={t('fin_item5_title')}
            description="[À compléter]"
            className="bg-[#F0E6DD]/40 border-accent/10 !pt-2 !pb-4 !px-5 flex flex-col items-start justify-start [&_div]:!text-[#1F1F1F] [&_div]:text-[17px] [&_h3]:!text-accent [&_h3]:text-[22px] [&_h3]:!mt-0 [&_h3]:!mb-1 [&_div]:text-justify"
          />
        </CardGrid>
        <div className="mt-12 p-6 md:p-8 bg-accent text-white rounded-2xl">
          <h4 className="text-lg md:text-xl font-bold mb-4">{t('finance_objectives')}</h4>
          <p className="text-sm md:text-base opacity-90">{t('finance_objectives_desc')}</p>
        </div>
      </Section>

      {/* 12. Risques & mitigation */}
      <Section 
        subtitle={t('risk_mitigation_subtitle')}
        title={t('risk_mitigation_title')}
      >
        <CardGrid columns={2}>
          <Card 
            title={t('rm_item1_title')}
            description={t('rm_item1_desc')}
            className="bg-[#F0E6DD]/40 border-accent/10 !pt-2 !pb-4 !px-5 flex flex-col items-start justify-start [&_div]:!text-[#1F1F1F] [&_div]:text-[17px] [&_h3]:!text-accent [&_h3]:text-[22px] [&_h3]:!mt-0 [&_h3]:!mb-1 [&_div]:text-justify"
          />
          <Card 
            title={t('rm_item2_title')}
            description={t('rm_item2_desc')}
            className="bg-[#F0E6DD]/40 border-accent/10 !pt-2 !pb-4 !px-5 flex flex-col items-start justify-start [&_div]:!text-[#1F1F1F] [&_div]:text-[17px] [&_h3]:!text-accent [&_h3]:text-[22px] [&_h3]:!mt-0 [&_h3]:!mb-1 [&_div]:text-justify"
          />
        </CardGrid>
      </Section>

      {/* 13. Équipe & pilotage */}
      <Section 
        subtitle={t('team_subtitle')}
        title={t('team_title')}
      >
        <TwoColumns align="top">
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold">{t('team_direction')}</h3>
            <p className="text-sm md:text-base text-gray-600"><strong>{t('team_hadj')}</strong></p>
            <p className="text-sm md:text-base text-gray-600"><strong>{t('team_resp')}</strong></p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold">{t('team_ops')}</h3>
            <p className="text-sm md:text-base text-gray-600">{t('team_ops_desc')}</p>
          </div>
        </TwoColumns>
      </Section>

      {/* 14. Conclusion / Pourquoi investir */}
      <Section>
        <CTA 
          title={t('cta_title')}
          description={t('cta_desc')}
          buttonText={t('cta_button')}
        />
      </Section>


      <footer className="py-12 text-center text-gray-400 border-t border-gray-100">
        <p className="text-sm">{t('footer_copy')}</p>
      </footer>
    </main>
  );
}
