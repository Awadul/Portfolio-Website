import { motion } from 'motion/react'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import profileImage from 'figma:asset/645a4180e76a45e83e091c46081caf8d9a4f9b49.png'

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-background overflow-hidden pt-20">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-muted/15"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-background/50 to-primary/5"></div>
      
      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid lg:grid-cols-2 gap-20 items-center"
        >
          {/* Content Section - Now on the left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <motion.p 
                  className="text-muted-foreground text-lg tracking-wide"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Hello, I'm
                </motion.p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                  <motion.span 
                    className="text-primary block"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  >
                    Muhammad
                  </motion.span>
                  <motion.span 
                    className="text-foreground block"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    Awais Abdullah
                  </motion.span>
                </h1>
                
                <motion.h2 
                  className="text-xl md:text-2xl lg:text-3xl text-muted-foreground"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  Full Stack Developer
                </motion.h2>
              </div>
            </motion.div>
            
            <motion.p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Transforming your <span className="text-primary font-medium">scalable</span> and{' '}
              <span className="text-primary font-medium">creative ideas</span> into powerful digital solutions that make an impact.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.button
                className="group bg-primary text-primary-foreground px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToAbout}
              >
                <span className="flex items-center justify-center gap-2">
                  View My Work
                  <motion.span
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
              
              <motion.button
                className="group border-2 border-border px-8 py-4 rounded-xl hover:bg-accent/50 backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <motion.a
              href="https://github.com/Awadul"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-accent/50 transition-all duration-300 group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/muhammad-awais-abdullah-0a588b330/"
                className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-accent/50 transition-all duration-300 group"
                target="_blank"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </motion.a>
              <motion.a
                href="mailto:awaisabdullahm79@gmail.com"
                className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-accent/50 transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Modern Image Section - Now on the right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Main image container with modern styling */}
              <motion.div
                className="relative w-64 h-80 lg:w-80 lg:h-96"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {/* Background blur effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/40 rounded-3xl"></div>
                
                {/* Image with natural blending */}
                <motion.img
                  src={profileImage}
                  alt="Muhammad Awais Abdullah"
                  className="w-full h-full object-contain object-bottom relative z-10 drop-shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))'
                  }}
                />
                
                {/* Decorative gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/80 via-background/40 to-transparent rounded-b-3xl"></div>
              </motion.div>

              {/* Floating skill badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="absolute -left-6 top-20 bg-card/80 backdrop-blur-md border border-border/50 px-4 py-2 rounded-xl shadow-lg"
              >
                <span className="text-sm font-medium text-foreground">React</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.7 }}
                className="absolute -right-6 top-32 bg-card/80 backdrop-blur-md border border-border/50 px-4 py-2 rounded-xl shadow-lg"
              >
                <span className="text-sm font-medium text-foreground">Node.js</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.9 }}
                className="absolute -left-8 bottom-32 bg-card/80 backdrop-blur-md border border-border/50 px-4 py-2 rounded-xl shadow-lg"
              >
                <span className="text-sm font-medium text-foreground">Express</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 2.1 }}
                className="absolute -right-4 bottom-20 bg-card/80 backdrop-blur-md border border-border/50 px-4 py-2 rounded-xl shadow-lg"
              >
                <span className="text-sm font-medium text-foreground">Supabase</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Modern scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.3, repeat: Infinity, repeatType: 'reverse' }}
      >
        <button
          onClick={scrollToAbout}
          className="p-4 rounded-full bg-card/30 backdrop-blur-md border border-border/30 hover:bg-accent/30 transition-all duration-300 group"
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
        </button>
      </motion.div>
    </section>
  )
}