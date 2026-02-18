"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  imageSrc?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, imageSrc }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.3, margin: "0px" });

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95, 
      y: 20,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 1.8, 
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  const subtitleVariants = {
    hidden: { 
      opacity: 0, 
      y: 10 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1.2, 
        ease: "easeOut", 
        delay: 1.0 // Apparaît après le titre avec un délai plus long
      }
    }
  };

  return (
    <header 
      ref={containerRef}
      className="relative w-full h-[58vh] flex flex-col items-center justify-start pt-[10vh] px-4 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imageSrc || "/images/hero-palm-v2.png"} 
          alt="Bionoor Hero" 
          className="w-full h-full object-cover scale-105"
        />
        {/* Subtle dark overlay (~20-25% black) */}
        <div className="absolute inset-0 bg-black/25" />
        {/* Very light vignette for text contrast */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.2)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-4 max-w-5xl">
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tight text-white uppercase px-2"
          style={{ 
            textShadow: '0 10px 40px rgba(0,0,0,0.4)',
            lineHeight: 0.9
          }}
        >
          {title}
        </motion.h1>

        <motion.p
          variants={subtitleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-lg sm:text-xl md:text-3xl font-medium text-white/95 tracking-[0.2em] uppercase"
          style={{ 
            textShadow: '0 4px 10px rgba(0,0,0,0.3)'
          }}
        >
          {subtitle}
        </motion.p>
      </div>
      
      {/* Scroll indicator (optional but premium) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
      </motion.div>
    </header>
  );
};

export default Hero;
