import React, { useState } from 'react';
import { User, Feather, Flame, Droplet, Moon, Ghost, Sparkles, Wind, PawPrint, Trees, ArrowLeft } from 'lucide-react';
import { Button } from './Button';

interface Race {
  id: string;
  name: string;
  title: string;
  description: string;
  abilities: string[];
  stats: {
    forca: number;
    destreza: number;
    mente: number;
    vitalidade: number;
  };
  bonus: string;
  auraColor: string;
  auraStyle: 'eclipse' | 'mana' | 'nen' | 'frost' | 'nature' | 'spirit';
  icon: React.ElementType;
}

const RACES: Race[] = [
  {
    id: 'humano',
    name: "Humanos",
    title: "A Alma Resiliente",
    description: "Os humanos são a raça mais numerosa da terra, conhecidos por sua adaptabilidade e determinação. Ocupam posições importantes na maioria dos reinos e conseguem prosperar nos ambientes mais extremos, desde desertos gélidos até as encostas de vulcões ativos. Apesar de sua força de vontade, os humanos são suscetíveis a fraquezas como ganância e ambição desmedida. No entanto, possuem uma alma resiliente, o que lhes dá resistência contra corrupções e maldições forçadas. Com uma capacidade impressionante de aprendizado, os humanos dominam armas, armaduras e magias em um ritmo superior ao das outras raças.",
    abilities: ["Aprendizado Rápido (Mestria em Armas/Magia)", "Resistência a Corrupção", "Versatilidade"],
    stats: { forca: 50, destreza: 50, mente: 50, vitalidade: 50 },
    bonus: "Nenhum status bônus.",
    auraColor: '#c5a059', 
    auraStyle: 'nen',
    icon: User
  },
  {
    id: 'elfo',
    name: "Elfos",
    title: "Guardiões da Natureza",
    description: "Os elfos são uma raça profundamente conectada à natureza, vivendo em harmonia com o ambiente ao seu redor. Comumente encontrados em pequenas vilas ou cabanas habilmente camufladas entre as árvores, eles se integram às florestas de forma quase mágica. São mestres na criação de feitiços que se harmonizam com os elementos. Os elfos são conhecidos por sua longevidade extraordinária, vivendo centenas de anos.",
    abilities: ["Facilidade com Magia (Passivo)", "Imersão Silenciosa (1 Mana)", "Camuflagem Natural", "Vitalidade Superior"],
    stats: { forca: 30, destreza: 80, mente: 90, vitalidade: 60 },
    bonus: "+1 em Mente e Destreza",
    auraColor: '#10b981', 
    auraStyle: 'mana',
    icon: Feather
  },
  {
    id: 'fada',
    name: "Fadas",
    title: "Brilho da Natureza",
    description: "As fadas são seres extraordinários da natureza, conhecidas por sua beleza e brilho incomparáveis. Capazes de invocar suas asas mágicas à vontade. Apesar de sua raridade, as fadas estão por toda parte, discretamente observando. Jamais revelam seu verdadeiro nome a desconhecidos. Elas são conhecidas por seu tamanho diminuto, geralmente medindo menos de 1 metro.",
    abilities: ["Controle das Asas", "Comunicação com a Natureza", "Sopro Sonífero (3 Mana)", "Cura Regenerativa (2-3 Mana)"],
    stats: { forca: 20, destreza: 80, mente: 100, vitalidade: 40 },
    bonus: "+2 em Mente",
    auraColor: '#d8b4fe', 
    auraStyle: 'spirit',
    icon: Wind
  },
  {
    id: 'espectro',
    name: "Espectros",
    title: "Ecos do Passado",
    description: "Espectros são almas que retornam ao mundo dos vivos devido a conflitos não resolvidos. Habitam ruínas e florestas sombrias. Como criaturas entre a vida e a morte, enfrentam uma existência de dualidade. Sua imortalidade é ilusória, pois magias de selamento podem destruí-los. Um espectro motivado por emoções intensas pode durar milênios.",
    abilities: ["Possessão (3 Mana)", "Intangibilidade (1 Mana)", "Voo", "Invisibilidade", "Resistência Elevada"],
    stats: { forca: 40, destreza: 60, mente: 90, vitalidade: 80 },
    bonus: "+1 em Mente e Vitalidade",
    auraColor: '#2dd4bf', 
    auraStyle: 'spirit',
    icon: Ghost
  },
  {
    id: 'kitsune',
    name: "Kitsunes",
    title: "Demônios da Floresta",
    description: "Conhecidas como demônios das florestas, as Kitsunes são seres raros e misteriosos. Elas ajudam almas perdidas a encontrarem paz. Sua força espiritual é simbolizada pelas caudas; a cada cem anos, desenvolvem uma nova, até o máximo de nove. São praticamente imortais em relação à velhice.",
    abilities: ["Manipulação de Chamas (2 Mana)", "Sedução (4 Mana)", "Alucinações (2 Mana)", "Transformação em Raposa"],
    stats: { forca: 40, destreza: 85, mente: 95, vitalidade: 50 },
    bonus: "+1 em Mente e Destreza",
    auraColor: '#f59e0b', 
    auraStyle: 'nen',
    icon: Sparkles
  },
  {
    id: 'dracos',
    name: "Dracos",
    title: "Herdeiros dos Dragões",
    description: "Ferozes e poderosos, habitam regiões escaldantes. De aparência humanoide, possuem garras, escamas e chifres. Virtualmente imortais ao envelhecimento, sua força cresce com o tempo. Podem permanecer em sono profundo por séculos, mas despertam instantaneamente diante de ameaças.",
    abilities: ["Transformação em Dragão", "Bafo de Fogo (2 Mana)", "Força e Defesa Colossais"],
    stats: { forca: 100, destreza: 40, mente: 40, vitalidade: 90 },
    bonus: "+1 em Vitalidade e Força",
    auraColor: '#b91c1c', 
    auraStyle: 'eclipse',
    icon: Flame
  },
  {
    id: 'demi',
    name: "Demi-humanos",
    title: "Instinto Bestial",
    description: "Combinam forma humana com traços animais. Cada indivíduo herda atributos de uma criatura específica. Socialmente amigáveis, mas sofrem preconceito humano. Sua expectativa de vida depende da linhagem animal (roedores vivem pouco, tartarugas vivem séculos). Valorizam a força e a astúcia.",
    abilities: ["Transformação Completa", "Atributos Animais Específicos", "Resistências Naturais", "Instintos Animais"],
    stats: { forca: 70, destreza: 70, mente: 50, vitalidade: 70 },
    bonus: "+2 em qualquer status (escolha do jogador)",
    auraColor: '#a16207', 
    auraStyle: 'nature',
    icon: PawPrint
  },
  {
    id: 'vampiro',
    name: "Vampiros",
    title: "Senhores de Sangue",
    description: "Seres temidos com sede incontrolável por sangue. Ágeis, astutos e imortais enquanto se alimentam. A luz do sol causa desconforto intenso. Transformam vítimas em mortos-vivos submissos. Organizam-se em clãs ou vivem isolados nas sombras.",
    abilities: ["Mortalidade Condicional", "Telecinese Limitada (1 Mana)", "Velocidade Sobrenatural", "Maldição Vampírica", "Forma de Morcego"],
    stats: { forca: 60, destreza: 90, mente: 70, vitalidade: 85 },
    bonus: "+1 em Destreza e Vitalidade",
    auraColor: '#7f1d1d', 
    auraStyle: 'eclipse',
    icon: Droplet
  },
  {
    id: 'glaciata',
    name: "Glaciatas",
    title: "Filhos do Inverno",
    description: "Marcados pelo frio primordial, habitam cavernas cristalinas. Sua ligação com o gelo molda suas habilidades. De aparência frágil, são calculistas e possuem resistência extrema ao frio. Vivem longos anos e preservam aparência juvenil.",
    abilities: ["Afinidade Gélida (2 Mana)", "Bênção Lunar (1 Mana)", "Pele Invernal", "Corpo Frágil (Fraqueza)"],
    stats: { forca: 30, destreza: 60, mente: 100, vitalidade: 40 },
    bonus: "+2 em Mente",
    auraColor: '#a5f3fc', 
    auraStyle: 'frost',
    icon: Moon
  },
  {
    id: 'driade',
    name: "Dríades",
    title: "Espíritos da Floresta",
    description: "Espíritos vivos nascidos da essência da natureza. Seu corpo é uma fusão de matéria viva e energia. Ligadas a uma Árvore Ancestral até a maturidade. Pacificas, mas usam a floresta para se defender. Vulneráveis em locais sem vegetação.",
    abilities: ["Ligações Raizais (Recupera Mana)", "Invocação de Vinhas (1 Mana)", "Armadura de Espinhos (1 Mana)", "Chamado da Árvore Ancestral (5 Mana)"],
    stats: { forca: 40, destreza: 50, mente: 100, vitalidade: 60 },
    bonus: "+2 em Mente",
    auraColor: '#4ade80', 
    auraStyle: 'nature',
    icon: Trees
  }
];

