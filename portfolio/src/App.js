import { useState } from "react";
import "./App.css";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaAws,
  FaDatabase,
  FaTrophy,
  FaCertificate,
  FaCode,
  FaStar,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import profileimg from "./assets/profile1.png";

export default function App() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "Personal Portfolio Website",
      short: "Professional responsive portfolio",
      details:
        "Designed and developed a responsive personal portfolio to showcase skills, projects, and achievements with a clean UI and structured layout.",
    },
    {
      title: "Weather Application",
      short: "Real-time weather using API",
      details:
        "Built a weather application that fetches real-time weather data including temperature, humidity, and wind speed using a public API.",
    },
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <h2>Akshitha Nampalli</h2>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>



<section className="hero">
  <img src={profileimg} alt="profile" className="profile" draggable="false"  onContextMenu={(e) => e.preventDefault()}
/>

  <h1 className="fade-in">Akshitha Nampalli</h1>

  <p className="slide-up">
    Computer Science Undergraduate | Aspiring Software Developer
  </p>

  <div className="contact-links">
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=akshithachikky14@gmail.com"
      target="_blank"
      rel="noreferrer"
      className="icon-link"
    >
      <FaEnvelope /> Email
    </a>

    <a
      href="https://www.linkedin.com/in/akshitha-nampalli-a2945629b/"
      target="_blank"
      rel="noreferrer"
      className="icon-link"
    >
      <FaLinkedin /> Connect
    </a>

    <a
      href="https://github.com/AkshithaNampalli"
      target="_blank"
      rel="noreferrer"
      className="icon-link"
    >
      <FaGithub /> GitHub
    </a>
  </div>
</section>




      {/* About */}
      <section className="section" id="about">
        <h2>About Me</h2>
        <p>
I am a Computer Science undergraduate at SR University with a strong academic
foundation and hands-on experience in frontend development and Python-based
applications. I enjoy designing clean, responsive, and user-centric interfaces
while continuously improving my problem-solving and technical skills.
<br /><br />
My interests include full-stack development, cloud fundamentals, and building
scalable applications that solve real-world problems. I am actively seeking
opportunities to learn, collaborate, and grow as a software professional.
</p>

      </section>

      {/* Education */}
{/* Education */}
<section className="section dark" id="education">
  <h2>Education</h2>

  <div className="education-grid">
    <div className="edu-card">
      <h3>B.Tech – Computer Science</h3>
      <p className="inst">SR University, Warangal</p>
      <p className="year">2023 – Present</p>
      <p className="score">CGPA: 8.6</p>

      <p className="focus">Key Coursework</p>
      <ul>
        <li>Data Structures & Algorithms</li>
        <li>Database Management Systems</li>
        <li>Object Oriented Programming</li>
        <li>Computer Networks</li>
        <li>Operating Systems</li>
      </ul>
    </div>

    <div className="edu-card">
      <h3>Intermediate – BiPC</h3>
      <p className="inst">Sachdeva Junior College</p>
      <p className="year">2021 – 2023</p>
      <p className="score">Percentage: 84.7%</p>

      <p className="focus">Subjects</p>
      <ul>
        <li>Biology</li>
        <li>Physics</li>
        <li>Chemistry</li>
      </ul>
    </div>
  </div>
</section>




{/* Skills */}
<section className="section" id="skills">
  <h2>Skills</h2>

  <div className="skills-grid">
    <SkillCategory
      title="Programming Languages"
      skills={[
        { name: "Python", icon: <FaPython /> },
        { name: "Java", icon: <FaJava /> },
      ]}
    />

    <SkillCategory
      title="Web Development"
      skills={[
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React", icon: <FaReact /> },
      ]}
    />

    <SkillCategory
      title="Databases"
      skills={[
        { name: "SQL", icon: <SiMysql /> },
        { name: "DBMS", icon: <FaDatabase /> },
      ]}
    />

    <SkillCategory
      title="Cloud & Tools"
      skills={[
        { name: "AWS", icon: <FaAws /> },
      ]}
    />
  </div>
</section>


      {/* Projects */}
      <section className="section dark" id="projects">
        <h2>Projects</h2>
        <div className="projects">
          {projects.map((p, i) => (
            <div className="card" key={i}>
              <h3>{p.title}</h3>
              <p>{p.short}</p>
              <button onClick={() => setActiveProject(p)}>Read More</button>
            </div>
          ))}
        </div>
      </section>



{/* Achievements */}
<section className="section dark" id="achievements">
  <h2>Achievements</h2>

  <div className="achievements-grid">
    <div className="achievement-card">
      <FaStar className="ach-icon" />
      <h3>Strong Academic Performance</h3>
      <p>
        Maintaining a CGPA of <strong>8.6</strong> in B.Tech Computer Science at
        SR University.
      </p>
    </div>

    <div className="achievement-card">
      <FaCode className="ach-icon" />
      <h3>Project Development</h3>
      <p>
        Designed and developed multiple academic and personal projects using
        Python, React, and web technologies.
      </p>
    </div>

    <div className="achievement-card">
      <FaCertificate className="ach-icon" />
      <h3>Certifications</h3>
      <p>
        Completed certifications in programming, web development, and cloud
        fundamentals.
      </p>
    </div>

    <div className="achievement-card">
      <FaTrophy className="ach-icon" />
      <h3>Consistent Skill Building</h3>
      <p>
        Actively improving problem-solving and development skills through
        continuous learning and practice.
      </p>
    </div>
  </div>
</section>

<section className="section dark" id="contact">
  <h2>Contact</h2>
  <p className="contact-subtext">
    Interested in collaborating or discussing opportunities? Reach out using the form or links below.
  </p>

  <div className="contact-card">
    {/* <form className="contact-form">
      <input type="text" placeholder="Subject" className="contact-input" required />
      <input type="email" placeholder="Your Email" className="contact-input" required />
      <textarea placeholder="Write your message..." className="contact-textarea" required></textarea>
      <button type="submit" className="contact-btn">📨 Send Message</button>
    </form> */}

    <div className="contact-links">
      <a
        href="https://www.linkedin.com/in/akshitha-nampalli-a2945629b/"
        target="_blank"
        rel="noreferrer"
        className="icon-link"
      >
        <FaLinkedin /> Connect
      </a>
      <a
        href="https://github.com/AkshithaNampalli"
        target="_blank"
        rel="noreferrer"
        className="icon-link"
      >
        <FaGithub /> GitHub
      </a>
    </div>
  </div>
</section>


      {/* Modal */}
      {activeProject && (
        <div className="modal" onClick={() => setActiveProject(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h3>{activeProject.title}</h3>
            <p>{activeProject.details}</p>
            <button onClick={() => setActiveProject(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}


function SkillCategory({ title, skills }) {
  return (
    <div className="skill-category">
      <h3>{title}</h3>

      <div className="skill-list">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <span className="icon">{skill.icon}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}


// function SkillCard({ title, skills }) {
//   return (
//     <div className="skill-card">
//       <h3>{title}</h3>
//       {skills.map((s, i) => (
//         <div key={i} className="skill-bar">
//           <span>{s}</span>
//           <div className="bar"></div>
//         </div>
//       ))}
//     </div>
//   );
// }
