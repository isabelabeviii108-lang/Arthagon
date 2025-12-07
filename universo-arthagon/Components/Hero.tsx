import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { ChevronDown, Sword, Globe } from 'lucide-react';
import { HERO_SUBTITLE, HERO_TITLE } from '../constants';

interface HeroProps {
  onNavigate: (view: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#050505]">
      {/* CSS Gradient Background instead of Image */}
      <div 
        className="absolute inset-0 z-0 will-change-transform"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        {/* Deep, dark radial gradient to simulate a void/dungeon atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#0a0a0a] to-black opacity-80"></div>
        
        {/* Subtle grid pattern for texture */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(197,160,89,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(197,160,89,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

        {/* Radial Vignette */}
        <div className="absolute inset-0 bg-vignette-light dark:bg-[radial-gradient(circle,transparent_20%,#030303_100%)] transition-colors duration-700 mix-blend-multiply dark:mix-blend-normal"></div>
        
        {/* Bottom Blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-arthagon-paper dark:to-[#030303] transition-colors duration-700"></div>
      </div>

      {/* Atmospheric Fog Overlay in Hero */}
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-arthagon-paper dark:from-[#030303] to-transparent z-0 transition-colors duration-700"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        <div className="mb-8 opacity-0 animate-fade-in-down" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <div className="flex items-center gap-6 text-arthagon-gold/90 dark:text-arthagon-gold/70">
            <div className="h-[2px] w-16 bg-gradient-to-l from-arthagon-gold to-transparent shadow-[0_0_10px_#c5a059]"></div>
            <span className="text-xs md:text-sm font-cinzel uppercase tracking-[0.6em] text-shadow-glow font-bold">
              RPG Dark Fantasy
            </span>
            <div className="h-[2px] w-16 bg-gradient-to-r from-arthagon-gold to-transparent shadow-[0_0_10px_#c5a059]"></div>
          </div>
        </div>
        
        <h1 className="font-cinzel font-black text-6xl md:text-8xl lg:text-9xl mb-10 tracking-widest opacity-0 animate-fade-in-up uppercase leading-none relative group" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          {/* Main Metallic Text */}
          <span className="text-metallic drop-shadow-2xl relative z-10 block">
            {HERO_TITLE}
          </span>
          {/* Background Glow Text */}
          <span className="absolute inset-0 blur-2xl opacity-40 dark:opacity-20 bg-clip-text text-transparent bg-gradient-to-b from-arthagon-gold to-arthagon-gold animate-pulse-slow z-0 pointer-events-none">
            {HERO_TITLE}
          </span>
        </h1>
        
        <p className="font-body text-arthagon-ink/80 dark:text-gray-300 text-lg md:text-xl max-w-2xl mb-14 leading-relaxed opacity-0 animate-fade-in-up tracking-wide drop-shadow-md font-medium" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          {HERO_SUBTITLE}
        </p>
        
        <div className="flex flex-col md:flex-row gap-8 opacity-0 animate-fade-in-up scale-90 md:scale-100" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
          <Button variant="primary" size="lg" onClick={() => onNavigate('universe')}>
            <Globe className="w-5 h-5 text-arthagon-gold-light" />
            Universo
          </Button>
          <Button 
            variant="discord" 
            size="lg" 
            onClick={() => window.open('https://discord.com/invite/ucFXvYktMz', '_blank')}
            className="animate-pulse-blue hover:animate-none"
          >
            <Sword className="w-6 h-6" />
            Entrar no Discord
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10 text-arthagon-ink/40 dark:text-arthagon-gold/40 hover:text-arthagon-gold transition-colors cursor-pointer group">
        <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em] font-cinzel opacity-0 group-hover:opacity-100 transition-opacity duration-500">Explorar</span>
            <ChevronDown size={32} className="drop-shadow-[0_0_10px_rgba(197,160,89,0.5)]" />
        </div>
      </div>
    </section>
  );
};