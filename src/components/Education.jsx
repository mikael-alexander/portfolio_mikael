import React from 'react';
import { GraduationCap, Award, BookOpen, Globe } from 'lucide-react';
import { education, certifications } from '../data/portfolioData';

export const Education = () => {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-subtitle">
            <GraduationCap size={14} /> Formação & Qualificações
          </span>
          <h2 className="section-title">
            Educação & <span className="gradient-text">Certificações</span>
          </h2>
          <p className="section-description">
            Sólida formação acadêmica em Engenharia de Software e Mecatrônica, combinada a certificações
            em automação inteligente (RPA) e práticas modernas de qualidade.
          </p>
        </div>

        <div className="education-grid">
          {/* Left Column: Academic Degrees */}
          <div className="education-column">
            <div className="column-header">
              <BookOpen size={20} className="text-cyan" />
              <h3>Formação Acadêmica</h3>
            </div>

            <div className="cards-stack">
              {education.map((item, idx) => (
                <div key={idx} className="glass-card edu-card">
                  <div className="edu-card-top">
                    <span className="badge badge-cyan">{item.status}</span>
                    <span className="edu-period">{item.period}</span>
                  </div>
                  <h4 className="edu-degree">{item.degree}</h4>
                  <div className="edu-institution">{item.institution}</div>
                  <p className="edu-details">{item.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & Languages */}
          <div className="education-column">
            <div className="column-header">
              <Award size={20} className="text-cyan" />
              <h3>Certificações & Especializações</h3>
            </div>

            <div className="cards-stack">
              {certifications.map((cert, idx) => (
                <div key={idx} className="glass-card cert-card">
                  <div className="cert-card-top">
                    <div className="cert-badge-wrap">
                      <Award size={16} className="text-amber" />
                      <span className="badge badge-amber">{cert.issuer}</span>
                    </div>
                  </div>
                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-description">{cert.description}</p>
                </div>
              ))}

              {/* Languages Box */}
              <div className="glass-card languages-card">
                <div className="languages-header">
                  <Globe size={18} className="text-cyan" />
                  <h4>Idiomas</h4>
                </div>
                <div className="languages-list">
                  <div className="language-item">
                    <div className="lang-info">
                      <span className="lang-name">Português</span>
                      <span className="lang-level">Nativo</span>
                    </div>
                    <div className="lang-bar"><div className="lang-fill" style={{ width: '100%' }} /></div>
                  </div>
                  <div className="language-item">
                    <div className="lang-info">
                      <span className="lang-name">Inglês</span>
                      <span className="lang-level">Técnico (Leitura & Escrita sólida)</span>
                    </div>
                    <div className="lang-bar"><div className="lang-fill" style={{ width: '70%' }} /></div>
                  </div>
                  <div className="language-item">
                    <div className="lang-info">
                      <span className="lang-name">Espanhol</span>
                      <span className="lang-level">Básico</span>
                    </div>
                    <div className="lang-bar"><div className="lang-fill" style={{ width: '40%' }} /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
