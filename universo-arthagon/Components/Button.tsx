import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'discord';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "relative overflow-hidden font-cinzel font-bold transition-all duration-300 uppercase tracking-[0.2em] group border-t border-b";
  
  const variants = {
    primary: `
      bg-gradient-to-b from-arthagon-charcoal to-black 
      text-arthagon-gold border-arthagon-gold/50 
      shadow-[0_0_15px_rgba(0,0,0,0.8)] 
      hover:text-white hover:border-arthagon-gold 
      hover:shadow-[0_0_20px_rgba(197,160,89,0.4)]
      before:absolute before:inset-0 before:bg-arthagon-gold/10 before:opacity-0 before:hover:opacity-100 before:transition-opacity
    `,
    secondary: `
      bg-gradient-to-b from-arthagon-accent/80 to-red-950 
      text-white border-red-500/30
      hover:bg-red-900 hover:border-red-500
      shadow-[0_0_10px_rgba(139,0,0,0.3)]
      hover:shadow-[0_0_20px_rgba(139,0,0,0.6)]
    `,
    outline: `
      bg-transparent border-arthagon-gold/30 text-arthagon-gold/80 
      hover:bg-arthagon-gold/5 hover:text-arthagon-gold hover:border-arthagon-gold
      hover:shadow-[0_0_15px_rgba(197,160,89,0.15)]
    `,
    discord: `
      bg-gradient-to-b from-[#5865F2] to-[#404EED] 
      text-white border-[#5865F2]
      shadow-[0_0_25px_rgba(88,101,242,0.6)] 
      hover:text-white hover:border-[#99AAB5] 
      hover:shadow-[0_0_50px_rgba(88,101,242,1),0_0_20px_rgba(255,255,255,0.4)]
      before:absolute before:inset-0 before:bg-white/10 before:opacity-0 before:hover:opacity-100 before:transition-opacity
      hover:-translate-y-0.5
    `
  };

  const sizes = {
    sm: "px-6 py-2 text-xs",
    md: "px-10 py-3 text-sm",
    lg: "px-12 py-5 text-base md:text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {/* Ornamental corners (CSS only) */}
      <span className="absolute top-0 left-0 w-2 h-2 border-l border-t border-current opacity-50 group-hover:opacity-100 transition-opacity"></span>
      <span className="absolute top-0 right-0 w-2 h-2 border-r border-t border-current opacity-50 group-hover:opacity-100 transition-opacity"></span>
      <span className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-current opacity-50 group-hover:opacity-100 transition-opacity"></span>
      <span className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-current opacity-50 group-hover:opacity-100 transition-opacity"></span>

      <span className="relative z-10 flex items-center justify-center gap-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
        {children}
      </span>
      
      {/* Shine effect */}
      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine mix-blend-overlay" />
    </button>
  );
};