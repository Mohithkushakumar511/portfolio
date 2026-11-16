import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, MessageSquare, Copy, Check, ArrowUpRight, Send } from 'lucide-react';
import { portfolioConfig } from '../../data/portfolioConfig';

const DiscordIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const iconMap = { Mail, Github, Linkedin, Instagram, MessageSquare, Discord: DiscordIcon };

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(portfolioConfig.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24 px-6 sm:px-8 bg-navy-primary overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[260px] bg-accent-blue/8 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-accent-blue mb-3">
            <span>04 // CONTACT</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-soft-white tracking-tight font-normal mb-3">
            Let's Build Something Together.
          </h2>
          <p className="text-sm sm:text-base text-muted-text max-w-lg font-light leading-relaxed">
            Interested in discussing full-time software engineering roles, internships, or innovative technical collaborations? Let's connect.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-10 rounded-[20px] bg-navy-secondary/85 border border-[#DCE3EA] hover:border-[#4B8BFF] transition-colors duration-300 shadow-xl mb-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start mb-2">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-text">
                  Direct Inquiries
                </span>
              </div>
              <a
                href={`mailto:${portfolioConfig.personal.email}`}
                className="font-serif text-2xl sm:text-3xl text-soft-white hover:text-accent-blue transition-colors duration-200 break-all block"
              >
                {portfolioConfig.personal.email}
              </a>
              <span className="text-xs font-mono text-muted-text/80 block mt-1.5">
                Software development, artificial intelligence systems, and technical conversations.
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleCopy}
                className="px-5 py-2.5 rounded-full bg-navy-card hover:bg-navy-card/80 border border-navy-border hover:border-accent-blue text-xs font-mono text-soft-white flex items-center gap-2 transition-all active:scale-95 cursor-pointer"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-accent-blue" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${portfolioConfig.personal.email}`}
                className="px-6 py-2.5 rounded-full bg-accent-blue hover:bg-accent-blue-hover text-soft-white text-xs font-mono font-semibold flex items-center gap-2 transition-all shadow-sm cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </a>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {portfolioConfig.socials.map((social) => {
            const Icon = iconMap[social.icon as keyof typeof iconMap] ?? ArrowUpRight;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-[16px] bg-navy-secondary/85 border border-[#DCE3EA] hover:border-[#4B8BFF] transition-colors duration-300 flex items-center justify-between shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-navy-card flex items-center justify-center text-platinum group-hover:text-accent-blue transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-medium text-soft-white group-hover:text-accent-blue transition-colors">
                      {social.name}
                    </span>
                    <span className="text-[10px] font-mono text-muted-text truncate max-w-[90px]">
                      {social.handle}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-text/60 group-hover:text-accent-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
