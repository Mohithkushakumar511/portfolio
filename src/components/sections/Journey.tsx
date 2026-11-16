import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Milestone, Calendar, ArrowRight, FolderGit2 } from 'lucide-react';
import { portfolioConfig } from '../../data/portfolioConfig';

const milestoneIcons = {
  education: GraduationCap,
  achievement: Award,
  milestone: Milestone,
};

export const Journey: React.FC = () => (
  <section id="journey" className="relative py-24 sm:py-32 px-6 sm:px-8 border-t border-charcoal/60 bg-obsidian-light/20">
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col items-start mb-14 sm:mb-18">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-burgundy mb-3">
          <span>04 // TIMELINE</span>
          <span className="w-8 h-[1px] bg-burgundy/50" />
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-cream tracking-tight font-normal">
          Experience &amp; <span className="text-sage italic font-serif">Journey</span>
        </h2>
        <p className="text-xs sm:text-sm font-mono text-sage mt-2">
          Milestones across completed software applications, technical learning, and computer science foundations.
        </p>
      </div>

      <div className="relative pl-6 sm:pl-8 border-l border-charcoal/80 space-y-12">
        {portfolioConfig.journey.map((item, index) => {
          const Icon = milestoneIcons[item.type] ?? Milestone;
          const isProjectMilestone =
            item.title.includes('Assistant') ||
            item.title.includes('Chatbox') ||
            item.title.includes('Platform');

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative group"
            >
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-obsidian border border-burgundy/60 flex items-center justify-center text-burgundy group-hover:scale-110 group-hover:border-burgundy transition-all duration-200">
                <Icon className="w-3 h-3" />
              </div>

              <div className="p-5 sm:p-6 rounded-xl bg-charcoal/30 border border-charcoal-border hover:border-sage/40 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-mono text-cream bg-charcoal border border-charcoal">
                    <Calendar className="w-3 h-3 text-burgundy" />
                    <span>{item.period}</span>
                  </span>

                  <span className="text-[11px] font-mono uppercase tracking-widest text-sage/60">
                    {item.type}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <h3 className="font-serif text-lg sm:text-xl text-cream font-medium group-hover:text-sage transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono text-sage/70">{item.organization}</span>
                </div>

                <p className="text-xs sm:text-sm text-sage font-sans leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-charcoal/50">
                  {item.tags && (
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono text-sage/75 px-2 py-0.5 rounded bg-charcoal/70 border border-charcoal-border"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {isProjectMilestone && (
                    <a
                      href="#projects"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-cream hover:text-sage transition-colors ml-auto"
                    >
                      <FolderGit2 className="w-3.5 h-3.5 text-burgundy" />
                      <span>View in Projects</span>
                      <ArrowRight className="w-3.5 h-3.5 text-burgundy" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);
