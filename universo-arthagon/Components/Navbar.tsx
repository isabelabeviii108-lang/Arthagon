
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
    onNavigate?: (view: string) => void;
    currentTheme: 'light' | 'dark';
    onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentTheme, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: string) => {
      if (item === 'Raças') {
          onNavigate?.('races');
      } else if (item === 'Universo') {
          onNavigate?.('universe');
      } else {
          onNavigate?.('home');
          // Basic scroll logic for single page sections (if on home)
          if (item === 'Início') window.scrollTo(0,0);
          if (item === 'Mapa') document.getElementById('map')?.scrollIntoView();
      }
      setIsOpen(false);
  };

  const navBgClass = isScrolled 
    ? 'bg-arthagon-paper/95 dark:bg-[#050505]/95 backdrop-blur-sm py-3 border-b border-arthagon-gold/20 shadow-[0_10px_30px_rgba(0,0,0,0.1)]' 
    : 'bg-transparent py-8';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${navBgClass}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
            className="font-cinzel font-black text-2xl tracking-[0.2em] group cursor-pointer"
            onClick={() => handleNavClick('Início')}
        >
            <span className="text-arthagon-gold group-hover:text-arthagon-ink dark:group-hover:text-white transition-colors">AR</span>
            <span className="text-arthagon-ink dark:text-[#d4d4d4]">THAGON</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
            {['Início', 'Raças', 'Mapa', 'Universo', 'Comunidade'].map((item) => (
                <button 
                    key={item} 
                    onClick={() => handleNavClick(item)}
                    className="text-xs font-cinzel text-arthagon-ink/70 dark:text-gray-400 hover:text-arthagon-gold dark:hover:text-arthagon-gold uppercase tracking-[0.2em] transition-colors relative group py-2"
                >
                    {item}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-arthagon-gold/50 transition-all duration-300 group-hover:w-full box-shadow-[0_0_10px_#c5a059]"></span>
                </button>
            ))}
            
            {/* Theme Toggle */}
            <button 
                onClick={onToggleTheme}
                className="p-2 text-arthagon-ink/70 dark:text-gray-400 hover:text-arthagon-gold dark:hover:text-arthagon-gold transition-colors"
                title={currentTheme === 'dark' ? "Modo Claro" : "Modo Escuro"}
            >
                {currentTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
            <button 
                onClick={onToggleTheme}
                className="text-arthagon-ink/70 dark:text-gray-400"
            >
                {currentTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="text-arthagon-gold" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X /> : <Menu />}
            </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
             <div className="absolute top-full left-0 w-full bg-arthagon-paper dark:bg-[#080808] border-b border-arthagon-gold/20 flex flex-col p-8 gap-6 md:hidden animate-fade-in shadow-2xl transition-colors duration-300">
                {['Início', 'Raças', 'Mapa', 'Universo', 'Comunidade'].map((item) => (
                    <button key={item} onClick={() => handleNavClick(item)} className="text-left text-arthagon-ink dark:text-gray-300 font-cinzel text-xl hover:text-arthagon-gold tracking-widest">{item}</button>
                ))}
             </div>
        )}
      </div>
    </nav>
  );
};
