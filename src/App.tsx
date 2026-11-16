import React, { useState } from 'react';
import { Preloader } from './components/common/Preloader';
import { CustomCursor } from './components/common/CustomCursor';
import { AmbientCanvas } from './components/background/AmbientCanvas';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-navy-primary text-soft-white selection:bg-accent-blue selection:text-soft-white overflow-x-hidden">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <CustomCursor />
      <AmbientCanvas />
      <Navbar />
      <main className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
