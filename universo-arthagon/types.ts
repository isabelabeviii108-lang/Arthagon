import React from 'react';

export interface Faction {
  id: string;
  name: string;
  description: string;
  alignment: string;
}

export interface LoreSectionData {
  id: string;
  title: string;
  content: string;
  quote?: {
    text: string;
    author: string;
  };
}

export interface FeatureCard {
  title: string;
  description: string;
  icon: React.ElementType;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_KEY: string;
      NODE_ENV: string;
      [key: string]: string | undefined;
    }
  }
}