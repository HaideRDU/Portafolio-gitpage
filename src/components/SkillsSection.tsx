import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Code, Gamepad2, Palette, Users, Layers, Box, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const technicalSkills = [
  {
    name: 'Unity',
    icon: Gamepad2,
    description: 'Motor de juego líder para desarrollo 2D/3D',
    level: 'Avanzado',
    projects: ['Life is the Game', 'Robit', 'The Maze'],
  },
  {
    name: 'Unreal Engine',
    icon: Box,
    description: 'Desarrollo de experiencias XR de alta fidelidad',
    level: 'Intermedio-Avanzado',
    projects: ['XR Experience Project'],
  },
  {
    name: 'C#',
    icon: Code,
    description: 'Programación de mecánicas y sistemas de juego',
    level: 'Avanzado',
    projects: ['Life is the Game', 'Robit', 'The Maze'],
  },
  {
    name: 'C++',
    icon: Code,
    description: 'Desarrollo de alto rendimiento y plugins',
    level: 'Intermedio',
    projects: ['XR Experience Project'],
  },
  {
    name: 'HTML/CSS/JS',
    icon: Globe,
    description: 'Desarrollo web y herramientas interactivas',
    level: 'Avanzado',
    projects: ['Portfolio Web', 'UI Tools'],
  },
  {
    name: 'Maya',
    icon: Layers,
    description: 'Modelado 3D y animación',
    level: 'Intermedio',
    projects: ['Assets 3D', 'Animaciones'],
  },
];

const tools = [
  'Unity',
  'Unreal Engine',
  'C++',
  'C#',
  'HTML',
  'CSS',
  'JavaScript',
  'Maya',
  'Blender',
  'Adobe Photoshop',
  'Adobe Illustrator',
  'GitHub',
  'Git',
  'VS Code',
  'Visual Studio',
];

const softSkills = [
  {
    icon: Users,
    title: 'Trabajo en equipo',
    description: 'Colaboración efectiva en proyectos multidisciplinarios',
  },
  {
    icon: Code,
    title: 'Adaptación',
    description: 'Rápido aprendizaje de nuevas tecnologías y herramientas',
  },
  {
    icon: Gamepad2,
    title: 'Game Design',
    description: 'Diseño de mecánicas y balance de jugabilidad',
  },
  {
    icon: Palette,
    title: 'Atención al detalle',
    description: 'Enfoque en calidad y optimización de experiencias',
  },
];

export function SkillsSection() {
  return (
    <div className="space-y-12">
      {/* Technical Skills Cards */}
      <div>
        <h3 className="mb-8 text-center text-foreground">Habilidades Técnicas</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all hover:scale-[1.02] h-full">
                <CardHeader>
                  <div className="flex items-start gap-4 mb-2">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 glow-effect">
                      <skill.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-foreground mb-1">{skill.name}</CardTitle>
                      <Badge variant="outline" className="border-primary/30 text-primary/90 bg-primary/5">
                        {skill.level}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-foreground/70">
                    {skill.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-foreground/60">Usado en:</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.projects.map((project) => (
                        <Badge
                          key={project}
                          variant="secondary"
                          className="bg-muted/50 text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {project}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div>
        <h3 className="mb-8 text-center text-foreground">Habilidades Blandas</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect rounded-xl p-6 text-center hover:scale-105 transition-transform"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-effect">
                <skill.icon size={24} className="text-white" />
              </div>
              <h4 className="mb-2 text-foreground">{skill.title}</h4>
              <p className="text-foreground/70">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
