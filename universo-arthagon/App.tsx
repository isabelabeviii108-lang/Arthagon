
import React, { useEffect, useState } from 'react';
import { Hero } from './Components/Hero';
import { FeatureGrid } from './Components/FeatureGrid';
import { MapSection } from './Components/MapSection';
import { LoreSection } from './Components/LoreSection';
import { RacesSection } from './Components/RacesSection'; 
import { UniverseSection } from './Components/UniverseSection';
import { ChronicleSection } from './Components/ChronicleSection';
import { Footer } from './Components/Footer';
import { Navbar } from './Components/Navbar';

const App: React.FC = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [currentView, setCurrentView] = useState<'home' | 'races' | 'universe' | 'chronicle'>('home');
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');

    // Theme Effect
    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [theme]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            
            if (windowHeight > 0) {
                 setScrollProgress(scrollTop / windowHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    useEffect(() => {
        // Add custom styles for keyframes dynamically
        const styleSheet = document.createElement("style");
        styleSheet.innerText = `
            @keyframes fadeInDown {
                from { opacity: 0; transform: translateY(-20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
             @keyframes shine {
                from { left: -100%; }
                to { left: 200%; }
            }
            @keyframes auraPulse {
                0%, 100% { opacity: 0.8; transform: scale(1); }
                50% { opacity: 1; transform: scale(1.02); }
            }
            @keyframes auraSpikes {
                0%, 100% { filter: brightness(1); }
                50% { filter: brightness(1.3); }
            }
            @keyframes tendril {
                0% { transform: translateY(0) scale(1); opacity: 0.6; }
                100% { transform: translateY(-40px) scale(1.5); opacity: 0; }
            }
            @keyframes spark {
                0%, 100% { opacity: 0; transform: scale(0.5); }
                50% { opacity: 1; transform: scale(1.2); }
            }
            @keyframes spin-slow {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            .animate-fade-in-down { animation: fadeInDown 0.8s ease-out; }
            .animate-fade-in-up { animation: fadeInUp 0.8s ease-out; }
            .animate-shine { animation: shine 3s infinite linear; }
            .animate-aura-pulse { animation: auraPulse 3s infinite ease-in-out; }
            .animate-aura-spikes { animation: auraSpikes 0.2s infinite steps(2); }
            .animate-tendril { animation: tendril 3s infinite ease-out; }
            .animate-spark { animation: spark 0.5s infinite steps(3); }
            .animate-spin-slow { animation: spin-slow 12s linear infinite; }
        `;
        document.head.appendChild(styleSheet);
        return () => {
            document.head.removeChild(styleSheet);
        };
    }, []);

    const navigateTo = (view: 'home' | 'races' | 'universe' | 'chronicle') => {
        setCurrentView(view);
        window.scrollTo(0, 0);
    };

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

  return (
    <div className="relative min-h-screen text-arthagon-ink dark:text-gray-200 selection:bg-arthagon-accent selection:text-white overflow-hidden transition-colors duration-500">
      {/* Global Backgrounds */}
      <div className="fixed inset-0 bg-arthagon-paper dark:bg-[#030303] z-[-2] transition-colors duration-500"></div>
      
      {/* Dynamic Fog Layers (Dark Mode Only) */}
      <div className={`fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-30 transition-opacity duration-1000 ${theme === 'dark' ? 'opacity-30' : 'opacity-0'}`}>
        <div className="absolute top-0 left-[-50%] w-[200%] h-full bg-[url('https://raw.githubusercontent.com/danielkorp/fog-textures/master/fog1.png')] bg-cover animate-fog-flow opacity-50"></div>
        <div className="absolute top-0 left-[-50%] w-[200%] h-full bg-[url('https://raw.githubusercontent.com/danielkorp/fog-textures/master/fog2.png')] bg-cover animate-fog-flow opacity-30" style={{ animationDuration: '60s', animationDirection: 'reverse' }}></div>
      </div>
      
      {/* Light Mode Paper Texture Overlay */}
       <div className={`fixed inset-0 pointer-events-none z-[-1] transition-opacity duration-1000 ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}>
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] opacity-40 mix-blend-multiply"></div>
       </div>

      {/* Vignette & Gradients */}
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/5 to-arthagon-paper/20 dark:via-[#0a0a0a]/50 dark:to-black z-[-1] pointer-events-none transition-colors duration-500"></div>

      {/* Floating Embers/Dust Particles */}
      <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
         {[...Array(30)].map((_, i) => (
             <div 
                key={i}
                className={`absolute w-1 h-1 rounded-full blur-[1px] animate-particle-rise ${theme === 'dark' ? 'bg-arthagon-gold/40' : 'bg-arthagon-ink/20'}`}
                style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 20}s`,
                    animationDuration: `${15 + Math.random() * 25}s`,
                    opacity: 0, 
                    width: Math.random() > 0.8 ? '2px' : '1px',
                    height: Math.random() > 0.8 ? '2px' : '1px',
                }}
             ></div>
         ))}
      </div>

      <div className="fixed inset-0 bg-noise-texture z-[9999] pointer-events-none"></div>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[100] pointer-events-none bg-white/5 backdrop-blur-[1px]">
        <div 
            className="h-full bg-gradient-to-r from-arthagon-gold-dim via-arthagon-gold to-[#fff5d0] relative transition-all duration-75 ease-out shadow-[0_0_25px_rgba(197,160,89,0.8)]"
            style={{ width: `${scrollProgress * 100}%` }}
        >
            <div 
                className="absolute inset-0 opacity-60 mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`
                }}
            ></div>
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[100px] h-[4px] bg-gradient-to-l from-white via-arthagon-gold to-transparent blur-[2px]"></div>
        </div>
      </div>

      <Navbar 
        onNavigate={(view) => navigateTo(view as 'home' | 'races' | 'universe' | 'chronicle')} 
        currentTheme={theme}
        onToggleTheme={toggleTheme}
      />
      
      {currentView === 'home' ? (
        <>
            <Hero onNavigate={navigateTo} />
            <FeatureGrid />
            <MapSection />
            <LoreSection onNavigate={navigateTo} />
        </>
      ) : currentView === 'races' ? (
        <RacesSection onBack={() => navigateTo('home')} />
      ) : currentView === 'chronicle' ? (
        <ChronicleSection onBack={() => navigateTo('home')} />
      ) : (
        <UniverseSection onBack={() => navigateTo('home')} />
      )}

      <Footer onNavigate={(view) => navigateTo(view as 'home' | 'races' | 'universe')} />
    </div>
  );
};

export default App;
