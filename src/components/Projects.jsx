import React, { useState } from 'react';
import { Layers, GitBranch, Database, ShieldAlert, CheckCircle, ExternalLink, Code2 } from 'lucide-react';
import { projects } from '../data/portfolioData';

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const getCategoryIcon = (category) => {
    if (category.includes('Integrações')) return <GitBranch size={16} />;
    if (category.includes('Dados')) return <Database size={16} />;
    if (category.includes('Qualidade')) return <ShieldAlert size={16} />;
    return <Layers size={16} />;
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-subtitle">
            <Layers size={14} /> Soluções de Engenharia
          </span>
          <h2 className="section-title">
            Projetos & <span className="gradient-text">Cases Arquiteturais</span>
          </h2>
          <p className="section-description">
            Arquitetura e desenvolvimento de soluções de software voltadas a integração de sistemas heterogêneos,
            processamento seguro de dados críticos e interfaces web completas.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((proj) => (
            <div key={proj.id} className="glass-card project-card">
              <div className="project-card-header">
                <span className="project-category-badge">
                  {getCategoryIcon(proj.category)}
                  <span>{proj.category}</span>
                </span>
                <span className="project-code-tag">
                  <Code2 size={13} /> Arquitetura
                </span>
              </div>

              <h3 className="project-title">{proj.title}</h3>
              <div className="project-subtitle">{proj.subtitle}</div>

              <p className="project-description">{proj.description}</p>

              <div className="project-highlights-box">
                <span className="highlights-title">Pontos Chave da Solução:</span>
                <ul className="highlights-list">
                  {proj.highlights.map((item, idx) => (
                    <li key={idx} className="highlight-item">
                      <CheckCircle size={14} className="text-cyan" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-techs-container">
                {proj.techs.map((tech, idx) => (
                  <span key={idx} className="badge badge-tech">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-card-footer">
                <button 
                  onClick={() => setActiveProject(proj)} 
                  className="btn btn-outline btn-sm btn-full"
                >
                  <ExternalLink size={14} />
                  <span>Detalhes da Arquitetura</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Project Architectural Details */}
        {activeProject && (
          <div className="modal-overlay" onClick={() => setActiveProject(null)}>
            <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div>
                  <span className="badge badge-cyan">{activeProject.category}</span>
                  <h3 className="modal-title">{activeProject.title}</h3>
                  <p className="modal-subtitle">{activeProject.subtitle}</p>
                </div>
                <button 
                  onClick={() => setActiveProject(null)} 
                  className="modal-close-btn"
                  aria-label="Fechar Modal"
                >
                  &times;
                </button>
              </div>

              <div className="modal-body">
                <div className="modal-section">
                  <h4>Visão Geral da Solução</h4>
                  <p>{activeProject.description}</p>
                </div>

                <div className="modal-section">
                  <h4>Diferenciais Técnicos & Boas Práticas</h4>
                  <ul className="modal-list">
                    {activeProject.highlights.map((h, i) => (
                      <li key={i}>
                        <CheckCircle size={15} className="text-cyan" />
                        <span>{h}</span>
                      </li>
                    ))}
                    <li>
                      <CheckCircle size={15} className="text-cyan" />
                      <span>Desenvolvido sob padrões de código limpo, GitFlow e testes contínuos de regressão.</span>
                    </li>
                  </ul>
                </div>

                <div className="modal-section">
                  <h4>Stack Tecnológico Utilizado</h4>
                  <div className="modal-tech-pills">
                    {activeProject.techs.map((t, i) => (
                      <span key={i} className="badge badge-cyan">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button onClick={() => setActiveProject(null)} className="btn btn-primary btn-sm">
                  Fechar Visualização
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
