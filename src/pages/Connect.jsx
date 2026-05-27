import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import '../styles/pages/Connect.css';

const Connect = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message received! Thank you for connecting.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const { personal, social } = portfolioData;

  return (
    <div className="connect-page">
      <div className="connect-container">
        <div className="connect-left">
          <div className="protocol-label">CONTACT PROTOCOL</div>
          <h1>
            Connect with the <span>Neural Network</span>
          </h1>
          <p>
            Initiate a high-bandwidth connection for collaboration, research inquiries, or architectural consulting. My system is ready to process your request.
          </p>

          <div className="contact-info">
            <div className="info-item">
              <span className="info-icon">@</span>
              <div>
                <h4>SYSTEM MAIL</h4>
                <p>{social.email}</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">♦</span>
              <div>
                <h4>UPTIME</h4>
                <p>24/7 Monitoring Enabled</p>
              </div>
            </div>
          </div>

          <div className="social-icons">
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title="GitHub"
            >
              ⚙️
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title="LinkedIn"
            >
              💼
            </a>
            <a href={`mailto:${social.email}`} className="social-icon" title="Email">
              ✉️
            </a>
          </div>
        </div>

        <div className="connect-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">IDENTITY NAME</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="e.g. Satoshi Nakamoto"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">ELECTRONIC MAIL</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="user@node.network"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">INQUIRY SUBJECT</label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="Technical Architecture Review"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">TRANSMISSION DATA</label>
              <textarea
                id="message"
                name="message"
                placeholder="Define your requirements here..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              ▶ TRANSMIT MESSAGE
            </button>
          </form>

          <div className="system-status">
            <span className="status-indicator">●</span>
            <span className="status-text">SYSTEM STATUS: {personal.systemStatus}</span>
            <span className="latency">LATENCY: {personal.latency}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
