import React from 'react';
import { FEATURES } from '../constants';

export const FeatureGrid: React.FC = () => {
  return (
    <section className="py-24 relative bg-[#f9f4e6] dark:bg-[#080808] border-b border-arthagon-ink/5 dark:border-white/5 overflow-hidden transition-colors duration-500">
        {/* Background glow to emphasize glass effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-arthagon-gold/5 blur-[100px] pointer-events-none rounded-full"></div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {FEATURES.map((feature, idx) => (
                    <div key={idx} className="glass-card rounded-sm p-8 group flex flex-col items-center text-center">
                        
                        {/* Icon Container with glowing border */}
                        <div className="w-20 h-20 relative flex items-center justify-center mb-6">
                            <div className="absolute inset-0 border border-arthagon-gold/20 rotate-45 group-hover:rotate-90 transition-transform duration-700 bg-arthagon-paper/50 dark:bg-black/40 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(0,0,0,0.5)]"></div>
                            <div className="absolute inset-0 border border-arthagon-gold/20 rotate-12 opacity-50"></div>
                            <feature.icon className="w-8 h-8 text-arthagon-gold relative z-10 drop-shadow-[0_0_8px_rgba(197,160,89,0.5)] transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        
                        <h3 className="font-cinzel text-xl text-metallic mb-4 font-bold tracking-wider relative z-10 drop-shadow-md">{feature.title}</h3>
                        <p className="font-body text-arthagon-ink/70 dark:text-gray-400 leading-relaxed text-sm relative z-10 group-hover:text-arthagon-ink dark:group-hover:text-gray-300 transition-colors">
                            {feature.description}
                        </p>

                        {/* Hover glow at bottom */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-arthagon-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Corner Accents */}
                        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-arthagon-ink/10 dark:border-white/10 group-hover:border-arthagon-gold/50 transition-colors duration-500"></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-arthagon-ink/10 dark:border-arthagon-gold/10 group-hover:border-arthagon-gold/50 transition-colors duration-500"></div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};