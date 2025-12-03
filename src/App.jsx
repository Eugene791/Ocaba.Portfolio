import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaUser,
  FaGraduationCap,
  FaProjectDiagram,
  FaTools,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function App() {
  const portfolioItems = [
    {
      id: 1,
      title: "CPU Scheduling Simulator",
      description: "Interactive tool that visualizes how CPU algorithms work.",
      link: "https://cpu-scheduling-algorithms.netlify.app/",
      image: "/sjf.jfif",
    },
    {
      id: 2,
      title: "E-commerce Shop",
      description: "Online store with product catalog and cart system.",
      link: "https://jake-finalproject.vercel.app/",
      image: "/ecom.jfif",
    },
  ];

  return (
    <>
      {/* ====== INLINE CSS ====== */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        body {
          background: linear-gradient(135deg, #0f172a, #020617);
          color: white;
        }

        .portfolio-container {
          min-height: 100vh;
          display: flex;
        }

        .sidebar {
          width: 320px;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          padding: 30px;
          text-align: center;
          border-right: 1px solid rgba(255,255,255,0.2);
        }

 .profile-img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 4px solid #38bdf8;
  object-fit: cover;
  box-shadow: 0 0 20px #38bdf8;
  display: block;
  margin: 0 auto;
}


        .name {
          margin-top: 15px;
          font-size: 26px;
          font-weight: bold;
        }

        .location {
          margin-top: 6px;
          color: #cbd5f5;
          display: flex;
          justify-content: center;
          gap: 6px;
          align-items: center;
        }

        .contact-buttons {
          margin-top: 25px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .contact-buttons a {
          padding: 10px;
          text-decoration: none;
          color: white;
          background: rgba(255,255,255,0.15);
          border-radius: 8px;
          transition: 0.3s;
        }

        .contact-buttons a:hover {
          background: #38bdf8;
          color: black;
        }

        .content {
          flex: 1;
          padding: 40px;
          display: flex;
          flex-direction: column;
          gap: 30px;
          overflow-y: auto;
        }

        .glass-card {
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          padding: 25px;
          border: 1px solid rgba(255,255,255,0.2);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .glass-card h2 {
          margin-bottom: 15px;
          color: #38bdf8;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .glass-card p,
        .glass-card li {
          color: #e5e7eb;
          line-height: 1.6;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
        }

        .project-card {
          background: rgba(255,255,255,0.12);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.2);
        }

        .project-card img {
          width: 100%;
          height: 160px;
          object-fit: cover;
        }

        .project-info {
          padding: 15px;
        }

        .project-info a {
          display: inline-block;
          margin-top: 10px;
          text-decoration: none;
          color: white;
          background: #2563eb;
          padding: 6px 14px;
          border-radius: 6px;
          transition: 0.3s;
        }

        .project-info a:hover {
          background: #1e40af;
        }

        .skills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .skills span {
          background: rgba(255,255,255,0.2);
          padding: 6px 14px;
          border-radius: 20px;
          transition: 0.3s;
        }

        .skills span:hover {
          background: #38bdf8;
          color: black;
        }

        @media (max-width: 900px) {
          .portfolio-container {
            flex-direction: column;
          }
          .sidebar {
            width: 100%;
          }
        }
      `}</style>

      {/* ====== UI ====== */}
      <div className="portfolio-container">
        {/* SIDEBAR */}
        <aside className="sidebar">
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            src="/Ocaba.jfif"
            className="profile-img"
          />

          <h1 className="name">Eugene D. Ocaba</h1>
          <p className="location">
            <FaMapMarkerAlt /> Pilipog, Cordova, Cebu, Philippines
          </p>

          <div className="contact-buttons">
            <a href="mailto:eugeneocaba47@gmail.com">
              <FaEnvelope /> Email
            </a>
            <a href="tel:+639667962553">
              <FaPhone /> Phone
            </a>
            <a href="https://www.facebook.com/akatsukieugene.duterte">
              <FaFacebook /> Facebook
            </a>
            <a href="#">
              <FaInstagram /> Instagram
            </a>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="content">
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card"
          >
            <h2>
              <FaUser /> About Me
            </h2>
            <p>
              I am passionate about Information Technology, especially in
              technical support, troubleshooting, and web development. I improve
              my skills through self-learning and projects.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-card"
          >
            <h2>
              <FaGraduationCap /> Education
            </h2>
            <ul>
              <li>2023 – Present | Cordova Public College</li>
              <li>2021 – 2023 | Babag 1 Senior High School</li>
              <li>2017 – 2021 | Babag 1 National High School</li>
              <li>2011 – 2017 | Pilipog Elementary School</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="glass-card"
          >
            <h2>
              <FaProjectDiagram /> Projects
            </h2>

            <div className="projects-grid">
              {portfolioItems.map((project) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  key={project.id}
                  className="project-card"
                >
                  <img src={project.image} alt={project.title} />
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank">
                      View Project
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="glass-card"
          >
            <h2>
              <FaTools /> Skills
            </h2>

            <div className="skills">
              {[
                "HTML",
                "CSS",
                "Tailwind",
                "JavaScript",
                "React",
                "PHP",
                "MySQL",
                "Git",
              ].map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </motion.section>
        </main>
      </div>
    </>
  );
}
