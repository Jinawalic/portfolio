import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">
              <a href="#">
                <span className="logo-dot"></span>
                JINAWA TITUS TORHILE
              </a>
            </div>
            <p>Elevating digital experiences through elite craftsmanship.</p>
          </div>

          <div className="footer-socials">
            <a href="" className="social-link"><Twitter size={20} /></a>
            <a href="https://linkedin.com/in/jinawa-titus-torhile-b31178244" className="social-link"><Linkedin size={20} /></a>
            <a href="https://github.com/jinawalic" className="social-link"><Github size={20} /></a>
            <a href="" className="social-link"><Instagram size={20} /></a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Jinawa Titus Torhile. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          padding: 5rem 0 3rem;
          border-top: 1px solid var(--border);
          background: white;
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .footer-brand p {
          color: var(--text-muted);
          margin-top: 1rem;
          max-width: 300px;
        }

        .footer-socials {
          display: flex;
          gap: 1.5rem;
        }

        .social-link {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          transition: var(--transition);
        }

        .social-link:hover {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
          transform: translateY(-5px);
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--text-light);
          font-size: 0.9rem;
        }

        .footer-links {
          display: flex;
          gap: 2rem;
        }

        .footer-links a:hover {
          color: var(--primary);
        }

        @media (max-width: 768px) {
          .footer-top {
            flex-direction: column;
            gap: 2.5rem;
            text-align: center;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
