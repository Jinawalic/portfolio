import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Code, Database, Layout } from 'lucide-react';

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX - innerWidth / 2);
    mouseY.set(clientY - innerHeight / 2);
  };

  const x1 = useTransform(mouseX, [-500, 500], [20, -20]);
  const y1 = useTransform(mouseY, [-500, 500], [20, -20]);

  const x2 = useTransform(mouseX, [-500, 500], [-30, 30]);
  const y2 = useTransform(mouseY, [-500, 500], [-30, 30]);

  return (
    <section className="hero" onMouseMove={handleMouseMove}>
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-badge"
          >
            <span className="badge-dot"></span>
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Architecting <span className="text-gradient">Digital</span> Experiences with Precision.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-subtitle"
          >
            Passionate software developer crafting beautiful and functional web experiences. Specialized in modern web technologies and creative problem-solving.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hero-actions"
          >
            <a href="#projects" className="btn btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <a href="https://wa.me/2348089230260" className="btn btn-outline">
              Hire me <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="hero-stats"
          >
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num">4+</span>
              <span className="stat-label">Years of Code</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num">Global</span>
              <span className="stat-label">Client Base</span>
            </div>
          </motion.div>
        </div>

        <div className="hero-visual">
          <motion.div
            className="visual-card card-frontend"
            style={{ x: x1, y: y1 }}
            initial={{ x: 50, opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Layout className="text-primary" />
            <div>
              <h3>Frontend Architecture</h3>
              <p>Next.js • React • Framer</p>
            </div>
          </motion.div>

          <motion.div
            className="visual-card card-backend"
            style={{ x: x2, y: y2 }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Database className="text-primary" />
            <div>
              <h3>System Design</h3>
              <p>Scalable APIs • Distributed Systems</p>
            </div>
          </motion.div>

          <motion.div
            className="visual-card card-main"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="card-header">
              <div className="dots"><span></span><span></span><span></span></div>
              <Code size={16} color="var(--primary)" />
            </div>
            <div className="card-body">
              <div className="line-1"></div>
              <div className="line-2"></div>
              <div className="line-3"></div>
              <div className="line-4"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: var(--header-height);
          background: 
            radial-gradient(circle at 0% 0%, rgba(47, 102, 144, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, rgba(47, 102, 144, 0.08) 0%, transparent 50%);
          position: relative;
          overflow: hidden;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 10;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.6rem 1.2rem;
          background: rgba(47, 102, 144, 0.08);
          color: var(--primary);
          border-radius: 100px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 2rem;
          border: 1px solid rgba(47, 102, 144, 0.1);
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: var(--primary);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--primary);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.4; }
          100% { transform: scale(1); opacity: 1; }
        }

        h1 {
          font-size: 5rem;
          margin-bottom: 1.5rem;
          letter-spacing: -3px;
          line-height: 1;
        }

        .text-gradient {
          background: linear-gradient(135deg, var(--primary), #112d42);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.35rem;
          color: var(--text-muted);
          max-width: 600px;
          margin-bottom: 3.5rem;
          font-weight: 400;
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 5rem;
        }

        .btn {
          padding: 1.2rem 2.4rem;
          border-radius: 14px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          transition: var(--transition-slow);
        }

        .btn-primary {
          background: var(--primary);
          color: white;
          box-shadow: 0 10px 30px rgba(47, 102, 144, 0.2);
        }

        .btn-primary:hover {
          background: var(--primary-dark);
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(47, 102, 144, 0.3);
        }

        .btn-outline {
          border: 1px solid var(--border);
          color: var(--text);
          background: white;
        }

        .btn-outline:hover {
          background: var(--bg-subtle);
          border-color: var(--primary);
          transform: translateY(-5px);
        }

        .hero-stats {
          display: flex;
          align-items: center;
          gap: 3rem;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
        }

        .stat-num {
          font-size: 1.8rem;
          font-weight: 800;
          font-family: var(--font-heading);
          color: var(--primary);
          letter-spacing: -1px;
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 600;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: var(--border);
        }

        /* Visual Elements */
        .hero-visual {
          position: relative;
          height: 600px;
          perspective: 1000px;
        }

        .visual-card {
          position: absolute;
          background: white;
          padding: 1.8rem;
          border-radius: 24px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.06);
          display: flex;
          gap: 1.2rem;
          align-items: center;
          border: 1px solid rgba(0,0,0,0.03);
          backdrop-filter: blur(5px);
        }

        .visual-card h3 { font-size: 1.1rem; margin-bottom: 0.3rem; }
        .visual-card p { font-size: 0.85rem; color: var(--text-muted); }

        .card-frontend { 
          top: 15%; 
          right: -5%; 
          z-index: 4; 
          border-left: 4px solid var(--primary);
        }
        .card-backend { 
          bottom: 15%; 
          left: -5%; 
          z-index: 4;
          border-left: 4px solid var(--primary-light);
        }

        .card-main {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 380px;
          height: 280px;
          flex-direction: column;
          align-items: stretch;
          padding: 0;
          overflow: hidden;
          z-index: 2;
          background: #ffffff;
          border: 1px solid #eef2f6;
          box-shadow: 0 50px 100px rgba(0,0,0,0.1);
        }

        .card-header {
          padding: 1.2rem;
          background: #fcfdfe;
          border-bottom: 1px solid #f1f5f9;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .dots { display: flex; gap: 8px; }
        .dots span { width: 10px; height: 10px; background: #e2e8f0; border-radius: 50%; }
        .dots span:nth-child(1) { background: #ff5f57; }
        .dots span:nth-child(2) { background: #febc2e; }
        .dots span:nth-child(3) { background: #28c840; }

        .card-body {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .card-body div { height: 10px; background: #f1f5f9; border-radius: 6px; }
        .line-1 { width: 90%; background: linear-gradient(90deg, #f1f5f9, #e2e8f0) !important; }
        .line-2 { width: 100%; }
        .line-3 { width: 75%; }
        .line-4 { width: 60%; }

        @media (max-width: 1200px) {
          h1 { font-size: 4rem; }
          .hero-visual { height: 500px; }
          .card-main { width: 320px; height: 240px; }
        }

        @media (max-width: 1024px) {
          .hero-container { grid-template-columns: 1fr; text-align: center; }
          .hero-content { display: flex; flex-direction: column; align-items: center; }
          h1 { font-size: 3.5rem; }
          .hero-visual { display: none; }
          .hero-subtitle { margin-left: auto; margin-right: auto; }
        }

        @media (max-width: 768px) {
          h1 { font-size: 2.8rem; letter-spacing: -1.5px; }
          .hero-subtitle { font-size: 1.1rem; margin-bottom: 2.5rem; }
          .hero-actions { flex-direction: column; width: 100%; gap: 1rem; margin-bottom: 3rem; }
          .btn { justify-content: center; width: 100%; }
          .hero-stats { flex-wrap: wrap; justify-content: center; gap: 1.5rem; }
          .stat-divider { display: none; }
          .stat-item { min-width: 120px; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
