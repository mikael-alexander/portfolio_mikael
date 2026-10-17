import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  MessageSquare, 
  ShieldCheck, 
  Cpu, 
  Database, 
  GitBranch, 
  CheckCircle2 
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { personalInfo, metrics } from '../data/portfolioData';

export const Hero = () => {
  const handlePrintCV = () => {
    window.print();
  };

  return (
    <section id="hero" className="hero-section section">
      {/* Background Ambient Glows */}
      <div 
        className="glow-circle" 
        style={{ width: '450px', height: '450px', background: 'rgba(56, 189, 248, 0.15)', top: '5%', left: '-10%' }}
      />
      <div 
        className="glow-circle" 
        style={{ width: '500px', height: '500px', background: 'rgba(99, 102, 241, 0.12)', top: '25%', right: '-15%' }}
      />

      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Column: Bio & CTAs */}
          <div className="hero-content">
            <div className="hero-badge-available">
              <span className="pulse-dot"></span>
              <span>Engenheiro de Software Full Stack & L3 Specialist</span>
            </div>

            <h1 className="hero-title">
              Construindo sistemas de <span className="gradient-text">alta disponibilidade</span>, integrações e interfaces modernas.
            </h1>

            <p className="hero-description">
              Olá, sou <strong>{personalInfo.name}</strong>. Especialista em desenvolvimento backend com 
              <strong> Java (Spring Framework)</strong>, <strong>ecossistema .NET</strong>, barramento de integração corporativa com 
              <strong> Apache Camel</strong>, padrões de projeto (GoF/SOLID) e rotinas de banco de dados via <strong>Oracle PL/SQL e PostgreSQL</strong>. Ampla vivência na sustentação de sistemas de 
              <strong> missão crítica (L3)</strong>, inteligência artificial aplicada ao desenvolvimento (Java + IA) e interfaces modernas em <strong>React</strong>, <strong>Angular</strong> e <strong>Vue.js</strong>.
            </p>

            {/* Speciality Pills */}
            <div className="hero-pills">
              <span className="pill-item"><Cpu size={14} /> Java, .NET & IA</span>
              <span className="pill-item"><GitBranch size={14} /> Apache Camel (EIP)</span>
              <span className="pill-item"><Database size={14} /> PL/SQL & PostgreSQL</span>
              <span className="pill-item"><ShieldCheck size={14} /> Sustentação L3 & BDD</span>
            </div>

            {/* Call To Actions */}
            <div className="hero-actions">
              <a 
                href={personalInfo.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <MessageSquare size={18} />
                <span>Iniciar Conversa</span>
              </a>

              <a href="#experience" className="btn btn-outline">
                <span>Ver Trajetória</span>
                <ArrowRight size={16} />
              </a>

              <button onClick={handlePrintCV} className="btn btn-ghost" title="Salvar ou Imprimir Versão em PDF">
                <Download size={17} />
                <span>Imprimir CV</span>
              </button>
            </div>

            {/* Social links */}
            <div className="hero-social-links">
              <span className="social-label">Conecte-se:</span>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn"
                title="Perfil no GitHub"
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn"
                title="Perfil no LinkedIn"
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
              </a>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="social-btn"
                title="Enviar E-mail"
              >
                <Mail size={18} />
                <span>{personalInfo.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Code Visual Card */}
          <div className="hero-card-column">
            <div className="glass-card hero-code-card">
              <div className="code-card-header">
                <div className="window-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <span className="code-filename">EngineerProfile.ts</span>
                <span className="code-status">
                  <CheckCircle2 size={13} className="text-emerald" /> SLA 99.9%
                </span>
              </div>

              <div className="code-card-body">
                <pre>
                  <code>
{`// Perfil Profissional & Arquitetura
const softwareEngineer = {
  nome: "${personalInfo.name}",
  localidade: "${personalInfo.location}",
  expertise: "Full Stack & Missão Crítica (L3)",
  
  backend: [
    "Java (Spring Boot, Lambdas & IA)",
    ".NET / C#",
    "Padrões de Projeto (GoF & SOLID)",
    "Apache Camel (Integração & EIP)",
    "APIs RESTful & Swagger/OpenAPI"
  ],
  
  bancosDeDados: [
    "Oracle PL/SQL (.PKS / .PKB)",
    "PostgreSQL (Modelagem & Tuning)",
    "MySQL", "Jobs Batch & Cargas em Lote"
  ],
  
  frontend: [
    "React.js", "Angular", "Vue.js",
    "TypeScript", "HTML5 / CSS3"
  ],
  
  qualidadeDevOps: [
    "Cucumber (BDD)", "SonarQube",
    "Jenkins CI/CD", "GitFlow",
    "Docker & Kubernetes",
    "Automation Anywhere (RPA)"
  ],
  
  focoAtendimento: "Resolução de Causa Raiz"
};`}
                  </code>
                </pre>
              </div>

              <div className="code-card-footer">
                <div className="footer-metric">
                  <span className="metric-tag">L3 Support</span>
                  <span className="metric-desc">Incidentes Críticos & SLAs</span>
                </div>
                <div className="footer-metric">
                  <span className="metric-tag">Enterprise</span>
                  <span className="metric-desc">DXC Technology & Soluções Web</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Row */}
        <div className="metrics-row">
          {metrics.map((item, index) => (
            <div key={index} className="glass-card metric-card">
              <div className="metric-value gradient-text">{item.value}</div>
              <div className="metric-label">{item.label}</div>
              <div className="metric-detail">{item.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
