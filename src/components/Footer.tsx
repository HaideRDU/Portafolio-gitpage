import { motion } from 'motion/react';
import { ArrowUp, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-primary/20 bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center glow-effect">
                <span className="text-white">HR</span>
              </div>
            </div>
            <p className="text-foreground/70 mb-4">
              Desarrollador de videojuegos e ingeniero multimedia especializado en experiencias interactivas.
            </p>
            <p className="text-foreground/60">
              Bogotá D.C., Colombia
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-foreground">Navegación</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-foreground">Contacto</h4>
            <ul className="space-y-2 text-foreground/70">
              <li>
                <a href="mailto:rochahaider2@gmail.com" className="hover:text-primary transition-colors">
                  rochahaider2@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+573172840034" className="hover:text-primary transition-colors">
                  +57 317 284 0034
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/60 text-center md:text-left">
            © 2025 Haider Danilo Rocha Urrego. Hecho con <Heart className="inline w-4 h-4 text-accent" /> en Colombia
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/haider-rocha/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/HaideRDU"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://tirdee.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              Itch.io
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-8 right-8 z-40"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="rounded-full w-12 h-12 bg-gradient-to-br from-primary to-accent glow-effect shadow-lg"
          >
            <ArrowUp size={20} />
          </Button>
        </motion.div>
      )}
    </footer>
  );
}
