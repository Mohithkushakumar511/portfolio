import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Github, Linkedin } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenu] = useState(false);
  const [activeSection, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 85);
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 240 && rect.bottom >= 240) {
            setActive(id);
            break;
          }
        }
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 z-50 flex flex-col items-center pointer-events-none transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? 'top-3 sm:top-4 px-4 sm:px-6'
          : 'top-0 px-6 sm:px-10 lg:px-14 pt-3 sm:pt-4'
      }`}
    >
      <div
        className={`pointer-events-auto w-full flex items-center justify-between transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? 'max-w-[1050px] h-[58px] sm:h-[62px] px-6 sm:px-8 rounded-full bg-[#101827]/90 backdrop-blur-md border border-[#354256] shadow-[0_12px_40px_rgba(0,0,0,0.55)]'
            : 'max-w-7xl h-[66px] sm:h-[72px] px-2 sm:px-4 rounded-none bg-transparent backdrop-blur-none border border-transparent shadow-none'
        }`}
      >
        <div className="flex-1 flex items-center justify-start">
          <a
            href="#hero"
            className="font-serif text-lg sm:text-xl font-normal tracking-tight text-[#DCE3EA] hover:text-[#4B8BFF] transition-colors focus:outline-none"
            aria-label="Mohith Home"
          >
            MOHITH
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-1.5 text-xs sm:text-sm font-medium tracking-wide transition-colors duration-200 rounded-full ${
                  isActive
                    ? 'text-[#DCE3EA] font-semibold'
                    : 'text-[#AAB5C4] hover:text-[#F5F7FA]'
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-[#4B8BFF]/15 border border-[#4B8BFF]/35 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex-1 flex items-center justify-end gap-3">
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-[#4B8BFF] hover:bg-[#3A7AE0] text-soft-white text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 flex items-center gap-1.5 shadow-sm hover:shadow-[0_0_16px_rgba(75,139,255,0.35)]"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <div
              className={`flex items-center gap-1 pl-2.5 border-l transition-colors duration-[400ms] ${
                scrolled ? 'border-[#354256]' : 'border-[#354256]/60'
              }`}
            >
              <a
                href="https://github.com/Mohithkushakumar511"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-full text-[#AAB5C4] hover:text-soft-white hover:bg-navy-secondary transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/mohithkushakumar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-full text-[#AAB5C4] hover:text-soft-white hover:bg-navy-secondary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <button
            onClick={() => setMobileMenu(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-full border transition-all duration-200 focus:outline-none ${
              scrolled
                ? 'border-[#354256] bg-navy-secondary text-soft-white hover:border-[#4B8BFF]'
                : 'border-transparent text-soft-white hover:text-[#4B8BFF]'
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className={`pointer-events-auto mt-2.5 w-full transition-all duration-[400ms] ${
              scrolled ? 'max-w-[1050px]' : 'max-w-7xl'
            } rounded-2xl bg-[#101827]/95 backdrop-blur-xl border border-[#354256] p-5 shadow-2xl md:hidden`}
          >
            <nav className="flex flex-col gap-1.5">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenu(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium tracking-wide text-[#DCE3EA] hover:text-soft-white hover:bg-navy-secondary transition-colors flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#4B8BFF]" />
                </a>
              ))}

              <div className="pt-3 mt-1 border-t border-[#354256] flex items-center justify-between gap-3">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenu(false)}
                  className="flex-1 py-2.5 rounded-full bg-[#4B8BFF] text-soft-white text-xs font-semibold tracking-wider uppercase text-center flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Resume</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/Mohithkushakumar511"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="p-2.5 rounded-full border border-[#354256] bg-navy-secondary text-[#AAB5C4] hover:text-soft-white hover:border-[#4B8BFF] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com/in/mohithkushakumar"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-2.5 rounded-full border border-[#354256] bg-navy-secondary text-[#AAB5C4] hover:text-soft-white hover:border-[#4B8BFF] transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
