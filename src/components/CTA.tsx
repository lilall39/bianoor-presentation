import React from 'react';

interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  link?: string;
  className?: string;
}

const CTA: React.FC<CTAProps> = ({ title, description, buttonText, link = "#", className = '' }) => {
  return (
    <div className={`p-8 sm:p-12 md:p-16 rounded-2xl sm:rounded-3xl bg-accent text-white text-center space-y-6 md:space-y-8 ${className}`}>
      <div className="max-w-2xl mx-auto space-y-4 md:space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
          {title}
        </h2>
        <p className="text-base sm:text-lg text-orange-100 opacity-90 leading-relaxed px-4 md:px-0 max-w-[92%] md:max-w-none mx-auto md:mx-0">
          {description}
        </p>
      </div>
      <div>
        <a 
          href={link}
          className="inline-block w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-background text-accent font-bold rounded-full hover:bg-[#F0E6DD] transition-all duration-300 shadow-xl"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default CTA;
