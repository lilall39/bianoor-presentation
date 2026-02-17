import React from 'react';
import ImagePlaceholder from './ImagePlaceholder';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText?: string;
  onCtaClick?: () => void;
  imageSrc?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, description, ctaText, onCtaClick, imageSrc }) => {
  return (
    <header className="relative w-full flex items-start justify-center pt-8 pb-12 md:pb-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-20">
        <div className="flex-1 text-left space-y-6 md:space-y-8">
          <div>
            <h1 className="text-base font-bold tracking-widest text-accent uppercase mb-3 md:mb-4">
              {title}
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6">
              {subtitle}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
              {description}
            </p>
          </div>
          {ctaText && (
            <button 
              onClick={onCtaClick}
              className="w-full sm:w-auto px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-light transition-colors duration-300 shadow-lg shadow-stone-900/10"
            >
              {ctaText}
            </button>
          )}
        </div>
        <div className="flex-1 w-full max-w-xl mt-4 md:mt-0">
          {imageSrc ? (
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={imageSrc} 
                alt={subtitle} 
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <ImagePlaceholder className="aspect-[4/3] rounded-2xl shadow-2xl" text="Hero Image / Product Shot" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Hero;
