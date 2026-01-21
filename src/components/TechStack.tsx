import { motion } from 'framer-motion';

const TechStack = () => {
  const techs = [
    { name: 'React', level: 'Advanced', category: 'Frontend' },
    { name: 'TypeScript', level: 'Advanced', category: 'Frontend' },
    { name: 'Next.js', level: 'Intermediate', category: 'Frontend' },
    { name: 'Node.js', level: 'Advanced', category: 'Backend' },
    { name: 'PHP', level: 'Advanced', category: 'Backend' },
    { name: 'MySQL', level: 'Advanced', category: 'Backend' },
    { name: 'Tailwind CSS', level: 'Advanced', category: 'Styling' },
  ];

  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="section-tag">Tech Stack</span>
          <h2>Top-tier tools for <span className="text-primary">top-tier</span> products.</h2>
        </motion.div>

        <div className="tech-grid">
          {techs.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="tech-card"
            >
              <div className="tech-info">
                <h3>{tech.name}</h3>
                <span className="tech-category">{tech.category}</span>
              </div>
              <div className="tech-status">
                <span className="status-label">{tech.level}</span>
                <div className="status-bar">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: tech.level === 'Expert' ? '100%' : tech.level === 'Advanced' ? '80%' : '60%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="status-fill"
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .section-header {
          text-align: center;
          margin-bottom: 5rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
        }

        .tech-card {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          border: 1px solid var(--border);
          transition: var(--transition);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .tech-card:hover {
          background: var(--bg-subtle);
          border-color: var(--primary);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .tech-info h3 {
          font-size: 1.25rem;
          margin-bottom: 0.25rem;
        }

        .tech-category {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .tech-status {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .status-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--primary);
        }

        .status-bar {
          height: 4px;
          background: #e2e8f0;
          border-radius: 2px;
          overflow: hidden;
        }

        .status-fill {
          height: 100%;
          background: var(--primary);
          border-radius: 2px;
        }

        @media (max-width: 768px) {
          .tech-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default TechStack;
