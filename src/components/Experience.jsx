import React from 'react';
import { Briefcase, Calendar, Building, CheckCircle2, Award, ChevronRight } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-subtitle">
            <Briefcase size={14} /> Trajetória Profissional
          </span>
          <h2 className="section-title">
            Experiência em <span className="gradient-text">Missão Crítica & Full Stack</span>
          </h2>
          <p className="section-description">
            Histórico consistente na multinacional DXC Technology e atuação em projetos autônomos sob demanda, 
            atendendo a exigentes SLAs de clientes globais.
          </p>
        </div>

        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              {/* Timeline marker */}
              <div className="timeline-marker">
                <div className="marker-dot">
                  <Award size={14} />
                </div>
                {index !== experiences.length - 1 && <div className="marker-line" />}
              </div>

              {/* Card Content */}
              <div className="glass-card timeline-card">
                <div className="timeline-card-header">
                  <div>
                    <span className="exp-tag">{exp.tag}</span>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company-row">
                      <span className="exp-company">
                        <Building size={14} /> {exp.company}
                      </span>
                      <span className="exp-period">
                        <Calendar size={14} /> {exp.period}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="exp-description">{exp.description}</p>

                <div className="exp-achievements-block">
                  <h4 className="achievements-heading">Principais Realizações & Responsabilidades:</h4>
                  <ul className="achievements-list">
                    {exp.achievements.map((ach, achIdx) => (
                      <li key={achIdx} className="achievement-item">
                        <CheckCircle2 size={16} className="achievement-icon text-cyan" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="exp-techs-block">
                  <span className="techs-label">Tecnologias Utilizadas:</span>
                  <div className="techs-pills-wrap">
                    {exp.techs.map((tech, techIdx) => (
                      <span key={techIdx} className="badge badge-cyan">
                        <ChevronRight size={11} /> {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
