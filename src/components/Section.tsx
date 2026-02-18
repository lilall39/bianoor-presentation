import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  dark?: boolean;
  animated?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  title, 
  subtitle, 
  className = '', 
  dark = false,
  animated = false 
}) => {
  const content = (
    <div className="max-w-6xl mx-auto">
      {(title || subtitle) && (
        <div className="mb-6 sm:mb-8">
          {subtitle && (
            <motion.p 
              variants={animated ? {
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
              } : undefined}
              className={`text-base font-bold uppercase tracking-widest mb-3 md:mb-4 ${dark ? 'text-orange-200' : 'text-accent'}`}
            >
              {subtitle}
            </motion.p>
          )}
          {title && (
            <motion.h2 
              variants={animated ? {
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
              } : undefined}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 leading-tight"
            >
              {title}
            </motion.h2>
          )}
        </div>
      )}
      {children}
    </div>
  );

  return (
    <section className={`py-6 sm:py-8 px-4 sm:px-6 md:px-12 lg:px-24 ${dark ? 'bg-accent text-white' : 'bg-background text-foreground'} ${className}`}>
      {content}
    </section>
  );
};

export default Section;
