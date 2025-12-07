
import React, { useEffect, useState, useRef } from 'react';
import { ArrowLeft, Star, Flame, Sun } from 'lucide-react';
import { Button } from './Button';

interface UniverseSectionProps {
  onBack: () => void;
}

export const UniverseSection: React.FC<UniverseSectionProps> = ({ onBack }) => {
  const [activeChapter, setActiveChapter] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Determine active chapter based on scroll position
      // Simple logic: every 1.5vh is a transition point
      const docHeight = document.documentElement.scrollHeight;
      const progress = scrollY / (docHeight - windowHeight);
      
      if (progress < 0.3) setActiveChapter(0);
      else if (progress < 0.7) setActiveChapter(1);
      else setActiveChapter(2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getBgClass = () => {
    switch (activeChapter) {
      case 0: return 'bg-[#020205]'; // Cosmic Dark
      case 1: return 'bg-[#1a0505]'; // Cataclysm Red
      case 2: return 'bg-[#0f0f15]'; // Rebirth/Normal Dark
      default: return 'bg-black';
    }
  };

  const getAtmosphere = () => {
    switch (activeChapter) {
        case 0: // Cosmic
            return (
                <div className="absolute inset-0 pointer-events-none overflow-hidden transition-opacity duration-1000 opacity-100">
                     <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/30 via-[#020205] to-black"></div>
                     {[...Array(50)].map((_, i) => (
                        <div key={i} className="absolute bg-white rounded-full animate-pulse-slow" 
                             style={{
                                 top: Math.random() * 100 + '%', 
                                 left: Math.random() * 100 + '%',
                                 width: Math.random() * 2 + 'px',
                                 height: Math.random() * 2 + 'px',
                                 animationDelay: Math.random() * 5 + 's',
                                 opacity: Math.random() * 0.7
                             }} 
                        />
                     ))}
                </div>
            );
        case 1: // Cataclysm
            return (
                <div className="absolute inset-0 pointer-events-none overflow-hidden transition-opacity duration-1000 opacity-100">
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-red-900/20 via-[#1a0505] to-black animate-pulse-slow"></div>
                     {/* Ash Particles */}
                     {[...Array(20)].map((_, i) => (
                        <div key={i} className="absolute bg-red-500/50 rounded-full blur-[1px] animate-particle-rise" 
                             style={{
                                 left: Math.random() * 100 + '%',
                                 width: Math.random() * 4 + 'px',
                                 height: Math.random() * 4 + 'px',
                                 animationDuration: (2 + Math.random() * 5) + 's'
                             }} 
                        />
                     ))}
                </div>
            );
        case 2: // Rebirth
            return (
                <div className="absolute inset-0 pointer-events-none overflow-hidden transition-opacity duration-1000 opacity-100">
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-arthagon-gold/10 via-[#0f0f15] to-black"></div>
                     <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-arthagon-gold/5 blur-[100px] rounded-full"></div>
                </div>
            );
    }
  };

  return (
    <div ref={containerRef} className={`min-h-screen ${getBgClass()} transition-colors duration-1000 relative text-gray-200 font-body overflow-x-hidden`}>
      
      {/* Fixed Background Atmosphere */}
      <div className="fixed inset-0 z-0">
          {getAtmosphere()}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-24 text-center">
            <Button variant="outline" size="sm" onClick={onBack} className="self-start absolute top-24 left-6 md:left-12 lg:left-24">
                <ArrowLeft size={16} className="mr-2" /> Voltar
            </Button>
            
            <h1 className="text-4xl md:text-7xl font-cinzel font-black text-metallic tracking-widest mt-12 mb-4 drop-shadow-[0_0_20px_rgba(197,160,89,0.3)]">
                O CREPÚSCULO DOS DEUSES
            </h1>
            <p className="text-arthagon-gold/60 font-cinzel text-sm uppercase tracking-[0.4em]">
                A Lenda da Criação e Destruição
            </p>
        </div>

        {/* Chapter 1 */}
        <div className="min-h-screen flex flex-col justify-center max-w-4xl mx-auto mb-24 relative">
             <div className="absolute -left-10 md:-left-20 top-0 text-[10rem] font-cinzel font-black text-white/5 select-none -z-10">I</div>
             <div className="border-l-2 border-arthagon-gold/30 pl-8 md:pl-16 py-10 relative">
                 <div className="absolute top-0 left-[-9px] w-4 h-4 bg-[#020205] border-2 border-arthagon-gold rotate-45"></div>
                 
                 <div className="flex items-center gap-4 mb-8">
                     <Star className="text-blue-400 w-8 h-8 animate-pulse" />
                     <h2 className="text-3xl md:text-5xl font-cinzel text-white">O Universo</h2>
                 </div>

                 <div className="space-y-8 text-lg md:text-xl leading-relaxed text-gray-300">
                    <p>
                        <span className="text-4xl float-left mr-2 font-cinzel text-arthagon-gold">V</span>ocê acredita em deuses? Não importa sua resposta, porque essa história existe independentemente da crença de cada um.
                    </p>
                    <p>
                        Milhões de anos atrás, existia um reino divino chamado Arthagon, lar dos deuses. No entanto, nem mesmo seres tão poderosos estavam livres de conflitos. A disputa por poder sempre esteve presente, e foi isso que levou <span className="text-red-400 font-bold">Luciferius</span>, o Deus da Destruição, a trair seu próprio irmão gêmeo, <span className="text-yellow-400 font-bold">Adonai</span>, o Deus da Criação. Reunindo um exército de sombras, ele declarou guerra para tomar o controle absoluto da existência.
                    </p>
                    <p>
                        A guerra se espalhou por todo Arthagon. O céu se rasgou em chamas, e a terra se partiu sob a força dos golpes dos dois deuses. Luciferius liderava criaturas nascidas do Vazio, enquanto Adonai contava com exércitos feitos de luz. Cada embate moldava estrelas e consumia galáxias.
                    </p>
                    <p className="italic border-l-4 border-blue-500/30 pl-4 text-blue-100/80">
                        "Em um ato desesperado, Adonai usou sua própria essência para banir Luciferius... O sacrifício foi definitivo: a destruição de Luciferius desmantelou o antigo universo, e a essência de Adonai deu origem a um novo cosmos."
                    </p>
                 </div>
             </div>
        </div>

        {/* Chapter 2 */}
        <div className="min-h-screen flex flex-col justify-center max-w-4xl mx-auto mb-24 relative">
             <div className="absolute -right-10 md:-right-20 top-20 text-[10rem] font-cinzel font-black text-red-900/10 select-none -z-10">II</div>
             <div className="border-r-2 border-red-500/30 pr-8 md:pr-16 py-10 relative text-right">
                 <div className="absolute top-0 right-[-9px] w-4 h-4 bg-[#1a0505] border-2 border-red-500 rotate-45"></div>

                 <div className="flex items-center gap-4 mb-8 justify-end">
                     <h2 className="text-3xl md:text-5xl font-cinzel text-red-100">A Terra</h2>
                     <Flame className="text-red-500 w-8 h-8 animate-bounce" />
                 </div>

                 <div className="space-y-8 text-lg md:text-xl leading-relaxed text-gray-300">
                    <p>
                        Nosso planeta também passou por momentos de destruição e renascimento. Há <span className="text-red-400 font-bold">823 anos</span>, um cometa cruzou os céus, desencadeando um cataclismo sem precedentes. Tempestades violentas, relâmpagos incessantes, erupções vulcânicas e terremotos mudaram para sempre a geografia da Terra.
                    </p>
                    <p>
                        Mas essa não foi a pior consequência. Com o impacto, criaturas monstruosas despertaram, vindas das profundezas do mundo. Elas eram ferozes e implacáveis, destruindo cidades e levando a humanidade à beira da extinção. A guerra começou.
                    </p>
                    <p className="italic text-red-200/80">
                        "Sob um céu tingido de vermelho, humanos e deuses lutaram lado a lado. O sangue de ambos manchou a terra, mas, no fim, a vitória foi alcançada."
                    </p>
                 </div>
             </div>
        </div>

        {/* Epilogue */}
        <div className="min-h-[50vh] flex flex-col justify-center max-w-3xl mx-auto text-center relative pb-32">
             <div className="flex justify-center mb-8">
                <Sun className="w-12 h-12 text-arthagon-gold animate-spin-slow" />
             </div>
             
             <h2 className="text-2xl md:text-4xl font-cinzel text-arthagon-gold mb-8">O Renascimento</h2>
             
             <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-cinzel">
                 Agora, séculos depois, a humanidade se reergueu. Criaturas mágicas e seres humanos aprenderam a coexistir, reconstruindo suas civilizações. No entanto, mistérios ainda pairam sobre o mundo. O que realmente causou o cataclismo? O que o cometa trouxe consigo?
             </p>
             
             <div className="mt-16">
                 <p className="text-sm uppercase tracking-[0.3em] text-arthagon-gold/50">As respostas aguardam...</p>
                 <div className="h-16 w-px bg-gradient-to-b from-arthagon-gold to-transparent mx-auto mt-4"></div>
             </div>
        </div>

      </div>
    </div>
  );
};
