import React, { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Terminal } from './components/Terminal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PrintResume } from './components/PrintResume';

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('mikael-theme');
    if (saved) return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches 
      ? 'light' 
      : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('mikael-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="App">
      {/* Interactive UI on screen */}
      <div className="screen-only">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Terminal />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Clean, ATS-friendly curriculum layout exclusively for print/PDF */}
      <PrintResume />
    </div>
  );
}

export default App;
