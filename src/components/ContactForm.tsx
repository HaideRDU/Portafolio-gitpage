import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('¡Mensaje enviado! Te contactaré pronto.');
    setFormData({ name: '', email: '', projectType: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+57 317 284 0034',
      href: 'tel:+573172840034',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'rochahaider2@gmail.com',
      href: 'mailto:rochahaider2@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Bogotá D.C., Colombia',
      href: null,
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div>
          <h3 className="mb-4 text-foreground">Información de contacto</h3>
          <p className="text-foreground/70 mb-8">
            ¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para proyectos freelance, colaboraciones y nuevas oportunidades.
          </p>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 glow-effect">
                  <info.icon size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-foreground/60 mb-1">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-foreground">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="glass-effect rounded-xl p-6">
          <h4 className="mb-4 text-foreground">Enlaces rápidos</h4>
          <div className="space-y-3">
            <a
              href="https://www.linkedin.com/in/haider-rocha/"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors text-foreground/80 hover:text-primary"
            >
              LinkedIn →
            </a>
            <a
              href="https://github.com/HaideRDU"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors text-foreground/80 hover:text-primary"
            >
              GitHub →
            </a>
            <a
              href="https://itch.io"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors text-foreground/80 hover:text-primary"
            >
              Itch.io →
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <form onSubmit={handleSubmit} className="glass-effect rounded-xl p-8 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre completo</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Tu nombre"
              required
              className="bg-input-background border-primary/20 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="tu@email.com"
              required
              className="bg-input-background border-primary/20 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="projectType">Tipo de proyecto</Label>
            <Select
              value={formData.projectType}
              onValueChange={(value) => setFormData({ ...formData, projectType: value })}
            >
              <SelectTrigger className="bg-input-background border-primary/20 focus:border-primary">
                <SelectValue placeholder="Selecciona un tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="videogame">Desarrollo de Videojuego</SelectItem>
                <SelectItem value="xr">Experiencia XR/VR</SelectItem>
                <SelectItem value="web">Desarrollo Web</SelectItem>
                <SelectItem value="consulting">Consultoría</SelectItem>
                <SelectItem value="other">Otro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Mensaje</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Cuéntame sobre tu proyecto..."
              required
              rows={5}
              className="bg-input-background border-primary/20 focus:border-primary resize-none"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-accent glow-hover"
          >
            <Send className="mr-2" size={20} />
            Enviar mensaje
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
