import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Play, Trash2, HelpCircle } from 'lucide-react';
import { terminalCommands } from '../data/portfolioData';

export const Terminal = () => {
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'Mikael Terminal Shell v2.4 (React 19 / Antigravity). Digite "help" ou clique nos comandos rápidos abaixo.'
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalBodyRef = useRef(null);

  const quickCommands = ['help', 'bio', 'skills', 'exp', 'projects', 'education', 'contact'];

  const executeCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      return;
    }

    const output = terminalCommands[trimmed] || `Comando não reconhecido: "${trimmed}". Digite "help" para ver a lista de comandos disponíveis.`;

    setHistory(prev => [
      ...prev,
      { type: 'command', text: `$ ${trimmed}` },
      { type: 'response', text: output }
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(inputVal);
    setInputVal('');
  };

  const handleQuickClick = (e, cmd) => {
    e.preventDefault();
    executeCommand(cmd);
  };

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <section id="terminal" className="section terminal-section">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-subtitle">
            <TerminalIcon size={14} /> Modo Engenheiro
          </span>
          <h2 className="section-title">
            Terminal Interativo <span className="gradient-text">CLI</span>
          </h2>
          <p className="section-description">
            Experimente interagir com meu perfil diretamente via linha de comando ou clicando nos atalhos rápidos.
          </p>
        </div>

        <div className="terminal-container glass-card">
          {/* Terminal Window Header */}
          <div className="terminal-header">
            <div className="window-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <span className="terminal-title">mikael@fullstack-box: ~ (zsh)</span>
            <button 
              type="button"
              onClick={() => setHistory([])} 
              className="terminal-clear-btn"
              title="Limpar Terminal"
            >
              <Trash2 size={14} />
              <span>Limpar</span>
            </button>
          </div>

          {/* Quick Command Suggestions */}
          <div className="terminal-quick-actions">
            <span className="quick-label">
              <HelpCircle size={13} /> Ações Rápidas:
            </span>
            <div className="quick-buttons">
              {quickCommands.map((cmd) => (
                <button
                  key={cmd}
                  type="button"
                  onClick={(e) => handleQuickClick(e, cmd)}
                  className="quick-cmd-btn"
                >
                  <Play size={10} />
                  <span>{cmd}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Terminal Output Body */}
          <div ref={terminalBodyRef} className="terminal-body">
            {history.map((item, idx) => (
              <div key={idx} className={`terminal-line line-${item.type}`}>
                {item.type === 'command' ? (
                  <span className="prompt-prefix">mikael@dev:~$ </span>
                ) : null}
                <pre className="terminal-text">{item.text}</pre>
              </div>
            ))}
          </div>

          {/* Terminal Input Prompt */}
          <form onSubmit={handleSubmit} className="terminal-input-row">
            <span className="prompt-symbol">mikael@dev:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="digite um comando (ex: help, bio, skills, exp, contact)..."
              className="terminal-input"
            />
            <button type="submit" className="terminal-submit-btn" aria-label="Executar comando">
              <CornerDownLeft size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
