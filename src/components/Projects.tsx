import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'University SIWES Platform',
      category: 'Education / Training',
      description: 'A platform for students to apply for and manage their SIWES (Supervised Industrial Work Experience) placements.',
      image: '/images/siwes.JPG',
      tags: ['php', 'mysql', 'bootstrap'],
      link: 'https://siwes.nsuk.edu.ng',
    },
    {
      title: 'Laundry Web Application',
      category: 'SaaS / Data',
      description: 'A web application for laundry management.',
      image: '/images/laundry.JPG',
      tags: ['React', 'Node.js', 'MySQL'],
      link: 'https://laundary-zeta.vercel.app/',
      github: 'https://github.com/jinawalic/laundry'
    }
  ];

  return (
    <section id="projects" className="section bg-subtle">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Featured Work</span>
          <h2>Selected <span className="text-primary">Masterpieces</span>.</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="project-card"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.link} className="icon-link"><ExternalLink size={20} /></a>
                    <a href={project.github} className="icon-link"><Github size={20} /></a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 3rem;
        }

        .project-card {
          background: white;
          border-radius: 24px;
          overflow: hidden;
          transition: var(--transition-slow);
          border: 1px solid var(--border);
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 40px 80px rgba(0,0,0,0.1);
          border-color: var(--primary-light);
        }

        .project-image {
          position: relative;
          height: 240px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-slow);
        }

        .project-card:hover .project-image img {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(47, 102, 144, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition);
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-links {
          display: flex;
          gap: 1.5rem;
        }

        .icon-link {
          width: 50px;
          height: 50px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          transition: var(--transition);
        }

        .icon-link:hover {
          background: var(--primary);
          color: white;
          transform: scale(1.1);
        }

        .project-content {
          padding: 2.5rem;
        }

        .project-category {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--primary);
          font-weight: 700;
          margin-bottom: 0.75rem;
          display: block;
        }

        .project-content h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .project-content p {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tag {
          padding: 0.4rem 0.8rem;
          background: var(--bg-subtle);
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
