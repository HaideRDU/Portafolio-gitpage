import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { Education } from './components/Education';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { Button } from './components/ui/button';
import { Download } from 'lucide-react';
import { Toaster } from './components/ui/sonner';
import { motion } from 'motion/react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './components/ui/dialog';
import { useState } from 'react';

// Importa tu PDF local aquí (coloca el archivo PDF en la carpeta /public o /assets)
import cvPdf from './assets/Haider_Rocha_CV.pdf';


const projects = [
  {
    title: 'Vitalis',
    role: 'Programador',
    description: 'Desarrolo completo para Game Jam interna del BootCamp de Generations.Desarrollo de mecánicas de juego, interacciones entre UI.',
    technologies: ['Unity', 'C#', 'UI/UX', 'Game Design'],
    image: 'https://img.itch.zone/aW1nLzIxNjY2NjQ0LnBuZw==/original/sSNiK0.png',
    link: 'https://andreszapatad.itch.io/vitalis',
    //videoUrl: 'https://img.itch.zone/aW1nLzIxNjY2NjQ0LnBuZw==/original/sSNiK0.png',
  },
  { 
    title: 'Robit',
    role: 'Programador',
    description: 'Desarrollo completo para IEEE Unisabana Game Jam 2024. Implementación de mecánicas de plataformas 2D, sistema de física y diseño de niveles.',
    technologies: ['Unity', 'C#', 'Physics', 'Level Design'],
    image: 'https://img.itch.zone/aW1nLzE2Mzg1ODUxLnBuZw==/original/CQk6uN.png',
    link: 'https://avgrat.itch.io/robit',
    videoUrl: 'https://www.youtube.com/embed/5JIpVSGXHCI?si=lO6L6xzGQnvEn9yE',
  },
  {
    title: 'The Maze',
    role: 'Programador y Level Designer',
    description: 'Desarrollo para CEIMA Jam 2023. Programación de mecánicas principales, diseño de niveles con escalado de dificultad y sistema de navegación.',
    technologies: ['Unity', 'C#', 'Procedural Generation', 'AI'],
    image: 'https://img.itch.zone/aW1nLzEzNzc4OTE4LmpwZw==/original/kedvTf.jpg',
    link: 'https://avgrat.itch.io/the-maze',
    //videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  
];

export default function App() {
  const [cvDialogOpen, setCvDialogOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main>
        <Hero />

        {/* Projects Section */}
        <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="mb-4 bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
                Proyectos Destacados
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Experiencias interactivas que combinan tecnología, diseño y creatividad
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} {...project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 md:py-32 bg-gradient-to-b from-transparent via-muted/20 to-transparent">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="mb-4 bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
                Experiencia Laboral
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
                Mi trayectoria profesional en el desarrollo de videojuegos y experiencias interactivas
              </p>
              <Button
                variant="outline"
                className="border-primary/50 hover:bg-primary/10"
                onClick={() => setCvDialogOpen(true)}
              >
                <Download className="mr-2" size={20} />
                Descargar CV
              </Button>
            </motion.div>

            <ExperienceTimeline />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <AboutSection />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 md:py-32 bg-gradient-to-b from-transparent via-muted/20 to-transparent">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="mb-4 bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
                Habilidades y Tecnologías
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Stack tecnológico y competencias profesionales
              </p>
            </motion.div>

            <SkillsSection />
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="mb-4 bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
                Educación
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Formación académica y certificaciones
              </p>
            </motion.div>

            <Education />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-transparent via-muted/20 to-transparent">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="mb-4 bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
                Contacto
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                ¿Listo para crear algo increíble juntos? ¡Hablemos!
              </p>
            </motion.div>

            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
      <Toaster />
      
      {/* CV Dialog Modal */}
      <Dialog open={cvDialogOpen} onOpenChange={setCvDialogOpen}>
        <DialogContent className="max-w-[95vw] w-full h-[95vh] p-0 overflow-hidden">
          <DialogHeader className="p-4 pb-2">
            <DialogTitle className="text-2xl bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
              Curriculum Vitae - Haider Danilo Rocha Urrego
            </DialogTitle>
          </DialogHeader>
          <div className="w-full h-[calc(100%-4rem)] px-4 pb-4">
            <iframe 
              // URL del PDF de internet (comentada para usar PDF local)
              // src="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
              
              // Descomenta la línea de abajo y usa la variable 'cvPdf' cuando importes tu PDF local
              src={cvPdf}  // ← Reemplaza esta línea cuando tengas el PDF local
              className="w-full h-full rounded-lg border border-primary/20"
              title="CV - Haider Danilo Rocha Urrego"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}