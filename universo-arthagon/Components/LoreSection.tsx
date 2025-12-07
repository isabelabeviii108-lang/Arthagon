import React from 'react';
import { LORE_SECTIONS } from '../constants';
import { Quote, ScrollText, Book, Swords, Crown } from 'lucide-react';
import { Button } from './Button';

interface LoreSectionProps {
    onNavigate: (view: string) => void;
}

export const LoreSection: React.FC<LoreSectionProps> = ({ onNavigate }) => {
  const getIconForSection = (index: number) => {
      if (index === 0) return Swords;
      if (index === 1) return Crown;
      return Book;
  };

  return (
    <section id="lore" className="py-32 bg-arthagon-paper dark:bg-[#030303] relative overflow-hidden transition-colors duration-500">
      {/* Background ambient light effects */}
      <div className="absolute top-1/4 -left-64 w-[800px] h-[800px] bg-arthagon-gold/10 dark:bg-arthagon-gold/5 rounded-full blur-[150px] pointer-events-none mix-blend-multiply dark:mix-blend-screen animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -right-64 w-[800px] h-[800px] bg-arthagon-accent/5 dark:bg-arthagon-accent/5 rounded-full blur-[150px] pointer-events-none mix-blend-multiply dark:mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <span className="text-arthagon-gold/80 dark:text-arthagon-gold/60 font-cinzel text-sm tracking-[0.5em] uppercase block mb-4">História do Mundo</span>
          <h2 className="text-5xl md:text-7xl font-cinzel text-metallic mb-8 tracking-wide drop-shadow-2xl font-black">Crônicas Antigas</h2>
          <div className="flex justify-center items-center gap-4 opacity-70">
             <div className="h-px w-32 bg-gradient-to-l from-arthagon-gold/50 to-transparent"></div>
             <div className="rotate-45 w-3 h-3 border border-arthagon-gold bg-arthagon-paper dark:bg-black shadow-[0_0_10px_#c5a059]"></div>
             <div className="h-px w-32 bg-gradient-to-r from-arthagon-gold/50 to-transparent"></div>
          </div>
        </div>

        <div className="space-y-48">
          {LORE_SECTIONS.map((item, index) => {
            const IconComponent = getIconForSection(index);
            return (
            <div key={item.id} className="group">
                <div 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}
                >
                {/* Visual Side (Glyph/Artifact instead of Photo) */}
                <div className="w-full lg:w-1/2 relative flex justify-center items-center">
                    <div className="relative w-full max-w-md h-[500px] perspective-1000">
                        {/* Decorative Border Frame */}
                        <div className="absolute inset-0 border-2 border-arthagon-ink/10 dark:border-arthagon-gold/20 rounded-t-full rounded-b-lg"></div>
                        <div className="absolute inset-4 border border-arthagon-ink/5 dark:border-arthagon-gold/10 rounded-t-full rounded-b-lg"></div>
                        
                        {/* Center "Glyph" Container */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-arthagon-paper/50 to-transparent dark:from-white/5 dark:to-transparent rounded-t-full rounded-b-lg backdrop-blur-sm">
                            <div className="relative p-10 rounded-full border border-arthagon-gold/30 bg-arthagon-paper dark:bg-black shadow-[0_0_50px_rgba(197,160,89,0.1)] group-hover:shadow-[0_0_80px_rgba(197,160,89,0.2)] transition-shadow duration-700">
                                <IconComponent className="w-24 h-24 text-arthagon-gold opacity-80 group-hover:scale-110 transition-transform duration-700" />
                            </div>
                        </div>

                        {/* Particles/Texture Overlay */}
                        <div className="absolute inset-0 opacity-30 bg-noise-texture mix-blend-overlay"></div>
                    </div>
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-1/2 space-y-10">
                    <h3 className="text-4xl md:text-5xl font-cinzel text-metallic tracking-wide inline-block relative pb-6 font-bold">
                        {item.title}
                        <div className="absolute bottom-0 left-0 w-1/3 h-[2px] bg-arthagon-gold shadow-[0_0_10px_#c5a059]"></div>
                    </h3>
                    
                    <div className="font-body text-arthagon-ink/80 dark:text-gray-300 text-lg md:text-xl leading-[1.8] text-justify relative tracking-wide">
                        {item.content}
                    </div>
                    
                    {item.quote && (
                    <div className="relative py-8 my-8 bg-arthagon-parchment/60 dark:bg-black/40 p-8 border-l-2 border-arthagon-gold/30 backdrop-blur-sm">
                        <Quote className="absolute top-4 right-4 w-8 h-8 text-arthagon-gold/20 dark:text-arthagon-gold/10 transform rotate-180" />
                        
                        <div className="relative z-10">
                            <p className="font-medieval text-xl md:text-2xl text-arthagon-gold/90 italic mb-4 leading-relaxed text-shadow">
                            "{item.quote.text}"
                            </p>
                            <p className="font-cinzel text-xs text-arthagon-ink/60 dark:text-arthagon-silver uppercase tracking-[0.2em] flex items-center gap-2">
                            <span className="w-4 h-px bg-arthagon-gold"></span> {item.quote.author}
                            </p>
                        </div>
                    </div>
                    )}
                    
                    <Button variant="outline" size="sm" className="mt-4 gap-2" onClick={() => onNavigate('chronicle')}>
                        <ScrollText size={18} />
                        Ler Crônica Completa
                    </Button>
                </div>
                </div>
                
                {/* Section Separator (Ornamental) */}
                {index < LORE_SECTIONS.length - 1 && (
                    <div className="divider-ornamental">
                        <div className="divider-diamond"></div>
                    </div>
                )}
            </div>
          )})}
        </div>
      </div>
    </section>
  );
};