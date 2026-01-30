import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    title: 'Practicante de Desarrollo',
    company: 'Life is the Game',
    period: '2023 - 2024',
    description: 'Desarrollo de mecánicas de juego y optimización de sistemas interactivos',
    responsibilities: [
      'Diseño e implementación de interfaces de usuario intuitivas',
      'Balance de objetos y mecánicas de juego',
      'Corrección de bugs y optimización de rendimiento',
      'Colaboración con equipos multidisciplinarios',
    ],
  },
];

export function ExperienceTimeline() {
  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative pl-8 md:pl-12 border-l-2 border-primary/30"
        >
          <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-[9px] glow-effect" />
          
          <div className="glass-effect rounded-xl p-6 hover:scale-[1.02] transition-transform">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="mb-1 text-foreground">{exp.title}</h3>
                <div className="flex items-center gap-2 text-primary">
                  <Briefcase size={16} />
                  <span>{exp.company}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-foreground/60 glass-effect px-3 py-1 rounded-full">
                <Calendar size={14} />
                <span>{exp.period}</span>
              </div>
            </div>

            <p className="mb-4 text-foreground/80">{exp.description}</p>

            <ul className="space-y-2">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2 text-foreground/70">
                  <span className="text-accent mt-1">▹</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
