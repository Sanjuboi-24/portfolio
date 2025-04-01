import React from 'react';
import './Content.css';

function Content() {
  return (
    <div className="content">
      <section id="experience" className="section">
        <h2>Experience</h2>
        <div className="card">
          <h3>Graduate Teaching Assistant</h3>
          <p>Illinois State University | 08/2024 - Present</p>
          <ul>
            <li>Delivered lectures for IT168 & IT166</li>
            <li>Tutored students</li>
            <li>Graded 50+ students' work</li>
          </ul>
        </div>
        <div className="card">
          <h3>Student Intern</h3>
          <p>Purview Services | 03/2022 - 05/2022</p>
          <ul>
            <li>Full stack developer</li>
            <li>Built 2PayuBack website</li>
            <li>Led team of 5 interns</li>
          </ul>
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {[
            "LLM training and hosting",
            "Spring Boot/Micro Services",
            "React JS",
            "Hosting on Docker",
            "Full Stack development",
            "API Integration",
            "Hadoop Ecosystem",
            "Advanced Reasoning"
          ].map(skill => (
            <span key={skill} className="skill">{skill}</span>
          ))}
        </div>
      </section>

      <section id="education" className="section">
        <h2>Education</h2>
        <div className="card">
          <h3>MS Computer Science</h3>
          <p>Illinois State University | 06/2025</p>
          <p>CGPA: 3.75</p>
        </div>
        <div className="card">
          <h3>BS Computer Science</h3>
          <p>Gitam University | 05/2023</p>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <ul className="projects-list">
          <li>AI chatbot workshop using Mistral LLM</li>
          <li>Radix Trie implementation</li>
          <li>Yolo v5/v7 object detection</li>
        </ul>
      </section>
    </div>
  );
}

export default Content;