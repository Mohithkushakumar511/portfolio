import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Code2, Bot, Layers, ArrowUpRight } from 'lucide-react';
import { portfolioConfig } from '../../data/portfolioConfig';

const focusAreas = [
  {
    icon: Bot,
    title: 'Artificial Intelligence & Conversational Systems',
    desc: 'Engineering intelligent chat agents, multi-turn dialogue architectures, and high-speed LLM inference pipelines with FastAPI and Groq API.',
  },
  {
    icon: Code2,
    title: 'Full-Stack Software Development',
    desc: 'Crafting responsive client interfaces using React and modern CSS, backed by robust asynchronous REST APIs and solid object-oriented architecture.',
  },
  {
    icon: Layers,
    title: 'Problem Solving & Continuous Learning',
    desc: 'Applying strong fundamentals in data structures, algorithms, and modular design patterns to write clean, maintainable, and scalable software.',
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 sm:py-24 px-6 sm:px-8 bg-navy-primary">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-accent-blue mb-3">
            <span>01 // ABOUT</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-soft-white tracking-tight font-normal">
            About <span className="text-platinum italic font-serif">Mohith</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-14">
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-sm aspect-[4/5] rounded-[20px] overflow-hidden bg-navy-card p-2 group border border-[#DCE3EA] hover:border-[#4B8BFF] transition-colors duration-300 shadow-xl"
            >
              <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-navy-secondary">
                <img
                  src={portfolioConfig.personal.avatarUrl}
                  alt={portfolioConfig.personal.fullName}
                  className="w-full h-full object-cover object-[center_15%] transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-primary/90 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 p-3 bg-navy-secondary/95 backdrop-blur-md rounded-xl flex items-center justify-between z-10 shadow-lg border border-[#DCE3EA]/30">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-accent-blue" />
                    <span className="text-xs font-mono text-platinum">{portfolioConfig.personal.location}</span>
                  </div>
                  <span className="text-[11px] font-mono text-soft-white font-medium">Software Developer</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="font-serif text-2xl sm:text-3xl text-soft-white leading-snug font-normal">
                Committed to engineering reliable, purposeful software through disciplined problem-solving and modern technologies.
              </h3>

              <p className="text-platinum/90 text-base leading-relaxed font-light">
                I am a software developer with a strong foundation in computer science, focused on bridging algorithmic intelligence with responsive, accessible software design. I believe the most impactful technology is built when solid architectural principles meet clean, intuitive user experiences.
              </p>

              <p className="text-platinum/90 text-base leading-relaxed font-light">
                My technical experience centers on <strong>Python</strong>, <strong>FastAPI</strong>, and <strong>React</strong> — building high-performance conversational AI assistants, low-latency API backends, and elegant web platforms. I approach every project with an analytical mindset rooted in core data structures and object-oriented design.
              </p>

              <p className="text-platinum/90 text-base leading-relaxed font-light">
                Driven by continuous learning, I actively explore advancements in artificial intelligence, modern web engineering, and developer tooling to continually refine my craft and deliver practical solutions to real-world challenges.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-[20px] bg-navy-secondary border border-[#DCE3EA] hover:border-[#4B8BFF] transition-colors duration-300">
                <span className="text-2xl font-serif font-bold text-accent-blue block">3+</span>
                <span className="text-xs font-mono text-muted-text uppercase tracking-wider">Featured Systems</span>
              </div>
              <div className="p-4 rounded-[20px] bg-navy-secondary border border-[#DCE3EA] hover:border-[#4B8BFF] transition-colors duration-300">
                <span className="text-2xl font-serif font-bold text-soft-white block">10+</span>
                <span className="text-xs font-mono text-muted-text uppercase tracking-wider">Technologies</span>
              </div>
              <div className="p-4 rounded-[20px] bg-navy-secondary border border-[#DCE3EA] hover:border-[#4B8BFF] transition-colors duration-300 col-span-2 sm:col-span-1">
                <span className="text-2xl font-serif font-bold text-emerald-400 block">100%</span>
                <span className="text-xs font-mono text-muted-text uppercase tracking-wider">Commitment to Craft</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-blue hover:text-soft-white transition-colors"
              >
                <span>Explore Featured Engineering Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {focusAreas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col justify-between p-8 sm:p-9 rounded-[20px] bg-navy-secondary/90 hover:bg-navy-secondary border border-[#DCE3EA] hover:border-[#4B8BFF] transition-colors duration-300 shadow-lg min-h-[320px]"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-navy-card flex items-center justify-center mb-6 text-accent-blue group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-semibold text-soft-white mb-3 tracking-tight leading-snug">
                    {area.title}
                  </h4>
                  <p className="text-sm text-muted-text leading-relaxed font-light font-sans">
                    {area.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
