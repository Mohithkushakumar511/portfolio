import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Github, Linkedin, Instagram, Mail, ArrowDown } from 'lucide-react';
import { portfolioConfig } from '../../data/portfolioConfig';

const DiscordIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] sm:min-h-screen w-full flex flex-col justify-center items-center px-6 sm:px-8 pt-24 pb-14 overflow-hidden bg-navy-primary"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] bg-accent-blue/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[360px] h-[360px] bg-navy-secondary/80 blur-[130px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#354256_1px,transparent_1px)] [background-size:32px_32px] opacity-25" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8"
        >
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight text-soft-white leading-none">
            MOHITH
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex items-center justify-center gap-3 mb-6 sm:mb-8"
        >
          <span className="h-[1px] w-6 sm:w-10 bg-accent-blue/60" />
          <h2 className="text-xs sm:text-sm md:text-base font-mono uppercase tracking-[0.2em] text-accent-blue font-semibold">
            {portfolioConfig.personal.title}
          </h2>
          <span className="h-[1px] w-6 sm:w-10 bg-accent-blue/60" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-base sm:text-lg text-platinum/90 font-sans font-light leading-relaxed max-w-2xl mb-10 sm:mb-12"
        >
          Passionate about software development, artificial intelligence, and engineering clean, practical digital solutions. Experienced in building conversational AI tools, asynchronous backend services with FastAPI, and modern web applications with React.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-12 sm:mb-14"
        >
          <a
            href="#projects"
            className="group px-7 py-3 rounded-full bg-accent-blue hover:bg-accent-blue-hover text-soft-white text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-md transition-all duration-200 flex items-center gap-2"
          >
            <FolderGit2 className="w-4 h-4 text-soft-white" />
            <span>View Projects</span>
          </a>

          <div className="flex items-center gap-2 pl-0 sm:pl-2 pt-2 sm:pt-0">
            <a
              href="https://github.com/Mohithkushakumar511"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-full bg-navy-secondary border border-navy-border hover:border-accent-blue text-muted-text hover:text-soft-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/mohithkushakumar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-full bg-navy-secondary border border-navy-border hover:border-accent-blue text-muted-text hover:text-soft-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/m_x_hi_x_h/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="p-3 rounded-full bg-navy-secondary border border-navy-border hover:border-accent-blue text-muted-text hover:text-soft-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://discord.com/channels/@me"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord Profile"
              className="p-3 rounded-full bg-navy-secondary border border-navy-border hover:border-accent-blue text-muted-text hover:text-soft-white transition-colors"
            >
              <DiscordIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:contact@mohithkushakumar.dev"
              aria-label="Email Contact"
              className="p-3 rounded-full bg-navy-secondary border border-navy-border hover:border-accent-blue text-muted-text hover:text-soft-white transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="inline-flex flex-col items-center gap-2 text-muted-text/70 hover:text-soft-white transition-colors"
          aria-label="Scroll to About section"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">Explore</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
};
