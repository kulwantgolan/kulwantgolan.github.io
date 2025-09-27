import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/mock';
import { MapPin, Mail, Phone, ArrowRight, ExternalLink } from 'lucide-react';
import '../styles/portfolio.css';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = portfolioData.navigation.map(nav => nav.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Frontend-only form handling with mailto
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:${portfolioData.hero.contact.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    window.location.href = mailtoLink;
    setFormStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setFormStatus(''), 3000);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navigation-header">
        <div className="navigation-container">
          <div className="navigation-logo">
            {portfolioData.hero.name.firstName}
          </div>
          <ul className="navigation-menu">
            {portfolioData.navigation.map((item) => (
              <li key={item.name}>
                <button
                  className={`navigation-link ${
                    activeSection === item.href.substring(1) ? 'active' : ''
                  }`}
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-wordmark">
              <h1 className="hero-name">
                <span className="hero-first-name">{portfolioData.hero.name.firstName}</span>
                <div className="hero-divider"></div>
                <span className="hero-last-name">{portfolioData.hero.name.lastName}</span>
              </h1>
            </div>
            
            <h2 className="hero-tagline">{portfolioData.hero.tagline}</h2>
            <p className="hero-description">{portfolioData.hero.description}</p>
            
            <div className="hero-badges">
              {portfolioData.hero.badges.map((badge, index) => (
                <span key={index} className="badge">{badge}</span>
              ))}
            </div>
            
            <div className="hero-contact">
              <div className="contact-item">
                <MapPin size={16} />
                <span>{portfolioData.hero.contact.location}</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>{portfolioData.hero.contact.email}</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>{portfolioData.hero.contact.phone}</span>
              </div>
            </div>
            
            <div className="hero-cta">
              <button 
                className="btn-primary"
                onClick={() => scrollToSection(portfolioData.hero.cta.primary.target)}
              >
                {portfolioData.hero.cta.primary.text}
              </button>
              <button 
                className="btn-secondary"
                onClick={() => scrollToSection(portfolioData.hero.cta.secondary.target)}
              >
                {portfolioData.hero.cta.secondary.text}
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container">
          <h2 className="section-title">{portfolioData.about.title}</h2>
          <div className="about-content">
            {portfolioData.about.content.map((paragraph, index) => (
              <p key={index} className="about-paragraph">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-subtle">
        <div className="container">
          <h2 className="section-title">{portfolioData.skills.title}</h2>
          <div className="skills-grid">
            {Object.entries(portfolioData.skills.categories).map(([key, category]) => (
              <div key={key} className="skill-category">
                <h3 className="skill-category-title">{category.title}</h3>
                <div className="skill-items">
                  {category.items.map((item, index) => (
                    <div key={index} className="skill-item">{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding">
        <div className="container">
          <h2 className="section-title">{portfolioData.experience.title}</h2>
          <div className="experience-timeline">
            {portfolioData.experience.positions.map((position, index) => (
              <div key={index} className="experience-card">
                <div className="timeline-marker"></div>
                <div className="experience-content">
                  <div className="experience-header">
                    <h3 className="experience-company">{position.company}</h3>
                    <span className="experience-period">{position.period}</span>
                  </div>
                  <h4 className="experience-role">{position.role}</h4>
                  <p className="experience-description">{position.description}</p>
                  {position.highlights.length > 0 && (
                    <ul className="experience-highlights">
                      {position.highlights.map((highlight, hIndex) => (
                        <li key={hIndex}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                  {position.recognition && (
                    <div className="experience-recognition">
                      <strong>Recognition: </strong>{position.recognition}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section-padding bg-subtle">
        <div className="container">
          <h2 className="section-title">{portfolioData.certifications.title}</h2>
          <div className="certifications-grid">
            {portfolioData.certifications.items.map((cert, index) => (
              <div key={index} className="certification-card">
                <span className="certification-name">{cert.name}</span>
                <span className="certification-year">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding">
        <div className="container">
          <h2 className="section-title">{portfolioData.education.title}</h2>
          <div className="education-grid">
            {portfolioData.education.degrees.map((degree, index) => (
              <div key={index} className="education-card">
                <h3 className="education-institution">{degree.institution}</h3>
                <h4 className="education-degree">{degree.degree}</h4>
                <div className="education-details">
                  <span className="education-year">{degree.year}</span>
                  <span className="education-grade">{degree.grade}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-subtle">
        <div className="container">
          <h2 className="section-title">{portfolioData.contact.title}</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-details">
                <div className="contact-item">
                  <Phone size={20} />
                  <span>{portfolioData.hero.contact.phone}</span>
                </div>
                <div className="contact-item">
                  <Mail size={20} />
                  <span>{portfolioData.hero.contact.email}</span>
                </div>
                <div className="contact-item">
                  <MapPin size={20} />
                  <span>{portfolioData.hero.contact.location}</span>
                </div>
              </div>
            </div>
            
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary">
                Send Message
              </button>
              {formStatus === 'success' && (
                <div className="form-success">Message sent successfully!</div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-name">
              {portfolioData.hero.name.firstName} {portfolioData.hero.name.lastName}
            </div>
            <div className="footer-tagline">{portfolioData.hero.tagline}</div>
            <div className="footer-contact">
              <span>{portfolioData.hero.contact.location}</span>
              <span>•</span>
              <span>{portfolioData.hero.contact.email}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;