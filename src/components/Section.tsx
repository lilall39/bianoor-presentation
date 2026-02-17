import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, title, subtitle, className = '', dark = false }) => {
  return (
    <section className={`py-9 sm:py-12 px-4 sm:px-6 md:px-12 lg:px-24 ${dark ? 'bg-accent text-white' : 'bg-background text-foreground'} ${className}`}>
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-8 sm:mb-12">
            {subtitle && (
              <p className={`text-base font-bold uppercase tracking-widest mb-3 md:mb-4 ${dark ? 'text-orange-200' : 'text-accent'}`}>
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 max-w-3xl leading-tight">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
