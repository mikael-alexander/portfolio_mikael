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
          Desenvolvedor de Software Full Stack com sólida trajetória no ciclo completo de desenvolvimento, arquitetura de sistemas e sustentação de plataformas de missão crítica de Nível 3 (L3). Especialista no desenvolvimento backend utilizando Java (Spring Framework, Lambdas & Streams), ecossistema .NET, engenharia de integração com Apache Camel (EIP) e soluções avançadas de banco de dados via Oracle PL/SQL (Packages .PKS / .PKB) e PostgreSQL. Ampla vivência em desenvolvimento frontend moderno com React, Angular, Vue.js, TypeScript, JavaScript, HTML5 e CSS3. Experiência consolidada em diagnóstico aprofundado de falhas e resolução de bugs de causa raiz em ambientes legados e modernos, atuando sob a metodologia GitFlow, práticas de qualidade com Cucumber (BDD), testes unitários e de integração, análise de código com SonarQube, automação de processos (RPA com Automation Anywhere) e pipelines de CI/CD com Jenkins.
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
          <p><strong>• Linguagens e Frameworks: </strong>Java (Spring Boot / Framework, JSP, Lambdas & Streams), .NET / C#, React, Angular, Vue.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, jQuery.</p>
          <p><strong>• Bancos de Dados & Integração: </strong>Oracle PL/SQL (Packages .PKS / .PKB), PostgreSQL (Modelagem & Tuning), MySQL, Apache Camel (EIP - Enterprise Integration Patterns), APIs RESTful, Swagger / OpenAPI.</p>
          <p><strong>• Ferramentas, DevOps & Automação: </strong>Git, GitHub, GitLab, GitFlow, Jenkins (Pipelines CI/CD), SonarQube, Docker, Kubernetes, Automation Anywhere (Advanced RPA Professional).</p>
          <p><strong>• Qualidade de Software: </strong>Testes Unitários, Testes de Integração, Cucumber (BDD), Selenium, Testes Automatizados de Regressão.</p>
        </div>
      </section>

      {/* Cursos Complementares & Certificações */}
      <section className="print-section">
        <h2 className="print-section-title">CERTIFICAÇÕES E CURSOS COMPLEMENTARES</h2>
        <ul className="print-cert-list">
          {certifications.map((cert, idx) => (
            <li key={idx}>
              <strong>{cert.title}</strong> – {cert.issuer} ({cert.description})
            </li>
          ))}
        </ul>
      </section>

      {/* Idiomas */}
      <section className="print-section">
        <h2 className="print-section-title">IDIOMAS</h2>
        <p className="print-languages-line">
          <strong>• Inglês: </strong>Técnico (Leitura: intermediária/avançada, escrita: intermediária, fala: básica)<br />
          <strong>• Espanhol: </strong>Básico (Leitura: intermediária, escrita: básica, fala: básica)
        </p>
      </section>
    </div>
  );
};
