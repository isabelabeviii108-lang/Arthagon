import React, { useState } from 'react';
import { Castle, Skull, Zap, Trees, Crown, Eye, Moon, Book, Map as MapIcon, Ghost, Flame, Shield, Star, Sun, Sword } from 'lucide-react';

interface RegionData {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  secrets: string[];
  capital: string;
  color: string;
  icon: React.ElementType;
  style: 'ruin' | 'tech' | 'desert' | 'holy' | 'nature' | 'martial' | 'cursed' | 'magic' | 'empire';
}

const REGIONS: RegionData[] = [
  {
    id: 'rebellion',
    name: 'Rebellion',
    subtitle: 'A Nação dos Renegados',
    description: 'Centenas de anos após a caída do Império Fremtid, os cidadãos abandonados nas regiões da Guerra decidiram se juntar para criar uma nova nação, comandanda pelos rebeldes que hoje buscam vingar seu povo ao obter as terras de Naerid. Suas terras são infestadas de bizarrices, onde permeia o pior da sociedade. Rebellion é dominada por um grupo de rebeldes mascarados.',
    secrets: [
      'Feitiços ilegais podem ser encontrados gravados em pedras antigas.',
      'Alguns magos de Rebellion vendem conhecimento proibido em mercados ocultos.'
    ],
    capital: 'Capital de Rebellion: um lugar totalmente abandonado pelo Antigo Império, por isso, ainda encontra-se em ruínas.',
    color: '#71717a',
    icon: Skull,
    style: 'ruin'
  },
  {
    id: 'naerid',
    name: 'Naerid',
    subtitle: 'A Cidade Tecnológica',
    description: 'Naerid é uma cidade recém construída, originada das lendas do Grande Herói Naer Fremtíd. Sua população é composta principalmente por inventores que desejam revolucionar o mundo ao integrar a magia na tecnologia. A família Oslo é a maior pioneira do país, têm predominância pelos seus marcos históricos e conquistas científicas.',
    secrets: [
      'Relíquias tecnomágicas antigas podem conter inteligência própria.',
      'Os eruditos de Naerid acreditam que o universo é um imenso código mágico a ser decifrado.'
    ],
    capital: 'Capital de Naerid (Oslo): Ela é comandada pelo Conselho Nacional do país.',
    color: '#06b6d4',
    icon: Zap,
    style: 'tech'
  },
  {
    id: 'sunukawa',
    name: 'Sunukawa',
    subtitle: 'A Grande Floresta',
    description: 'Esta floresta nasceu graças aos cinco espíritos ancestrais de Arthagon. Além disso, sua idade é desconhecida, apenas sabe-se que ela sobreviveu ao grande catástrofe há 823 anos atrás. Os cidadãos de Sunukawa são extremamente reativos contra forasteiros.',
    secrets: [
      'Algumas flores desabrocham apenas na presença de um espírito puro.',
      'Ventos sussurram nomes daqueles destinados a um grande destino.'
    ],
    capital: 'Aldeia da Raiz: Onde fica localizado a floresta maior árvore do mundo.',
    color: '#22c55e',
    icon: Trees,
    style: 'nature'
  },
  {
    id: 'kemet',
    name: 'Kemet',
    subtitle: 'O Grande Deserto',
    description: 'Kemet é uma grande fortaleza localizada no centro de um dos mais perigosos desertos do mundo. Como uma teocraria, é comandanda por um Faraó. No centro da cidade, um rio de energia dourada flui, supostamente formado pelo favor divino.',
    secrets: [
      'Tempestades de areia ocultam ruínas de deuses esquecidos.',
      'O ouro de Kemet é dito ser abençoado pelo próprio sol.'
    ],
    capital: 'Fortaleza de Kemet: Construída ao redor do Rio Temek.',
    color: '#eab308',
    icon: Sun, 
    style: 'desert'
  },
  {
    id: 'ephia',
    name: 'Ephia',
    subtitle: 'O Estado Sagrado',
    description: 'Originou-se depois de ter passado por uma guerra civil. Ephia é um lugar com características religiosas, onde todos acreditam na Deusa e a defendem veementemente. Os atuais comandantes do Estado são o Conselho Divino e o Arcebispo da Igreja.',
    secrets: [
      'Algumas cidades têm oráculos que preveem o futuro com precisão assustadora.',
      'Há festivais onde os deuses escolhem campeões mortais.'
    ],
    capital: 'Templo de Lumen: Sede principal da Igreja.',
    color: '#fef08a',
    icon: Star,
    style: 'holy'
  },
  {
    id: 'zhouji',
    name: 'Zhouji',
    subtitle: 'O Mundo Murim',
    description: 'Terras dividas em nove distritos diferentes e cada um dominado por uma grande seita marcial. Zhouji é o mundo das lutas e artes marciais. A família Kahn-Li é a que mais se destaca, possuindo o maior distrito.',
    secrets: [
      'Alguns lagos ocultos revelam o verdadeiro potencial daqueles que se banham neles.',
      'Quem dominar os segredos marciais poderá se tornar um imortal.'
    ],
    capital: 'Distrito Kahn-Li: O maior distrito do país.',
    color: '#ef4444',
    icon: Sword, 
    style: 'martial'
  },
  {
    id: 'nokron',
    name: 'Nokron',
    subtitle: 'As Terras Amaldiçoadas',
    description: 'Terras caídas sob escuridão e céus escuros iluminado por um sol negro. Os residentes permanecem nas ilhas ao redor de Nokron, por isso ninguém conhece sua origem e história real. Quase nada é confirmado de fato.',
    secrets: [
      'O próprio solo de Nokron parece pulsar, como se estivesse vivo.',
      'Olhar para o céu de Nokron por muito tempo pode levar à loucura.'
    ],
    capital: 'Desconhecida (Ilhas Externas).',
    color: '#a855f7',
    icon: Ghost,
    style: 'cursed'
  },
  {
    id: 'carmelon',
    name: 'Carmelon',
    subtitle: 'O Reino Mágico',
    description: 'Um reino fundado nas raízes da magia, com Zepelins, Torres Flutuantes e Wyverns. Tem a característica única de manter-se entre o céu e a terra, preferindo evitar conflitos externos, com exceção de Valknut, do qual possuem uma mortal inimizade.',
    secrets: [
      'Algumas torres de magos flutuam sobre as nuvens.',
      'Bibliotecas arcanas escondem segredos de magias há muito esquecidas.'
    ],
    capital: 'Cidadela Flutuante: O centro do conhecimento arcano.',
    color: '#3b82f6',
    icon: Book,
    style: 'magic'
  },
  {
    id: 'valknut',
    name: 'Valknut',
    subtitle: 'O Grande Império',
    description: 'O maior império do mundo. Tudo o que importa neste lugar é o quão forte um ser é, não importando seus meios, apenas o resultado. Por ter essa cultura dominadora, possui diversos aspectos de outras terras.',
    secrets: [
      'Fraqueza não é tolerada, e os fracos perdem tudo.',
      'Existe uma cerimônia sagrada onde guerreiros duelam em meio a ilusões de dragões.'
    ],
    capital: 'Capital de Valknut: Onde fica o rei junto ao seu grande império.',
    color: '#dc2626',
    icon: Crown,
    style: 'empire'
  }
];

