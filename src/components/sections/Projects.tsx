import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, Code2 } from 'lucide-react';
import { portfolioConfig } from '../../data/portfolioConfig';
import { TECH_ICON_MAP, TechIconKey } from '../common/TechIcons';

const normalizeTagToIconKey = (tag: string): TechIconKey | null => {
  const lower = tag.toLowerCase();
  if (lower.includes('python')) return 'Python';
  if (lower.includes('fastapi')) return 'FastAPI';
  if (lower.includes('groq')) return 'Groq';
  if (lower.includes('react')) return 'React';
  if (lower.includes('javascript') || lower === 'js') return 'JavaScript';
  if (lower.includes('html')) return 'HTML5';
  if (lower.includes('css') || lower.includes('tailwind')) return 'CSS3';
  if (lower.includes('git') && !lower.includes('github')) return 'Git';
  if (lower.includes('github')) return 'GitHub';
  if (lower.includes('vscode')) return 'VSCode';
  return null;
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative py-20 sm:py-24 px-6 sm:px-8 bg-navy-primary overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-accent-blue mb-3">
            <span>03 // PORTFOLIO</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-soft-white tracking-tight font-normal">
            Featured <span className="text-platinum italic font-serif">Projects</span>
          </h2>
          <p className="text-xs sm:text-sm font-mono text-muted-text mt-2 max-w-lg">
            Applied software systems, AI architectures, and interactive digital experiences.
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:gap-7">
          {portfolioConfig.projects.map((project, index) => {
            const projectNumber = String(index + 1).padStart(2, '0');

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="group relative p-6 sm:p-8 rounded-[20px] bg-navy-secondary/85 border border-[#DCE3EA] hover:border-[#4B8BFF] transition-colors duration-300 shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2.5">
                      <span className="font-mono text-xs sm:text-sm font-bold text-accent-blue tracking-widest">
                        {projectNumber}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-navy-border" />
                      <span className="text-[11px] font-mono uppercase tracking-widest text-muted-text">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-soft-white group-hover:text-accent-blue transition-colors font-normal mb-1.5">
                      {project.title}
                    </h3>

                    <p className="text-xs font-mono uppercase tracking-wider text-accent-blue/90 mb-3">
                      {project.subtitle}
                    </p>

                    <p className="text-sm sm:text-base text-platinum/90 font-light leading-relaxed max-w-3xl mb-5">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => {
                        const iconKey = normalizeTagToIconKey(tag);
                        const IconComp = iconKey ? TECH_ICON_MAP[iconKey] : null;

                        return (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-navy-card border border-navy-border text-platinum/80"
                          >
                            {IconComp && (
                              <IconComp size={13} className="text-accent-blue" />
                            )}
                            <span>{tag}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex items-center md:flex-col md:items-end justify-between md:justify-start gap-3 pt-4 md:pt-0 border-t md:border-t-0 border-navy-border/60">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-card hover:bg-navy-card/80 border border-navy-border hover:border-accent-blue text-xs font-mono text-soft-white transition-colors"
                    >
                      <Github className="w-3.5 h-3.5 text-accent-blue" />
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-muted-text" />
                    </a>

                    {project.liveDemoUrl && project.liveDemoUrl !== '#' && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue hover:bg-accent-blue-hover text-xs font-mono text-soft-white font-medium transition-colors"
                      >
                        <Code2 className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
