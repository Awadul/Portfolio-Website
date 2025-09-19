import { motion } from 'motion/react'
import { useRef } from 'react'

export function About() {
  const ref = useRef(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl text-center mb-16"
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate developer with a keen eye for design and a love for creating 
                seamless digital experiences. With expertise in modern web technologies, 
                I bridge the gap between design and functionality.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach combines clean, efficient code with thoughtful user experience design. 
                I believe in the power of simplicity and the importance of attention to detail 
                in crafting products that users love.
              </p>

              <motion.div
                className="flex flex-wrap gap-3 pt-4"
                variants={itemVariants}
              >
                <span className="skill-tag">Backend Development</span>
                <span className="skill-tag">Frontend Development</span>
                <span className="skill-tag">Database Design</span>
                <span className="skill-tag">API Development</span>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                className="bg-gradient-to-br from-accent to-muted rounded-2xl p-8 shadow-lg"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Experience</span>
                    <span className="text-2xl">1+ Years</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Projects</span>
                    <span className="text-2xl">4+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Happy Clients</span>
                    <span className="text-2xl">3+</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}