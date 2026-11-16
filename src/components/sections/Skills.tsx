import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../../data/portfolioConfig';
import { TECH_ICON_MAP, TechIconKey } from '../common/TechIcons';

interface BrandConfig {
  color: string;
  border: string;
  glow: string;
}

const BRAND_THEMES: Record<string, BrandConfig> = {
  C: {
    color: '#00599C',
    border: 'rgba(0, 89, 156, 0.8)',
    glow: '0 0 16px rgba(0, 89, 156, 0.35)',
  },
  Java: {
    color: '#ED8B00',
    border: 'rgba(237, 139, 0, 0.8)',
    glow: '0 0 16px rgba(237, 139, 0, 0.35)',
  },
  Python: {
    color: '#3776AB',
    border: 'rgba(55, 118, 171, 0.8)',
    glow: '0 0 16px rgba(55, 118, 171, 0.35)',
  },
  HTML5: {
    color: '#E34F26',
    border: 'rgba(227, 79, 38, 0.8)',
    glow: '0 0 16px rgba(227, 79, 38, 0.35)',
  },
  CSS3: {
    color: '#1572B6',
    border: 'rgba(21, 114, 182, 0.8)',
    glow: '0 0 16px rgba(21, 114, 182, 0.35)',
  },
  JavaScript: {
    color: '#F7DF1E',
    border: 'rgba(247, 223, 30, 0.8)',
    glow: '0 0 16px rgba(247, 223, 30, 0.35)',
  },
  React: {
    color: '#61DAFB',
    border: 'rgba(97, 218, 251, 0.8)',
    glow: '0 0 16px rgba(97, 218, 251, 0.35)',
  },
  FastAPI: {
    color: '#05998B',
    border: 'rgba(5, 153, 139, 0.8)',
    glow: '0 0 16px rgba(5, 153, 139, 0.35)',
  },
  Git: {
    color: '#F05032',
    border: 'rgba(240, 80, 50, 0.8)',
    glow: '0 0 16px rgba(240, 80, 50, 0.35)',
  },
  GitHub: {
    color: '#FFFFFF',
    border: 'rgba(255, 255, 255, 0.85)',
    glow: '0 0 16px rgba(255, 255, 255, 0.3)',
  },
  VSCode: {
    color: '#007ACC',
    border: 'rgba(0, 122, 204, 0.8)',
    glow: '0 0 16px rgba(0, 122, 204, 0.35)',
  },
};

const DEFAULT_BRAND: BrandConfig = {
  color: '#4B8BFF',
  border: 'rgba(75, 139, 255, 0.8)',
  glow: '0 0 16px rgba(75, 139, 255, 0.35)',
};

export const Skills: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <section id="skills" className="relative py-20 sm:py-24 px-6 sm:px-8 bg-navy-primary overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-accent-blue/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-accent-blue mb-3">
            <span>02 // SKILLS</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-soft-white tracking-tight font-normal">
            SKILLS
          </h2>
          <p className="text-sm sm:text-base font-sans text-muted-text max-w-lg mt-3 font-light leading-relaxed">
            Technologies and tools I use to build digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {portfolioConfig.skills.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="group flex flex-col justify-between p-8 sm:p-9 rounded-[20px] bg-navy-secondary/90 hover:bg-navy-secondary border border-[#DCE3EA] hover:border-[#4B8BFF] transition-colors duration-300 min-h-[380px]"
            >
              <div>
                <div className="flex items-center justify-between mb-7">
                  <h3 className="font-mono text-xs sm:text-sm tracking-[0.25em] text-accent-blue font-semibold uppercase">
                    {category.title}
                  </h3>
                  <span className="text-[11px] font-mono text-muted-text/80 tracking-wider">
                    {category.skills.length} {category.skills.length === 1 ? 'item' : 'items'}
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 py-3">
                  {category.skills.map((skill) => {
                    const IconComponent = TECH_ICON_MAP[skill.iconKey as TechIconKey];
                    const brand = BRAND_THEMES[skill.iconKey] ?? DEFAULT_BRAND;
                    const isActive = activeItem === `${category.title}-${skill.name}`;

                    return (
                      <div
                        key={`${category.title}-${skill.name}`}
                        className="relative group/icon flex flex-col items-center"
                        onMouseEnter={() => setActiveItem(`${category.title}-${skill.name}`)}
                        onMouseLeave={() => setActiveItem(null)}
                        onFocus={() => setActiveItem(`${category.title}-${skill.name}`)}
                        onBlur={() => setActiveItem(null)}
                        tabIndex={0}
                        role="button"
                        aria-label={skill.name}
                      >
                        <div
                          className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-navy-card flex items-center justify-center cursor-pointer border select-none outline-none focus:outline-none"
                          style={{
                            borderColor: isActive ? brand.border : '#354256',
                            boxShadow: isActive ? brand.glow : 'none',
                            transform: isActive ? 'scale(1.055)' : 'scale(1)',
                            transition: 'all 280ms cubic-bezier(0.4, 0, 0.2, 1)',
                          }}
                        >
                          <div
                            style={{
                              color: isActive ? brand.color : '#DCE3EA',
                              transition: 'color 280ms cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                          >
                            {IconComponent ? (
                              <IconComponent size={28} />
                            ) : (
                              <span className="text-xs font-mono font-bold">
                                {skill.name.slice(0, 2).toUpperCase()}
                              </span>
                            )}
                          </div>
                        </div>

                        <div
                          className={`absolute bottom-full mb-3 left-1/2 -translate-x-1/2 pointer-events-none transition-all duration-200 z-40 px-3 py-2 rounded-xl bg-navy-primary/95 backdrop-blur-md border border-[#DCE3EA]/40 shadow-2xl text-center w-max max-w-[180px] ${
                            isActive ? 'opacity-100 -translate-y-1' : 'opacity-0'
                          }`}
                        >
                          <span
                            className="block text-xs font-medium tracking-wide transition-colors duration-200"
                            style={{ color: isActive ? brand.color : '#F5F7FA' }}
                          >
                            {skill.name}
                          </span>
                          <span className="block text-[10px] text-muted-text mt-0.5 leading-snug font-sans font-light">
                            {skill.description}
                          </span>
                          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-solid border-t-navy-primary/95 border-t-4 border-x-transparent border-x-4 border-b-0" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 mt-4 text-center">
                <p className="text-[11px] font-mono tracking-wider text-muted-text/70 uppercase">
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