interface RacesSectionProps {
  onBack?: () => void;
}

export const RacesSection: React.FC<RacesSectionProps> = ({ onBack }) => {
  const [selectedId, setSelectedId] = useState<string>(RACES[0].id);
  const selectedRace = RACES.find(r => r.id === selectedId) || RACES[0];

  const getAuraClass = (style: string) => {
    switch(style) {
      case 'eclipse': return 'shadow-[0_0_80px_rgba(185,28,28,0.4)] border-red-900/50';
      case 'mana': return 'animate-float shadow-[0_0_80px_rgba(16,185,129,0.3)] border-emerald-500/30';
      case 'nen': return 'shadow-[0_0_80px_rgba(245,158,11,0.3)] border-amber-500/30';
      case 'frost': return 'animate-float shadow-[0_0_80px_rgba(165,243,252,0.4)] border-cyan-300/30';
      case 'nature': return 'shadow-[0_0_80px_rgba(74,222,128,0.3)] border-green-500/30';
      case 'spirit': return 'animate-float shadow-[0_0_80px_rgba(216,180,254,0.3)] border-purple-400/30';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen bg-arthagon-paper dark:bg-[#050505] relative overflow-hidden pt-28 pb-12 transition-colors duration-500">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10 dark:opacity-10 mix-blend-multiply dark:mix-blend-screen"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Navigation / Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            {onBack && (
                <Button variant="outline" size="sm" onClick={onBack} className="mb-6 md:mb-0 flex items-center gap-2">
                    <ArrowLeft size={16} /> Voltar ao Início
                </Button>
            )}
            <div className="text-center flex-1">
                <h2 className="text-4xl md:text-6xl font-cinzel text-metallic tracking-widest font-black drop-shadow-2xl">
                    RAÇAS DE ARTHAGON
                </h2>
                <div className="flex items-center justify-center gap-4 mt-2">
                    <div className="h-px w-10 bg-arthagon-gold/30"></div>
                    <p className="text-arthagon-ink/70 dark:text-arthagon-gold/70 font-cinzel text-sm uppercase tracking-[0.4em]">Escolha sua Linhagem</p>
                    <div className="h-px w-10 bg-arthagon-gold/30"></div>
                </div>
            </div>
            <div className="w-[140px] hidden md:block"></div> {/* Spacer for alignment */}
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start h-full">
          
          {/* List Selection (Left) */}
          <div className="w-full lg:w-1/4 space-y-3 h-[300px] lg:h-[700px] overflow-y-auto pr-2 custom-scrollbar border-r border-arthagon-ink/10 dark:border-white/5">
            {RACES.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`w-full text-left p-4 border transition-all duration-300 group relative overflow-hidden rounded-sm ${
                  selectedId === item.id 
                    ? 'bg-arthagon-parchment dark:bg-white/5 border-arthagon-gold shadow-[0_0_15px_rgba(197,160,89,0.2)]' 
                    : 'bg-white/40 dark:bg-black/40 border-arthagon-ink/5 dark:border-white/5 hover:border-arthagon-gold/30'
                }`}
              >
                <div className="flex items-center gap-3 relative z-10">
                    <div className={`p-2 rounded-full border ${selectedId === item.id ? 'border-arthagon-gold text-arthagon-gold' : 'border-arthagon-ink/20 dark:border-white/10 text-arthagon-ink/60 dark:text-gray-500'} bg-white dark:bg-black`}>
                        <item.icon size={18} />
                    </div>
                    <div>
                        <h4 className={`font-cinzel text-base tracking-wide ${selectedId === item.id ? 'text-arthagon-gold font-bold' : 'text-arthagon-ink/80 dark:text-gray-400 group-hover:text-arthagon-ink dark:group-hover:text-gray-200'}`}>
                            {item.name}
                        </h4>
                    </div>
                </div>
                {/* Hover shine */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-arthagon-gold/10 dark:via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            ))}
          </div>

          {/* Center Visual (The Race) */}
          <div className="w-full lg:w-1/3 flex flex-col items-center justify-center py-4">
             <div className="relative group perspective-1000">
                {/* The Aura Container */}
                <div 
                    className={`relative w-[300px] h-[500px] md:w-[360px] md:h-[600px] bg-arthagon-parchment dark:bg-black border rounded-t-full rounded-b-md overflow-hidden transition-all duration-700 flex items-center justify-center ${getAuraClass(selectedRace.auraStyle)}`}
                >
                    {/* Inner Texture */}
                    <div className="absolute inset-0 bg-noise-texture opacity-30 mix-blend-multiply dark:mix-blend-overlay"></div>
                    
                    {/* Dynamic Aura Effects */}
                    {selectedRace.auraStyle === 'eclipse' && (
                        <>
                            {[...Array(6)].map((_, i) => (
                                <div 
                                    key={i}
                                    className="absolute bottom-0 w-24 h-24 bg-red-950/30 rounded-full blur-xl animate-tendril"
                                    style={{
                                        left: `${20 + Math.random() * 60}%`,
                                        animationDelay: `${i * 0.5}s`,
                                        animationDuration: `${3 + Math.random() * 2}s`
                                    }}
                                ></div>
                            ))}
                        </>
                    )}

                    {selectedRace.auraStyle === 'nen' && (
                        <>
                            {[...Array(8)].map((_, i) => (
                                <div 
                                    key={i}
                                    className="absolute w-1 h-1 bg-yellow-400 dark:bg-yellow-200 shadow-[0_0_5px_orange] dark:shadow-[0_0_5px_yellow] animate-spark"
                                    style={{
                                        top: `${20 + Math.random() * 60}%`,
                                        left: `${20 + Math.random() * 60}%`,
                                        animationDelay: `${Math.random()}s`
                                    }}
                                ></div>
                            ))}
                            <div className="absolute inset-0 border-2 border-yellow-500/20 rounded-t-full animate-pulse"></div>
                        </>
                    )}

                     {selectedRace.auraStyle === 'frost' && (
                        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/30 via-transparent to-white/20 mix-blend-overlay animate-pulse-slow"></div>
                    )}
                    
                     {(selectedRace.auraStyle === 'nature' || selectedRace.auraStyle === 'spirit') && (
                         <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[color-mix(in_srgb,currentColor,transparent_50%)] to-transparent opacity-30 animate-pulse" style={{color: selectedRace.auraColor}}></div>
                     )}

                    {/* Aura Core */}
                    <div className="absolute inset-0 opacity-40 mix-blend-screen"
                         style={{
                             background: `radial-gradient(circle at 50% 50%, ${selectedRace.auraColor} 0%, transparent 70%)`
                         }}
                    ></div>

                    {/* The Icon instead of Image */}
                    <div className="relative z-10 transform transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                        <selectedRace.icon 
                            size={120} 
                            color={selectedRace.auraColor} 
                            strokeWidth={1}
                        />
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-arthagon-paper/90 via-arthagon-paper/60 to-transparent dark:from-black dark:via-black/80 dark:to-transparent">
                        <h3 className="text-3xl font-cinzel text-arthagon-ink dark:text-white text-center tracking-widest text-shadow drop-shadow-md">{selectedRace.name}</h3>
                    </div>
                </div>

                {/* Pedestal Reflection */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-black/20 dark:bg-black/50 blur-xl rounded-[100%] shadow-[0_0_30px_rgba(0,0,0,0.5)]"></div>
             </div>
          </div>

          {/* Stats & Lore (Right) */}
          <div className="w-full lg:w-5/12 h-auto lg:h-[700px] flex flex-col bg-white/40 dark:bg-black/20 border border-arthagon-ink/10 dark:border-white/5 backdrop-blur-sm rounded-sm">
             <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar flex-1">
                 <h3 className="text-arthagon-gold font-cinzel text-2xl tracking-[0.2em] mb-2">{selectedRace.title}</h3>
                 <div className="h-px w-full bg-gradient-to-r from-arthagon-gold/50 to-transparent mb-6"></div>
                 
                 <div className="mb-8">
                    <p className="font-body text-arthagon-ink/90 dark:text-gray-300 leading-relaxed text-base text-justify">
                        {selectedRace.description}
                    </p>
                 </div>

                 {/* Abilities List */}
                 <div className="mb-8 bg-arthagon-parchment/50 dark:bg-black/40 p-5 border border-arthagon-ink/5 dark:border-white/5 rounded-sm">
                    <h4 className="text-xs font-cinzel text-arthagon-gold uppercase tracking-widest mb-4 flex items-center gap-2 border-b border-arthagon-gold/20 pb-2">
                        <Sparkles size={14} /> Habilidades & Poderes
                    </h4>
                    <ul className="space-y-3">
                        {selectedRace.abilities.map((ability, idx) => (
                            <li key={idx} className="text-sm text-arthagon-ink/80 dark:text-gray-300 flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 bg-arthagon-gold rotate-45 flex-shrink-0"></span>
                                <span>{ability}</span>
                            </li>
                        ))}
                    </ul>
                 </div>

                 {/* Stat Bars */}
                 <div className="space-y-4 pt-2">
                     {Object.entries(selectedRace.stats).map(([stat, value]) => (
                         <div key={stat} className="group">
                             <div className="flex justify-between text-xs text-arthagon-ink/60 dark:text-gray-400 mb-1 uppercase tracking-wider">
                                 <span>{stat}</span>
                                 <span className="text-arthagon-gold">{value}</span>
                             </div>
                             <div className="h-1.5 w-full bg-arthagon-ink/10 dark:bg-white/5 rounded-full overflow-hidden">
                                 <div 
                                    className="h-full transition-all duration-1000 ease-out relative"
                                    style={{ 
                                        width: `${value}%`, 
                                        backgroundColor: selectedRace.auraColor,
                                        boxShadow: `0 0 10px ${selectedRace.auraColor}` 
                                    }}
                                 ></div>
                             </div>
                         </div>
                     ))}
                 </div>

                 {/* Bonus Status */}
                 <div className="pt-6 mt-4">
                     <p className="text-sm text-arthagon-gold/90 font-cinzel text-center border border-arthagon-gold/30 p-3 bg-arthagon-gold/10 shadow-[inset_0_0_10px_rgba(197,160,89,0.1)]">
                         <span className="font-bold mr-2">BÔNUS:</span> {selectedRace.bonus}
                     </p>
                 </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};