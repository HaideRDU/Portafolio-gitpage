import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { ExternalLink, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';

interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  videoUrl?: string;
  index: number;
}

export function ProjectCard({
  title,
  role,
  description,
  technologies,
  image,
  link,
  videoUrl,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative glass-effect rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        
        {/* Play button overlay */}
        {videoUrl && (
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="icon"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity glow-effect"
              >
                <Play size={24} className="text-white ml-1" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{role}</DialogDescription>
              </DialogHeader>
              <div className="aspect-video mt-4">
                <iframe
                  width="100%"
                  height="100%"
                  src={videoUrl}
                  title={title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                />
              </div>
              <div className="mt-4">
                <p className="text-foreground/80 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-primary/30 text-primary/90 bg-primary/5"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>

      <div className="relative p-6">
        <div className="mb-2">
          <h3 className="mb-1 text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-primary/80">{role}</p>
        </div>

        <p className="mb-4 text-foreground/70">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="border-primary/30 text-primary/90 bg-primary/5"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {videoUrl && (
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/50 hover:bg-primary/10"
                >
                  <Play size={16} className="mr-2" />
                  Ver video
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>{title}</DialogTitle>
                  <DialogDescription>{role}</DialogDescription>
                </DialogHeader>
                <div className="aspect-video mt-4">
                  <iframe
                    width="100%"
                    height="100%"
                    src={videoUrl}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-foreground/80 mb-4">{description}</p>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-primary/30 text-primary/90 bg-primary/5"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}
          
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors"
            >
              Ver más
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent blur-3xl group-hover:opacity-100 opacity-0 transition-opacity" />
    </motion.div>
  );
}
