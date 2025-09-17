import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Analytics Dashboard',
    description: 'A comprehensive analytics platform with real-time data visualization and interactive charts.',
    image: 'https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU4MDc4OTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tech: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    link: '#',
    github: '#'
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'Secure and intuitive mobile banking application with biometric authentication and smart notifications.',
    image: 'https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4MDk3NDIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tech: ['React Native', 'TypeScript', 'Firebase', 'Stripe'],
    link: '#',
    github: '#'
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    description: 'Modern e-commerce solution with advanced filtering, wishlist functionality, and seamless checkout.',
    image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc1ODExMTQyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tech: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'PayPal'],
    link: '#',
    github: '#'
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'Creative portfolio website with smooth animations and interactive elements.',
    image: 'https://images.unsplash.com/photo-1746397545445-f6086889ccc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjBkZXNpZ258ZW58MXx8fHwxNzU4MTA2MzY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tech: ['React', 'Framer Motion', 'Three.js', 'GSAP'],
    link: '#',
    github: '#'
  }
]

export function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const getVisibleProjects = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % projects.length
      visible.push({
        ...projects[index],
        position: i
      })
    }
    return visible
  }

  return (
    <section id="projects" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div className="relative h-[500px] flex items-center justify-center perspective-1000">
            <AnimatePresence mode="wait">
              {getVisibleProjects().map((project) => {
                const isCenter = project.position === 1
                const isLeft = project.position === 0
                const isRight = project.position === 2

                return (
                  <motion.div
                    key={`${project.id}-${currentIndex}`}
                    className="absolute w-80 h-96 bg-card rounded-xl shadow-2xl overflow-hidden cursor-pointer"
                    initial={{
                      x: isLeft ? -400 : isRight ? 400 : 0,
                      z: isCenter ? 0 : -200,
                      scale: isCenter ? 1 : 0.8,
                      rotateY: isLeft ? 45 : isRight ? -45 : 0,
                      opacity: 0
                    }}
                    animate={{
                      x: isLeft ? -300 : isRight ? 300 : 0,
                      z: isCenter ? 0 : -200,
                      scale: isCenter ? 1 : 0.8,
                      rotateY: isLeft ? 45 : isRight ? -45 : 0,
                      opacity: isCenter ? 1 : 0.6
                    }}
                    exit={{
                      x: isLeft ? -400 : isRight ? 400 : 0,
                      opacity: 0
                    }}
                    transition={{
                      duration: 0.6,
                      ease: 'easeInOut'
                    }}
                    whileHover={isCenter ? {
                      scale: 1.05,
                      rotateY: 0,
                      z: 50
                    } : {}}
                    onClick={isCenter ? () => window.open(project.link, '_blank') : undefined}
                  >
                    <div className="h-48 bg-cover bg-center relative"
                         style={{ backgroundImage: `url(${project.image})` }}>
                      <div className="absolute inset-0 bg-black/20" />
                      {isCenter && (
                        <motion.div
                          className="absolute top-4 right-4 flex gap-2"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
                            <ExternalLink className="w-4 h-4 text-white" />
                          </button>
                          <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
                            <Github className="w-4 h-4 text-white" />
                          </button>
                        </motion.div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-8 mt-12">
            <motion.button
              onClick={prevProject}
              className="bg-white shadow-lg p-3 rounded-full hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <div className="flex gap-3">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextProject}
              className="bg-white shadow-lg p-3 rounded-full hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}