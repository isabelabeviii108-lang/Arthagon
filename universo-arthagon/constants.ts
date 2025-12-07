import { Coins, Swords, Scroll, Castle, Map as MapIcon, Skull, Settings, Users } from 'lucide-react';
import { Faction, FeatureCard, LoreSectionData } from './types';

export const HERO_TITLE = "UNIVERSO ARTHAGON";
export const HERO_SUBTITLE = "Onde lendas são forjadas no aço e na magia. Entre em um mundo de fantasia sombria e descubra seu destino.";

export const FEATURES: FeatureCard[] = [
  {
    title: "Sistemas Originais",
    description: "Sistemas originais de missões, economia, atributos, batalhas e mais.",
    icon: Settings
  },
  {
    title: "Comunidade Unida",
    description: "Comunidade unida! Para tornar o servidor cada vez melhor de conviver.",
    icon: Users
  },
  {
    title: "Mundo Inexplorado",
    description: "Mapa feito totalmente do zero! Com ruínas, monstros, culturas, mistérios e muitos segredos.",
    icon: MapIcon
  }
];

export const LORE_SECTIONS: LoreSectionData[] = [
  {
    id: "war-twins",
    title: "A Guerra dos Gêmeos",
    content: "Em Arthagon, o centro do universo, a paz foi estilhaçada quando Luciferius, o Deus da Destruição, traiu seu irmão gêmeo Adonai. Seduzido pelo Vazio, ele ergueu um exército de sombras, mergulhando deuses e a primeira humanidade em uma loucura irreversível.",
    quote: {
      text: "O sangue de um deus não mancha apenas o chão; ele corrompe a própria realidade.",
      author: "Crônicas Primordiais"
    }
  },
  {
    id: "creation-tears",
    title: "As Lágrimas da Criação",
    content: "Para impedir a aniquilação total, Adonai realizou o sacrifício supremo. Ao derrotar seu irmão, sua própria essência se esvaiu. Suas lágrimas finais, carregadas de poder puro, apagaram o antigo mundo e semearam o nascimento de um novo cosmos e novos deuses.",
  },
  {
    id: "earth-cataclysm",
    title: "O Cataclismo da Terra",
    content: "Há 823 anos, a Terra sentiu o eco da guerra antiga. Um cometa despertou bestas adormecidas, levando-nos à beira da extinção. Foi apenas com a intervenção dos Novos Deuses e a união da humanidade que conseguimos selar o mal e reerguer a civilização.",
    quote: {
      text: "O céu queimou por sete dias, e quando a cinza baixou, nós não éramos mais os mesmos.",
      author: "Profeta do Aço"
    }
  }
];

export const FACTIONS: Faction[] = [
  {
    id: "sentinels",
    name: "Sentinelas da Alvorada",
    description: "Guerreiros sagrados jurados a proteger os inocentes das criaturas da noite.",
    alignment: "Leal Bom"
  },
  {
    id: "cabal",
    name: "A Cabala Sombria",
    description: "Feiticeiros renegados que buscam poder a qualquer custo, manipulando a política das sombras.",
    alignment: "Caótico Neutro"
  },
  {
    id: "ironclad",
    name: "Legião de Ferro",
    description: "Mercenários implacáveis que servem apenas ao ouro e à guerra.",
    alignment: "Neutro Mau"
  }
];