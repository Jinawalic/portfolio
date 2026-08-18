import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="logo"
                >
                    <a href="#">
                        <span className="logo-dot"></span>
                        Jinawa Titus
                    </a>
                </motion.div>

                {/* Desktop Menu */}
                <div className="nav-links desktop-only">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                    <motion.a
                        href="#contact"
                        className="nav-cta"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Work with me
                    </motion.a>
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-only mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mobile-menu mobile-only"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="https://wa.me/2348089230260" className="mobile-cta" onClick={() => setIsMobileMenuOpen(false)}>
                            WhatsApp me
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: var(--transition);
        }

        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          padding: 1rem 0;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo a {
          font-family: var(--font-heading);
          font-weight: 800;
          letter-spacing: 2px;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .logo-dot {
          width: 8px;
          height: 8px;
          background-color: var(--primary);
          border-radius: 50%;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }

        .nav-links a {
          font-weight: 500;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .nav-links a:hover {
          color: var(--primary);
        }

        .nav-cta {
          background-color: var(--primary);
          color: white !important;
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .nav-cta:hover {
          background-color: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(47, 102, 144, 0.2);
        }

        .mobile-only {
          display: none;
        }

        @media (max-width: 768px) {
          .desktop-only {
            display: none;
          }
          .mobile-only {
            display: block;
          }
          .mobile-toggle {
            cursor: pointer;
            color: var(--text);
          }
          .mobile-menu {
            background: white;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            border-bottom: 1px solid var(--border);
          }
          .mobile-menu a {
            font-size: 1.1rem;
            font-weight: 500;
          }
          .mobile-cta {
            background: var(--primary);
            color: white;
            padding: 0.8rem;
            text-align: center;
            border-radius: 8px;
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
