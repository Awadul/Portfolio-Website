import './styles/globals.css'

// Project data
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

// Tech stack data
const technologies = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '🖤' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'GraphQL', icon: '🔗' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'Figma', icon: '✨' }
]

// Social links data
const socialLinks = [
  {
    icon: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>`,
    label: 'GitHub',
    href: '#'
  },
  {
    icon: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>`,
    label: 'LinkedIn',
    href: '#'
  },
  {
    icon: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
    </svg>`,
    label: 'Twitter',
    href: '#'
  },
  {
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
    </svg>`,
    label: 'Email',
    href: 'mailto:hello@example.com'
  }
]

// State
let currentProjectIndex = 0
let isTransitioning = false

// Utility functions
function smoothScrollTo(elementId) {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

function createProjectCard(project, position) {
  const isCenter = position === 1
  const isLeft = position === 0
  const isRight = position === 2

  const card = document.createElement('div')
  card.className = `absolute w-80 h-96 bg-card rounded-xl shadow-2xl overflow-hidden cursor-pointer transition-all duration-600 ease-in-out`
  
  const transform = isLeft ? 'translate3d(-300px, 0, -200px) rotateY(45deg) scale(0.8)' : 
                   isRight ? 'translate3d(300px, 0, -200px) rotateY(-45deg) scale(0.8)' : 
                   'translate3d(0, 0, 0) rotateY(0deg) scale(1)'
  
  const opacity = isCenter ? '1' : '0.6'
  
  card.style.transform = transform
  card.style.opacity = opacity
  card.style.perspective = '1000px'

  card.innerHTML = `
    <div class="h-48 bg-cover bg-center relative" style="background-image: url('${project.image}')">
      <div class="absolute inset-0 bg-black/20"></div>
      ${isCenter ? `
        <div class="absolute top-4 right-4 flex gap-2">
          <button class="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </button>
          <button class="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </button>
        </div>
      ` : ''}
    </div>
    
    <div class="p-6">
      <h3 class="text-xl mb-2">${project.title}</h3>
      <p class="text-muted-foreground text-sm mb-4 line-clamp-3">
        ${project.description}
      </p>
      <div class="flex flex-wrap gap-2">
        ${project.tech.slice(0, 3).map(tech => 
          `<span class="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs">${tech}</span>`
        ).join('')}
      </div>
    </div>
  `

  if (isCenter) {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translate3d(0, -10px, 50px) rotateY(0deg) scale(1.05)'
    })
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translate3d(0, 0, 0) rotateY(0deg) scale(1)'
    })
    
    card.addEventListener('click', () => {
      window.open(project.link, '_blank')
    })
  }

  return card
}

function updateCarousel() {
  if (isTransitioning) return
  
  isTransitioning = true
  const container = document.getElementById('carousel-container')
  container.innerHTML = ''

  // Create visible projects
  for (let i = 0; i < 3; i++) {
    const index = (currentProjectIndex + i) % projects.length
    const card = createProjectCard(projects[index], i)
    container.appendChild(card)
  }

  // Update dots
  const dotsContainer = document.getElementById('carousel-dots')
  dotsContainer.innerHTML = ''
  
  projects.forEach((_, index) => {
    const dot = document.createElement('button')
    dot.className = `w-3 h-3 rounded-full transition-all duration-300 ${
      index === currentProjectIndex ? 'bg-primary' : 'bg-muted'
    }`
    dot.addEventListener('click', () => {
      currentProjectIndex = index
      updateCarousel()
    })
    dotsContainer.appendChild(dot)
  })

  setTimeout(() => {
    isTransitioning = false
  }, 600)
}

function nextProject() {
  if (isTransitioning) return
  currentProjectIndex = (currentProjectIndex + 1) % projects.length
  updateCarousel()
}

function prevProject() {
  if (isTransitioning) return
  currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length
  updateCarousel()
}

function initTechStack() {
  const techGrid = document.getElementById('tech-grid')
  
  technologies.forEach((tech, index) => {
    const techItem = document.createElement('div')
    techItem.className = 'flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 opacity-0 translate-y-4'
    techItem.style.animationDelay = `${index * 100}ms`
    
    techItem.innerHTML = `
      <span class="text-2xl">${tech.icon}</span>
      <span class="text-sm">${tech.name}</span>
    `
    
    // Add intersection observer for animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            techItem.style.opacity = '1'
            techItem.style.transform = 'translateY(0)'
            techItem.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out'
          }, index * 100)
        }
      })
    }, { threshold: 0.1 })
    
    observer.observe(techItem)
    techGrid.appendChild(techItem)
  })
}

function initSocialLinks() {
  const socialContainer = document.getElementById('social-links')
  
  socialLinks.forEach((link, index) => {
    const linkElement = document.createElement('a')
    linkElement.href = link.href
    linkElement.className = 'p-4 bg-card rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-2'
    linkElement.innerHTML = link.icon
    linkElement.setAttribute('aria-label', link.label)
    
    socialContainer.appendChild(linkElement)
  })
}

function initNavigation() {
  const nav = document.getElementById('navigation')
  const mobileMenuBtn = document.getElementById('mobile-menu-btn')
  const mobileMenu = document.getElementById('mobile-menu')
  const mobileBackdrop = document.getElementById('mobile-backdrop')
  const logo = document.getElementById('logo')
  
  // Handle scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('bg-background/80', 'backdrop-blur-md', 'shadow-lg')
      nav.classList.remove('bg-transparent')
    } else {
      nav.classList.remove('bg-background/80', 'backdrop-blur-md', 'shadow-lg')
      nav.classList.add('bg-transparent')
    }
  })

  // Handle navigation clicks
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = e.target.getAttribute('data-target')
      smoothScrollTo(target)
      
      // Close mobile menu if open
      mobileMenu.classList.add('translate-x-full')
      mobileBackdrop.classList.add('opacity-0', 'pointer-events-none')
    })
  })

  // Logo click
  logo.addEventListener('click', () => {
    smoothScrollTo('hero')
  })

  // Mobile menu toggle
  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('translate-x-full')
    
    if (isOpen) {
      mobileMenu.classList.add('translate-x-full')
      mobileBackdrop.classList.add('opacity-0', 'pointer-events-none')
    } else {
      mobileMenu.classList.remove('translate-x-full')
      mobileBackdrop.classList.remove('opacity-0', 'pointer-events-none')
    }
  })

  // Backdrop click
  mobileBackdrop.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full')
    mobileBackdrop.classList.add('opacity-0', 'pointer-events-none')
  })
}

function initHero() {
  const viewWorkBtn = document.getElementById('view-work-btn')
  const scrollDownBtn = document.getElementById('scroll-down-btn')
  
  viewWorkBtn.addEventListener('click', () => {
    smoothScrollTo('about')
  })
  
  scrollDownBtn.addEventListener('click', () => {
    smoothScrollTo('about')
  })
}

function initAnimations() {
  // Add intersection observer for fade-up animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '-50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-up-visible')
      }
    })
  }, observerOptions)

  // Observe elements that should animate
  document.querySelectorAll('section > div, .skill-tag').forEach(el => {
    observer.observe(el)
  })
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initNavigation()
  initHero()
  updateCarousel()
  initTechStack()
  initSocialLinks()
  initAnimations()

  // Carousel controls
  document.getElementById('next-btn').addEventListener('click', nextProject)
  document.getElementById('prev-btn').addEventListener('click', prevProject)

  // Auto-rotate carousel
  setInterval(() => {
    if (!document.hidden && !isTransitioning) {
      nextProject()
    }
  }, 5000)
})