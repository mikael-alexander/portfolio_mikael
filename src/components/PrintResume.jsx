import React from 'react';
import { personalInfo, experiences, education, certifications } from '../data/portfolioData';

export const PrintResume = () => {
  return (
    <div className="print-only print-resume-document">
      {/* Header */}
      <header className="print-header">
        <h1 className="print-name">{personalInfo.name}</h1>
        <div className="print-title">{personalInfo.role}</div>
        <div className="print-contact-row">
          <span>{personalInfo.location}</span>
          <span>•</span>
          <span>Tel: {personalInfo.phone}</span>
          <span>•</span>
          <span>E-mail: {personalInfo.email}</span>
        </div>
        <div className="print-contact-row">
          <span>LinkedIn: {personalInfo.linkedin}</span>
          <span>•</span>
          <span>GitHub: {personalInfo.github}</span>
        </div>
      </header>

      {/* Resumo Profissional */}
      <section className="print-section">
        <h2 className="print-section-title">RESUMO PROFISSIONAL</h2>
        <p className="print-summary-text">
          Engenheiro de Software Full Stack com sólida trajetória no ciclo completo de desenvolvimento corporativo, arquitetura de integração e sustentação de sistemas de missão crítica (L3). Especialista no ecossistema Java (Spring Boot) e .NET, com proficiência em barramentos de integração corporativa via Apache Camel (EIP), rotinas críticas de banco de dados (Oracle PL/SQL, PostgreSQL) e frontends modernos (React, Angular, Vue.js, TypeScript). Experiência consolidada na resolução de incidentes de causa raiz, garantia de SLAs, automação de processos (RPA – Automation Anywhere), qualidade contínua com BDD (Cucumber) e esteiras CI/CD com Jenkins e SonarQube. Aplicação consistente de Design Patterns (GoF/SOLID) e Clean Code em contextos de alta criticidade operacional.
        </p>
      </section>

      {/* Experiência Profissional */}
      <section className="print-section">
        <h2 className="print-section-title">EXPERIÊNCIA PROFISSIONAL</h2>
        <div className="print-exp-list">
          {experiences.map((exp, idx) => (
            <div key={idx} className="print-exp-item">
              <div className="print-exp-header">
                <div>
                  <strong className="print-exp-company">{exp.company}</strong>
                  <div className="print-exp-role">{exp.role}</div>
                </div>
                <div className="print-exp-period">{exp.period}</div>
              </div>
              <ul className="print-bullets">
                {exp.achievements.map((ach, achIdx) => (
                  <li key={achIdx}>{ach}</li>
                ))}
              </ul>
              <div className="print-techs-line">
                <strong>Tecnologias: </strong>
                {exp.techs.join(', ')}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Formação Acadêmica */}
      <section className="print-section">
        <h2 className="print-section-title">FORMAÇÃO ACADÊMICA</h2>
        <div className="print-edu-list">
          {education.map((edu, idx) => (
            <div key={idx} className="print-edu-item">
              <div className="print-edu-header">
                <strong>{edu.degree}</strong>
                <span>{edu.period}</span>
              </div>
              <div className="print-edu-institution">{edu.institution}</div>
              <p className="print-edu-desc">{edu.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Habilidades Técnicas */}
      <section className="print-section">
        <h2 className="print-section-title">HABILIDADES TÉCNICAS</h2>
        <div className="print-skills-block">
          <p><strong>• Linguagens e Frameworks: </strong>Java (Spring Boot / Framework, JSP, Lambdas &amp; Streams), .NET / C#, React, Angular, Vue.js, TypeScript, JavaScript (ES6+), HTML5, CSS3.</p>
          <p><strong>• Bancos de Dados &amp; Integração: </strong>Oracle PL/SQL (Packages .PKS / .PKB), PostgreSQL (Modelagem &amp; Tuning), MySQL, Apache Camel (EIP), APIs RESTful, Swagger / OpenAPI.</p>
          <p><strong>• DevOps &amp; Automação: </strong>Git, GitHub, GitLab, GitFlow, Jenkins (CI/CD), SonarQube, Docker, Kubernetes, Automation Anywhere (Advanced RPA Professional).</p>
          <p><strong>• Qualidade de Software: </strong>Testes Unitários, Testes de Integração, Cucumber (BDD), Selenium, Testes Automatizados de Regressão.</p>
        </div>
      </section>

      {/* Certificações e Cursos Complementares */}
      <section className="print-section">
        <h2 className="print-section-title">CERTIFICAÇÕES E CURSOS COMPLEMENTARES</h2>
        <ul className="print-cert-list">
          {certifications.map((cert, idx) => (
            <li key={idx}>
              <strong>{cert.title}</strong> — {cert.issuer} · <em>{cert.description}</em>
            </li>
          ))}
        </ul>
      </section>

      {/* Idiomas */}
      <section className="print-section">
        <h2 className="print-section-title">IDIOMAS</h2>
        <p className="print-languages-line">
          <strong>• Inglês:</strong> Intermediário (leitura fluente de documentações técnicas e escrita corporativa) &nbsp;|&nbsp; <strong>Espanhol:</strong> Básico
        </p>
      </section>
    </div>
  );
};
