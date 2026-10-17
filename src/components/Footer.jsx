import React from 'react';
import { Terminal, ArrowUp, Mail, MessageSquare } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrap">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="navbar-logo">
              <span className="logo-badge">
                <Terminal size={18} className="logo-icon" />
              </span>
              <span className="logo-text">
                Mikael<span className="logo-accent">.dev</span>
              </span>
            </div>
            <p className="footer-tagline">
              Engenharia de Software Full Stack, Integrações Corporativas e Sustentação de Missão Crítica (L3).
            </p>
          </div>

          <div className="footer-nav-col">
            <span className="footer-col-title">Navegação Rápida</span>
            <div className="footer-links">
              <a href="#hero">Início</a>
              <a href="#skills">Habilidades</a>
              <a href="#experience">Experiência</a>
              <a href="#projects">Projetos</a>
              <a href="#education">Formação</a>
              <a href="#terminal">Terminal CLI</a>
              <a href="#contact">Contato</a>
            </div>
          </div>

          <div className="footer-social-col">
            <span className="footer-col-title">Canais de Contato</span>
            <div className="footer-social-links">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a 
                href={personalInfo.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                aria-label="WhatsApp"
              >
                <MessageSquare size={18} />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="footer-social-btn"
                aria-label="E-mail"
              >
                <Mail size={18} />
              </a>
            </div>
            <span className="footer-location">{personalInfo.location}</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} {personalInfo.name}. Todos os direitos reservados.
          </p>

          <div className="footer-actions">
            <button onClick={scrollToTop} className="btn-back-to-top" title="Voltar ao Topo">
              <span>Topo</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
