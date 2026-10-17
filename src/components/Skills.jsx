import React, { useState } from 'react';
import { 
  Server, 
  Database, 
  Layout, 
  Terminal, 
  Search, 
  Sparkles, 
  CheckCircle 
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Icon mapping
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Server': return <Server size={18} />;
      case 'Database': return <Database size={18} />;
      case 'Layout': return <Layout size={18} />;
      case 'Terminal': return <Terminal size={18} />;
      default: return <Sparkles size={18} />;
    }
  };

  // Filter skills
  const filteredCategories = skillCategories.map(cat => {
    const filteredSkills = cat.skills.filter(skill => {
      const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            skill.badge.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            skill.level.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
    return { ...cat, skills: filteredSkills };
  }).filter(cat => {
    if (selectedCategory !== 'all' && cat.category !== selectedCategory) {
      return false;
    }
    return cat.skills.length > 0;
  });

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-subtitle">
            <Sparkles size={14} /> Competências Técnicas
          </span>
          <h2 className="section-title">
            Arsenal Tecnológico & <span className="gradient-text">Especialidades</span>
          </h2>
          <p className="section-description">
            Conjunto de ferramentas e linguagens aplicadas em cenários de alta criticidade, 
            integração corporativa e desenvolvimento web moderno de alta escala.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="skills-filter-bar">
          <div className="category-pills">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`filter-pill ${selectedCategory === 'all' ? 'active' : ''}`}
            >
              Todas as Áreas
            </button>
            {skillCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat.category)}
                className={`filter-pill ${selectedCategory === cat.category ? 'active' : ''}`}
              >
                {getCategoryIcon(cat.icon)}
                <span>{cat.category}</span>
              </button>
            ))}
          </div>

          <div className="skills-search-box">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Filtrar por skill (ex: Java, Camel, PL/SQL, BDD, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="skills-search-input"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-categories-container">
          {filteredCategories.length === 0 ? (
            <div className="no-skills-found glass-card">
              <p>Nenhuma tecnologia encontrada para a busca "{searchQuery}".</p>
            </div>
          ) : (
            filteredCategories.map((category, catIdx) => (
              <div key={catIdx} className="skill-category-block">
                <div className="category-header">
                  <div className="cat-icon-wrap">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <h3 className="category-title">{category.category}</h3>
                  <span className="category-count">{category.skills.length} itens</span>
                </div>

                <div className="skills-card-grid">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="glass-card skill-card">
                      <div className="skill-card-top">
                        <span className="skill-badge">{skill.badge}</span>
                        <CheckCircle size={15} className="skill-check-icon" />
                      </div>
                      <h4 className="skill-name">{skill.name}</h4>
                      <div className="skill-level-row">
                        <span className="skill-level-label">Nível de Atuação:</span>
                        <span className="skill-level-value">{skill.level}</span>
                      </div>
                      <div className="skill-progress-bar">
                        <div 
                          className="skill-progress-fill" 
                          style={{
                            width: skill.level.includes('Avançado') || skill.level.includes('Especialista') || skill.level.includes('Certificado') ? '92%' : '78%'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