export const MapSection: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<RegionData>(REGIONS[0]);

  return (
    <section id="map" className="py-24 bg-arthagon-paper dark:bg-[#050505] relative transition-colors duration-500 overflow-hidden border-t border-arthagon-ink/5 dark:border-white/5">
       {/* Background Texture - Kept as per request for 'texture' */}
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] opacity-10 mix-blend-multiply dark:mix-blend-overlay pointer-events-none"></div>

       <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
              <span className="text-arthagon-gold font-cinzel text-sm tracking-[0.4em] uppercase">Cartografia</span>
              <h2 className="text-4xl md:text-5xl font-cinzel text-metallic mt-2 font-bold drop-shadow-lg">Reinos de Arthagon</h2>
              <div className="flex justify-center items-center gap-4 mt-4 opacity-70">
                 <div className="h-px w-20 bg-gradient-to-l from-arthagon-gold/50 to-transparent"></div>
                 <MapIcon className="text-arthagon-gold w-4 h-4" />
                 <div className="h-px w-20 bg-gradient-to-r from-arthagon-gold/50 to-transparent"></div>
              </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              {/* List - Mobile Optimized with Horizontal Scroll */}
              <div className="flex flex-col justify-center">
                  <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-4 pb-4 lg:pb-0 snap-x snap-mandatory scrollbar-hide">
                    {REGIONS.map((region) => (
                        <button 
                            key={region.id}
                            onClick={() => setActiveRegion(region)}
                            className={`flex-shrink-0 w-[280px] lg:w-full text-left p-6 border transition-all duration-300 group relative overflow-hidden rounded-sm flex items-center gap-4 snap-center ${
                                activeRegion.id === region.id
                                ? 'bg-white dark:bg-white/5 border-arthagon-gold shadow-[0_0_15px_rgba(197,160,89,0.15)] scale-[1.02]'
                                : 'bg-transparent border-arthagon-ink/10 dark:border-white/10 hover:bg-white/50 dark:hover:bg-white/5 hover:border-arthagon-gold/30'
                            }`}
                        >
                            <div className={`p-3 rounded-full transition-colors duration-300 ${activeRegion.id === region.id ? 'bg-arthagon-gold/10 text-arthagon-gold' : 'bg-arthagon-paper dark:bg-black/50 text-gray-400 group-hover:text-arthagon-gold'}`}>
                                <region.icon size={24} />
                            </div>
                            <div>
                                <h3 className={`font-cinzel text-lg font-bold transition-colors ${activeRegion.id === region.id ? 'text-arthagon-gold' : 'text-arthagon-ink dark:text-gray-300 group-hover:text-arthagon-ink dark:group-hover:text-white'}`}>{region.name}</h3>
                                <p className="text-xs text-gray-500 font-body uppercase tracking-wider group-hover:text-gray-600 dark:group-hover:text-gray-400">{region.subtitle}</p>
                            </div>
                            
                            {/* Active Indicator */}
                            {activeRegion.id === region.id && (
                                <div className="absolute right-0 top-0 bottom-0 w-1 bg-arthagon-gold shadow-[0_0_10px_#c5a059]"></div>
                            )}
                        </button>
                    ))}
                  </div>
                  {/* Mobile Scroll Hint */}
                  <div className="lg:hidden text-center mt-2 text-xs text-gray-500 animate-pulse">
                      Deslize para ver mais reinos &rarr;
                  </div>
              </div>

              {/* Detail Card - Image removed, replaced by Dynamic Gradient */}
              <div className="relative min-h-[500px] bg-white dark:bg-black/40 border border-arthagon-ink/10 dark:border-white/10 rounded-sm overflow-hidden shadow-2xl backdrop-blur-sm group transition-all duration-500"
                   style={{
                       boxShadow: `0 0 40px ${activeRegion.color}20`
                   }}
              >
                  {/* Dynamic Gradient Background based on Region Color */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                        {/* Main atmospheric gradient */}
                        <div 
                            className="absolute inset-0 transition-colors duration-700"
                            style={{
                                background: `radial-gradient(circle at top right, ${activeRegion.color}40, transparent 80%), radial-gradient(circle at bottom left, ${activeRegion.color}20, transparent 60%)`,
                                opacity: 0.6
                            }}
                        ></div>
                        
                        {/* Deep background */}
                        <div className="absolute inset-0 bg-arthagon-paper/90 dark:bg-[#080808]/90 mix-blend-multiply dark:mix-blend-normal"></div>
                        
                        {/* Texture */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] opacity-20 mix-blend-multiply dark:mix-blend-overlay"></div>
                  </div>
                  
                  <div className="relative z-10 p-8 md:p-12 h-full flex flex-col">
                        <div className="flex items-center gap-4 mb-6">
                            <div>
                                <h3 className="text-3xl md:text-5xl font-cinzel text-metallic font-bold drop-shadow-md">{activeRegion.name}</h3>
                                <p className="text-arthagon-gold/80 font-cinzel text-sm uppercase tracking-[0.3em] mt-1" style={{color: activeRegion.color}}>{activeRegion.subtitle}</p>
                                <div className="h-0.5 w-32 mt-4 shadow-[0_0_5px]" style={{backgroundColor: activeRegion.color}}></div>
                            </div>
                        </div>
                        
                        <p className="text-arthagon-ink/80 dark:text-gray-300 font-body leading-relaxed text-lg mb-8 text-justify drop-shadow-sm">
                            {activeRegion.description}
                        </p>

                        <div className="space-y-6 mt-auto">
                             <div className="bg-white/50 dark:bg-black/40 border border-arthagon-gold/20 p-5 rounded-sm backdrop-blur-md hover:border-arthagon-gold/40 transition-colors">
                                <h4 className="text-xs font-cinzel text-arthagon-gold uppercase tracking-wider mb-2 flex items-center gap-2">
                                    <Crown size={14} /> Capital
                                </h4>
                                <p className="text-sm text-arthagon-ink dark:text-gray-300 font-semibold">{activeRegion.capital}</p>
                             </div>

                             <div className="bg-white/50 dark:bg-black/40 border border-arthagon-gold/20 p-5 rounded-sm backdrop-blur-md hover:border-arthagon-gold/40 transition-colors">
                                <h4 className="text-xs font-cinzel text-arthagon-gold uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <Eye size={14} /> Segredos
                                </h4>
                                <ul className="space-y-2">
                                    {activeRegion.secrets.map((secret, idx) => (
                                        <li key={idx} className="text-sm text-arthagon-ink/80 dark:text-gray-400 flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-arthagon-gold mt-1.5 rotate-45 flex-shrink-0" style={{backgroundColor: activeRegion.color}}></span>
                                            {secret}
                                        </li>
                                    ))}
                                </ul>
                             </div>
                        </div>
                  </div>
              </div>
          </div>
       </div>
    </section>
  );
};