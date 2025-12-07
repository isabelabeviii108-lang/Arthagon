
import React from 'react';
import { Github, Twitter, Youtube } from 'lucide-react';

interface FooterProps {
    onNavigate?: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-arthagon-ink dark:bg-black py-12 border-t border-white/5 transition-colors duration-500">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
            <h4 
                className="font-cinzel text-2xl text-arthagon-gold mb-2 cursor-pointer hover:text-white transition-colors"
                onClick={() => onNavigate?.('home')}
            >
                ARTHAGON
            </h4>
            <p className="text-gray-400 dark:text-gray-600 text-xs font-body max-w-xs text-center md:text-left">
                © 2024 Universo Arthagon. Todos os direitos reservados. O destino é forjado por aqueles que ousam.
            </p>
        </div>
        
        <div className="flex gap-8 text-xs font-cinzel text-gray-400 dark:text-gray-500">
            <button onClick={() => onNavigate?.('home')} className="hover:text-arthagon-gold transition-colors">Início</button>
            <button onClick={() => onNavigate?.('races')} className="hover:text-arthagon-gold transition-colors">Raças</button>
        </div>
        
        <div className="flex gap-6">
            <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-arthagon-gold transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-arthagon-gold transition-colors"><Youtube size={20} /></a>
            <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-arthagon-gold transition-colors"><Github size={20} /></a>
        </div>
      </div>
    </footer>
  );
};
