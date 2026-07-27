import React, { useState } from 'react';

// 1. Sub-component for rendering skills
function SkillList({ skills = [], isDarkMode = false }) {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    justifyContent: 'center',
    marginTop: '1.25rem',
    paddingTop: '1.25rem',
    borderTop: isDarkMode ? '1px solid #374151' : '1px solid #f3f4f6',
  };

  const badgeStyle = {
    padding: '0.35rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.8rem',
    fontWeight: '600',
    backgroundColor: isDarkMode ? '#312e81' : '#e0e7ff',
    color: isDarkMode ? '#c7d2fe' : '#4338ca',
  };

  return (
    <div style={containerStyle}>
      {skills.map((skill, index) => (
        <span key={index} style={badgeStyle}>
          {skill}
        </span>
      ))}
    </div>
  );
}

export default function UserProfile({
  name = "Elena Rostova",
  bio = "Product Designer & Digital Artist. Passionate about building intuitive user interfaces, sustainable design system architecture, and specialty espresso.",
  avatarUrl = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
  skills = ["UI/UX Design", "React", "Design Systems", "Figma"],
  initialDarkMode = false,
}) {
  const [isDarkMode, setIsDarkMode] = useState(initialDarkMode);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  const containerStyle = {
    maxWidth: '380px',
    margin: '2rem auto',
    padding: '2rem',
    borderRadius: '16px',
    backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
    boxShadow: isDarkMode 
      ? '0 10px 25px rgba(0, 0, 0, 0.5)' 
      : '0 10px 25px rgba(0, 0, 0, 0.08)',
    textAlign: 'center',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    border: isDarkMode ? '1px solid #374151' : '1px solid #eaeaea',
    transition: 'all 0.3s ease',
  };

  const buttonStyle = {
    padding: '0.4rem 0.8rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.8rem',
    fontWeight: '600',
    marginBottom: '1rem',
    backgroundColor: isDarkMode ? '#374151' : '#f3f4f6',
    color: isDarkMode ? '#f9fafb' : '#1f2937',
  };

  const imageStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '1rem',
    border: isDarkMode ? '3px solid #818cf8' : '3px solid #6366f1',
  };

  const nameStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: isDarkMode ? '#f9fafb' : '#1f2937',
    margin: '0 0 0.5rem 0',
  };

  const bioStyle = {
    fontSize: '0.95rem',
    lineHeight: '1.5',
    color: isDarkMode ? '#9ca3af' : '#4b5563',
    margin: 0,
  };

  return (
    <div style={containerStyle}>
      <button onClick={toggleDarkMode} style={buttonStyle}>
        {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      <div>
        <img 
          src={avatarUrl} 
          alt={`${name}'s profile`} 
          style={imageStyle} 
        />
        <h1 style={nameStyle}>{name}</h1>
        <p style={bioStyle}>{bio}</p>

        <SkillList skills={skills} isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}