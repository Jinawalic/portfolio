import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container contact-container">
        <div className="contact-info">
          <span className="section-tag">Contact</span>
          <h2>Let's build something <span className="text-primary">extraordinary</span> together.</h2>
          <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>

          <div className="contact-methods">
            <div className="method">
              <div className="method-icon"><Mail size={20} /></div>
              <div>
                <h4>Email</h4>
                <p>jinawatitus387@gmail.com</p>
              </div>
            </div>
            <div className="method">
              <div className="method-icon"><MapPin size={20} /></div>
              <div>
                <h4>Location</h4>
                <p>Abuja, Nigeria</p>
              </div>
            </div>
            <div className="method">
              <div className="method-icon"><Phone size={20} /></div>
              <div>
                <h4>Phone</h4>
                <p>+234 8089230260</p>
              </div>
            </div>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="contact-form"
        >
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="your@email.com" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Tell me about your project..." rows={5} required></textarea>
          </div>
          <button type="submit" className="btn btn-primary submit-btn">
            Send Message <Send size={18} />
          </button>
        </motion.form>
      </div>

      <style>{`
        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: start;
        }

        .contact-info h2 {
          font-size: 3rem;
          margin-bottom: 2rem;
        }

        .contact-info p {
          font-size: 1.1rem;
          color: var(--text-muted);
          margin-bottom: 3rem;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .method {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .method-icon {
          width: 50px;
          height: 50px;
          background: var(--bg-subtle);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
        }

        .method h4 {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-muted);
          margin-bottom: 0.2rem;
        }

        .method p {
          margin-bottom: 0;
          font-weight: 600;
          color: var(--text);
        }

        .contact-form {
          background: white;
          padding: 1rem;
          border-radius: 20px;
          border: 1px solid var(--border);
          box-shadow: 0 30px 60px rgba(0,0,0,0.05);
        }

        .form-group {
          margin-bottom: 1rem;
        }

        .form-group label {
          display: block;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--text);
        }

        .form-group input, .form-group textarea {
          width: 100%;
          padding: 1rem;
          border: 1px solid var(--border);
          border-radius: 12px;
          font-family: inherit;
          font-size: 1rem;
          transition: var(--transition);
        }

        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 4px rgba(47, 102, 144, 0.1);
        }

        .submit-btn {
          width: 100%;
          justify-content: center;
          padding: 1.2rem;
          font-size: 1.1rem;
        }

        @media (max-width: 1024px) {
          .contact-container { grid-template-columns: 1fr; gap: 4rem; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
