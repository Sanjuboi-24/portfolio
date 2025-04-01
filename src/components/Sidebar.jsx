import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>Sanjay C.</h1>
        <p>Full Stack Developer</p>
      </div>
      <nav className="sidebar-nav">
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
      </nav>
      <a href="https://github.com/yourusername" target="_blank" className="github-btn">
        GitHub
      </a>
    </div>
  );
}

export default Sidebar;