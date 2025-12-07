
import React, { useEffect, useState } from 'react';
import { ArrowLeft, BookOpen, Sparkles, AlertTriangle, Globe, Sword, Star } from 'lucide-react';
import { Button } from './Button';

interface ChronicleSectionProps {
  onBack: () => void;
}

export const ChronicleSection: React.FC<ChronicleSectionProps> = ({ onBack }) => {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setReadingProgress(totalScroll / windowHeight);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 relative font-body selection:bg-arthagon-gold selection:text-black pt-20">
      
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-white/5">
        <div 
            className="h-full bg-arthagon-gold shadow-[0_0_10px_#c5a059]"
            style={{ width: `${readingProgress * 100}%` }}
        ></div>
      </div>

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-arthagon-gold/5 rounded-full blur-[150px] animate-pulse-slow"></div>
          <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-red-900/5 rounded-full blur-[150px] animate-pulse-slow" style={{animationDelay: '3s'}}></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-32 relative z-10 max-w-4xl pb-32">
        
        {/* Header / Nav */}
        <div className="mb-16 pt-8 flex justify-between items-center animate-fade-in-down">
            <Button variant="outline" size="sm" onClick={onBack} className="gap-2">
                <ArrowLeft size={16} /> Voltar
            </Button>
            <span className="text-xs font-cinzel text-arthagon-gold/50 uppercase tracking-[0.3em] hidden md:block">
                Arquivo Histórico #001
            </span>
        </div>

        {/* Title Block */}
        <header className="text-center mb-24 relative animate-fade-in-up">
            <div className="inline-block mb-4 p-3 rounded-full border border-arthagon-gold/30 bg-arthagon-gold/5">
                <BookOpen className="w-8 h-8 text-arthagon-gold" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-cinzel font-black text-metallic mb-6 drop-shadow-2xl tracking-wide leading-tight">
                Ecos da Eternidade
            </h1>
            <p className="text-arthagon-silver/60 font-cinzel text-sm md:text-base uppercase tracking-[0.4em] mb-12">
                A Queda de Arthagon e o Despertar da Terra
            </p>
            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-arthagon-gold to-transparent"></div>
        </header>

        {/* Content Article */}
        <article className="space-y-24">
            
            {/* Act 0: Intro */}
            <section className="group">
                <h2 className="text-2xl font-cinzel text-arthagon-gold mb-8 flex items-center gap-4">
                    <span className="h-px flex-1 bg-arthagon-gold/20"></span>
                    O Mito Esquecido
                    <span className="h-px flex-1 bg-arthagon-gold/20"></span>
                </h2>
                <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-justify leading-relaxed text-gray-400">
                    <p>
                        <span className="float-left text-6xl font-cinzel text-arthagon-gold mr-4 mt-[-10px] drop-shadow-md">V</span>
                        ocê acredita em deuses? A resposta pouco importa para a realidade que nos cerca. Esta é uma história antiga, sussurrada através das eras, conhecida por todos os habitantes deste reino como uma lenda fundadora — e nas condições atuais, ela nunca pareceu tão real.
                    </p>
                </div>
            </section>

            {/* Act 1 */}
            <section className="relative pl-0 md:pl-8 border-l-2 border-arthagon-gold/10 hover:border-arthagon-gold/50 transition-colors duration-500">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#050505] border-2 border-arthagon-gold/50 group-hover:border-arthagon-gold transition-colors"></div>
                
                <div className="mb-6 flex items-center gap-3 text-arthagon-accent">
                     <AlertTriangle size={20} />
                     <span className="font-cinzel text-sm tracking-widest uppercase">A Traição</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-cinzel text-white mb-6">A Traição em Arthagon</h3>
                
                <div className="prose prose-invert prose-lg text-justify leading-relaxed text-gray-300 space-y-6">
                    <p>
                        Milhões de anos atrás, muito antes da nossa história começar, existiam as terras sagradas de Arthagon, o berço dos deuses no centro do universo. Mas o poder absoluto gerou a inveja absoluta. <strong className="text-red-400">Luciferius</strong>, o Deus da Destruição, voltou-se contra seu irmão gêmeo, <strong className="text-arthagon-gold">Adonai</strong>, o Deus da Criação.
                    </p>
                    <p>
                        Buscando o domínio da existência, Luciferius aliou-se ao Vazio — uma força voraz e corruptora. A guerra que se seguiu dividiu o panteão divino. Os humanos daquela era, ancestrais distantes, receberam poderes inimagináveis para lutar, mas o preço foi alto: aqueles que encararam a verdadeira face do Vazio perderam a sanidade, acelerando a extinção de sua própria raça.
                    </p>
                </div>
            </section>

            {/* Act 2 */}
            <section className="relative pl-0 md:pl-8 border-l-2 border-arthagon-gold/10 hover:border-arthagon-gold/50 transition-colors duration-500">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#050505] border-2 border-arthagon-gold/50"></div>
                
                <div className="mb-6 flex items-center gap-3 text-arthagon-gold">
                     <Sparkles size={20} />
                     <span className="font-cinzel text-sm tracking-widest uppercase">O Sacrifício</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-cinzel text-white mb-6">O Sacrifício do Criador</h3>

                <div className="prose prose-invert prose-lg text-justify leading-relaxed text-gray-300 space-y-6">
                    <p>
                        Arthagon tornou-se um cemitério de estrelas. Quando a realidade começou a se desfazer sob o avanço de Luciferius, Adonai tomou a decisão final. Em um combate que estremeceu os pilares da existência, ele matou seu irmão, mas esgotou sua própria vida no processo.
                    </p>
                    <div className="my-8 p-6 bg-arthagon-gold/5 border-l-4 border-arthagon-gold italic text-arthagon-gold/90 font-medieval text-xl">
                        "Adonai não apenas morreu; ele se desfez em luz e tristeza. Suas lágrimas transformaram-se em uma energia avassaladora que varreu o universo."
                    </div>
                    <p>
                        Essas lágrimas apagaram a corrupção e deram origem a um novo cosmos e aos Novos Deuses que hoje conhecemos, semeando a vida mais uma vez sobre as cinzas do divino.
                    </p>
                </div>
            </section>

            {/* Act 3 */}
            <section className="relative pl-0 md:pl-8 border-l-2 border-arthagon-gold/10 hover:border-arthagon-gold/50 transition-colors duration-500">
                 <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#050505] border-2 border-arthagon-gold/50"></div>
                 
                 <div className="mb-6 flex items-center gap-3 text-blue-400">
                     <Globe size={20} />
                     <span className="font-cinzel text-sm tracking-widest uppercase">O Renascimento</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-cinzel text-white mb-6">O Ciclo da Terra</h3>

                <div className="prose prose-invert prose-lg text-justify leading-relaxed text-gray-300 space-y-6">
                    <p>
                        Nosso mundo não escapou desse ciclo de destruição e renascimento. Há exatos <span className="text-white font-bold">823 anos</span>, um cometa rasgou os céus, trazendo consigo um cataclismo que mudou a geografia da Terra. O impacto despertou horrores antigos e monstruosos, empurrando a humanidade para a beira do abismo.
                    </p>
                    <p>
                        Foi então que os Novos Deuses intervieram. Eles concederam armas divinas e feitiçarias aos bravos que ousaram lutar. Homens e divindades, lado a lado, conseguiram selar as bestas nas regiões inóspitas.
                    </p>
                    <p className="text-arthagon-silver">
                        Hoje, vivemos em uma nova era, coexistindo com o mágico e o desconhecido, mas as ruínas do passado ainda guardam segredos que podem explicar quem realmente somos.
                    </p>
                </div>
            </section>

        </article>

        {/* Footer */}
        <div className="mt-32 text-center opacity-60">
            <div className="divider-ornamental mb-8">
                <div className="divider-diamond"></div>
            </div>
            <p className="font-cinzel text-sm tracking-[0.5em] text-arthagon-gold">O FIM É APENAS O COMEÇO</p>
        </div>

      </div>
    </div>
  );
};
