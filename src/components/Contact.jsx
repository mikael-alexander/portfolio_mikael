import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  MessageSquare, 
  Sparkles 
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [messageForm, setMessageForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sentSuccess, setSentSuccess] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Create WhatsApp or mailto message
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(messageForm.subject || 'Contato via Portfólio')}&body=${encodeURIComponent(`Nome: ${messageForm.name}\nEmail: ${messageForm.email}\n\nMensagem:\n${messageForm.message}`)}`;
    
    window.location.href = mailtoUrl;
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 5000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-subtitle">
            <Mail size={14} /> Vamos Conversar
          </span>
          <h2 className="section-title">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="section-description">
            Seja para oportunidades em Engenharia de Software Fullstack / Backend, consultoria técnica ou projetos sob demanda.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-cards">
            {/* Email Card with Copy Button */}
            <div className="glass-card contact-card">
              <div className="contact-card-icon bg-cyan-glow">
                <Mail size={22} className="text-cyan" />
              </div>
              <div className="contact-card-content">
                <span className="contact-label">E-mail Profissional</span>
                <span className="contact-value">{personalInfo.email}</span>
              </div>
              <button 
                onClick={() => copyToClipboard(personalInfo.email)}
                className={`btn btn-sm ${copiedEmail ? 'btn-primary' : 'btn-outline'}`}
                title="Copiar e-mail"
              >
                {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedEmail ? 'Copiado!' : 'Copiar'}</span>
              </button>
            </div>

            {/* WhatsApp Card */}
            <div className="glass-card contact-card">
              <div className="contact-card-icon bg-emerald-glow">
                <MessageSquare size={22} className="text-emerald" />
              </div>
              <div className="contact-card-content">
                <span className="contact-label">WhatsApp Direto</span>
                <span className="contact-value">{personalInfo.phone}</span>
              </div>
              <a 
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                <Send size={14} />
                <span>Conversar</span>
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="glass-card contact-card">
              <div className="contact-card-icon bg-blue-glow">
                <LinkedinIcon size={22} className="text-blue" />
              </div>
              <div className="contact-card-content">
                <span className="contact-label">LinkedIn</span>
                <span className="contact-value">in/mikael-silva-835029115</span>
              </div>
              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                <span>Acessar</span>
              </a>
            </div>

            {/* GitHub Card */}
            <div className="glass-card contact-card">
              <div className="contact-card-icon bg-cyan-glow">
                <GithubIcon size={22} className="text-cyan" />
              </div>
              <div className="contact-card-content">
                <span className="contact-label">GitHub</span>
                <span className="contact-value">github.com/mikael-alexander</span>
              </div>
              <a 
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                <span>Acessar</span>
              </a>
            </div>

            {/* Location Card */}
            <div className="glass-card contact-card">
              <div className="contact-card-icon bg-indigo-glow">
                <MapPin size={22} className="text-indigo" />
              </div>
              <div className="contact-card-content">
                <span className="contact-label">Localização & Regime</span>
                <span className="contact-value">{personalInfo.location}</span>
                <span className="contact-subvalue">Disponível para Remoto / Híbrido</span>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Contact Form */}
          <div className="glass-card contact-form-card">
            <div className="form-card-header">
              <Sparkles size={20} className="text-cyan" />
              <h3>Envie uma Mensagem Direta</h3>
            </div>
            <p className="form-card-desc">
              Preencha o formulário abaixo para abrir diretamente seu cliente de e-mail com a mensagem formatada.
            </p>

            <form onSubmit={handleFormSubmit} className="contact-form">
              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="name">Seu Nome</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Ex: Carlos Silva"
                    value={messageForm.name}
                    onChange={(e) => setMessageForm({ ...messageForm, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Seu E-mail</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="Ex: carlos@empresa.com"
                    value={messageForm.email}
                    onChange={(e) => setMessageForm({ ...messageForm, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Assunto</label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="Ex: Oportunidade Full Stack Java / React"
                  value={messageForm.subject}
                  onChange={(e) => setMessageForm({ ...messageForm, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  placeholder="Olá Mikael, gostaria de conversar sobre..."
                  value={messageForm.message}
                  onChange={(e) => setMessageForm({ ...messageForm, message: e.target.value })}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-full">
                <Send size={16} />
                <span>Enviar Mensagem</span>
              </button>

              {sentSuccess && (
                <div className="form-success-banner">
                  <Check size={16} />
                  <span>Mensagem preparada com sucesso!</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
