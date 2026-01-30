import { motion } from 'motion/react';
import { Linkedin, Github, Mail, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:text-[#0077B5]',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      color: 'hover:text-white',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:rochahaider2@gmail.com',
      color: 'hover:text-accent',
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-2xl opacity-30" />
          <div className="relative glass-effect rounded-2xl p-8 border-2 border-primary/20">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1556438064-2d7646166914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGdhbWUlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjA5NjEyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Haider Danilo Rocha Urrego"
              className="w-full rounded-xl object-cover aspect-square"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div>
          <h3 className="mb-4 text-foreground">Sobre mí</h3>
          <div className="space-y-4 text-foreground/80">
            <p>
              Soy Haider Danilo Rocha Urrego, ingeniero multimedia con experiencia en el desarrollo de videojuegos y experiencias XR. Me apasiona diseñar mecánicas interactivas, interfaces fluidas y entornos que inspiren.
            </p>
            <p>
              Domino Unity, Unreal Engine, HTML, CSS y Maya, y me especializo en crear experiencias inmersivas que combinan tecnología, arte y jugabilidad. Mi enfoque está en el detalle, la optimización y la innovación constante.
            </p>
            <p className="text-accent">
              Disponible para proyectos freelance y colaboraciones XR.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-foreground">Conéctate conmigo</h4>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 glass-effect px-4 py-2 rounded-lg transition-all ${link.color} hover:scale-105`}
              >
                <link.icon size={20} />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        <Button
          className="bg-gradient-to-r from-primary to-accent glow-hover"
          onClick={() => {
            const element = document.querySelector('#contact');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <Mail className="mr-2" size={20} />
          Contactar ahora
        </Button>
      </motion.div>
    </div>
  );
}
