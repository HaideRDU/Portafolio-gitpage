import { motion } from 'motion/react';
import { GraduationCap, Award, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const education = [
  {
    degree: 'Ingeniería Multimedia',
    institution: 'Universidad de San Buenaventura',
    period: '2018 - 2023',
    description: 'Formación integral en desarrollo multimedia, videojuegos y experiencias interactivas.',
    image: 'https://www.usbbog.edu.co/wp-content/uploads/2022/08/home-galeria-15.jpg',
    projects: [
      { name: 'The Maze', link: '#projects' },
      { name: 'Proyectos académicos', link: '#projects' },
    ],
    gallery: [
      //'https://images.unsplash.com/photo-1706885452328-1ddaf64fe0be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYxMDEyMTgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
     // 'https://images.unsplash.com/photo-1520509414578-d9cbf09933a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml0eSUyMGdhbWUlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjEwNDUxMTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],        
  },
  {
    degree: 'Unity Developer Bootcamp',
    institution: 'Generation Colombia',
    period: '2023',
    description: 'Bootcamp intensivo especializado en desarrollo de videojuegos con Unity.',
    image: 'https://colombia.generation.org/wp-content/uploads/2021/09/Generation_Colombia_logo_NEW-BLUE.svg',
    projects: [
      { name: 'Unity Certification', link: 'https://www.linkedin.com/in/haider-rocha/overlay/1758298675031/single-media-viewer?type=DOCUMENT&profileId=ACoAADphr9oBGrw1iywphvR7DAh6o3yHxbw7kZs&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BnL%2Bgar2WT0yl2sbfGchRSg%3D%3D' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1646579885920-0c9a01cb7078?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBib290Y2FtcCUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NjEwNjUxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1556438064-2d7646166914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGdhbWUlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjA5NjEyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
];

export function Education() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {education.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="glass-effect rounded-xl overflow-hidden hover:scale-[1.02] transition-transform group"
        >
          <div className="relative h-48 overflow-hidden">
            <ImageWithFallback
              src={edu.image}
              alt={edu.institution}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute top-4 right-4">
              {/* <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="icon"
                    className="rounded-full bg-background/80 hover:bg-background backdrop-blur-sm"
                  >
                    <ImageIcon size={20} />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>{edu.institution}</DialogTitle>
                    <DialogDescription>Galería de fotos</DialogDescription>
                  </DialogHeader>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {edu.gallery.map((img, idx) => (
                      <ImageWithFallback
                        key={idx}
                        src={img}
                        alt={`${edu.institution} - ${idx + 1}`}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </DialogContent>
              </Dialog> */}
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 glow-effect">
                {index === 0 ? (
                  <GraduationCap size={24} className="text-white" />
                ) : (
                  <Award size={24} className="text-white" />
                )}
              </div>
              <div className="flex-1">
                <h4 className="mb-1 text-foreground">{edu.degree}</h4>
                <p className="text-primary mb-2">{edu.institution}</p>
                <p className="text-foreground/60">{edu.period}</p>
              </div>
            </div>

            <p className="text-foreground/70 mb-4">{edu.description}</p>

            <div>
              {/* <p className="text-foreground/60 mb-2">Proyectos relacionados:</p> */}
              <div className="flex flex-wrap gap-2">
                {edu.projects.map((project, idx) => (
                  <a
                    key={idx}
                    href={project.link}
                    className="group/link"
                  >
                    <Badge
                      variant="outline"
                      className="border-primary/30 bg-primary/5 text-foreground hover:bg-primary/10 hover:border-primary/50 transition-all cursor-pointer"
                    >
                      {project.name}
                      <ExternalLink size={12} className="ml-1 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </Badge>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
