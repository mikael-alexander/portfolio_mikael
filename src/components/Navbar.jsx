import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Terminal as TerminalIcon, Send } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Experiência', href: '#experience' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Formação', href: '#education' },
    { label: 'Terminal Dev', href: '#terminal' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#hero" className="navbar-logo">
          <span className="logo-badge">
            <TerminalIcon size={18} className="logo-icon" />
          </span>
          <span className="logo-text">
            Mikael<span className="logo-accent">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-nav desktop-only">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="navbar-actions">
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="theme-toggle-btn desktop-only"
            aria-label="Perfil no GitHub"
            title="Perfil no GitHub (mikael-alexander)"
          >
            <GithubIcon size={18} />
          </a>

          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn"
            aria-label="Alternar Tema Claro / Escuro"
            title="Alternar Tema Claro / Escuro"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a 
            href={personalInfo.whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm desktop-only"
          >
            <Send size={15} />
            <span>Falar Comigo</span>
          </a>

          <button 
            className="mobile-menu-toggle mobile-only" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir Menu de Navegação"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer mobile-only">
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a 
              href={personalInfo.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary btn-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Send size={16} />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
