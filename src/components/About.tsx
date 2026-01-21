import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section bg-subtle">
      <div className="container about-container">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="about-image"
        >
          <div className="image-wrapper">
            <div className="abstract-shape"></div>
            <img src="/images/Profile.jpg" alt="Profile" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="about-text"
        >
          <span className="section-tag">About Me</span>
          <h2>I bridge the gap between <span className="text-primary">design</span> and <span className="text-primary">engineering</span>.</h2>

          <p>
            With over 4 years of experience, I've developed a keen eye for detail and a love for creating elegant, efficient solutions.

            My journey in web development started with curiosity and has evolved into expertise. I specialize in building responsive web applications that provide exceptional user experiences while maintaining robust backend functionality.

            What sets me apart is my holistic approach to development. I don't just write code; I create solutions that align with business objectives and user needs. My experience spans from startups to established companies, giving me a versatile perspective on different development environments.
          </p>

          <div className="about-grid">
            <div className="about-grid-item">
              <h4>Visionary</h4>
              <p>Thinking 3 steps ahead in every architectural decision.</p>
            </div>
            <div className="about-grid-item">
              <h4>Detail Oriented</h4>
              <p>Because the small things are what make a product premium.</p>
            </div>
          </div>
          <div className="mt-6">
            <a href="/assets/Jinawa_Titus_Resume.pdf" download="Jinawa_Titus_Resume.pdf" className="btn btn-primary">Download CV</a>
          </div>
        </motion.div>
      </div>

      <style>{`
        .about-container {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 6rem;
          align-items: center;
        }

        .section-tag {
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
          font-size: 0.8rem;
          color: var(--primary);
          margin-bottom: 1rem;
          display: block;
        }

        h2 {
          font-size: 3rem;
          margin-bottom: 2rem;
          line-height: 1.1;
        }

        .about-text p {
          font-size: 1.1rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }

        .about-image {
          position: relative;
        }

        .image-wrapper {
          position: relative;
          z-index: 2;
        }

        .image-wrapper img {
          width: 100%;
          border-radius: 24px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.1);
          filter: grayscale(20%);
          transition: var(--transition-slow);
        }

        .image-wrapper img:hover {
          filter: grayscale(0%);
          transform: scale(1.02);
        }

        .abstract-shape {
          position: absolute;
          width: 120%;
          height: 120%;
          top: -10%;
          left: -10%;
          background: radial-gradient(circle, rgba(47, 102, 144, 0.1) 0%, transparent 70%);
          z-index: -1;
          border-radius: 50%;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 3rem;
        }

        .about-grid-item h4 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: var(--text);
        }

        .about-grid-item p {
          font-size: 0.9rem;
          line-height: 1.4;
        }

        @media (max-width: 1024px) {
          .about-container { grid-template-columns: 1fr; gap: 4rem; }
          h2 { font-size: 2.5rem; }
        }
      `}</style>
    </section>
  );
};

export default About;
