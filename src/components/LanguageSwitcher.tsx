"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-24 right-4 z-50 flex items-center gap-2 bg-white/80 backdrop-blur-md px-3 py-2 rounded-full border border-accent/20 shadow-lg">
      <Globe size={16} className="text-accent" />
      <button 
        onClick={() => setLanguage('fr')}
        className={`text-xs font-bold transition-colors ${language === 'fr' ? 'text-accent' : 'text-gray-400 hover:text-accent/60'}`}
      >
        FR
      </button>
      <span className="text-gray-300">|</span>
      <button 
        onClick={() => setLanguage('en')}
        className={`text-xs font-bold transition-colors ${language === 'en' ? 'text-accent' : 'text-gray-400 hover:text-accent/60'}`}
      >
        EN
      </button>
    </div>
  );
}
