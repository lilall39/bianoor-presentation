"use client";

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  imageSrc?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, description, imageSrc }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.3, once: false });

  const titleVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.98,
      y: 10
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 1.2, 
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const subtitleVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 10 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1, 
        ease: "easeOut", 
        delay: 1.0 // 0.8s après le début du titre (qui commence à 0.2)
      }
    }
  };

  const descriptionVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 10 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1, 
        ease: "easeOut", 
        delay: 1.8 // 0.8s après le sous-titre (qui commence à 1.0)
      }
    }
  };

  return (
    <header 
      ref={containerRef}
      className="relative w-full min-h-[500px] md:h-[58vh] flex flex-col items-center justify-start pt-[8vh] md:pt-[10vh] px-4 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imageSrc || "/images/hero-oasis-new.png"} 
          alt="Bionoor Hero" 
          className="w-full h-full object-cover scale-105"
        />
        {/* Dark overlay for white text contrast (25-30%) */}
        <div className="absolute inset-0 bg-black/30" />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.3)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-6 max-w-4xl w-full">
        <div className="space-y-4">
          <motion.h1
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-serif font-medium tracking-tight text-white uppercase px-2"
            style={{ 
              textShadow: '0 10px 40px rgba(0,0,0,0.5)',
              lineHeight: 0.9
            }}
          >
            {title}
          </motion.h1>

          <motion.p
            variants={subtitleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-base sm:text-xl md:text-2xl font-bold text-white tracking-[0.1em] uppercase px-4"
            style={{ 
              textShadow: '0 4px 15px rgba(0,0,0,0.6)'
            }}
          >
            {subtitle}
          </motion.p>
        </div>

        {description && (
          <motion.p
            variants={descriptionVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-sm sm:text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed font-bold px-4"
            style={{ 
              textShadow: '0 4px 15px rgba(0,0,0,0.6)'
            }}
          >
            {description}
          </motion.p>
        )}
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/0 via-white/40 to-white/0" />
      </motion.div>
    </header>
  );
};

export default Hero;
