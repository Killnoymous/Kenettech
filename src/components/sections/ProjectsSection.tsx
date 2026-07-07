import { Reveal } from '../ui/Reveal';
import { ArrowUpRight } from 'lucide-react';
import React, { Suspense, useState } from 'react';
const Galaxy = React.lazy(() => import('../ui/Galaxy'));
const MemoizedGalaxy = React.memo(Galaxy);

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const filters = ['All Projects', 'Design', 'Development', 'Mobile'];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A Modern Shopping Experience With Seamless Checkout",
      tags: ["React", "Node.js", "Stripe"],
      category: "Development",
      image: "/projects/ecommerce.png"
    },
    {
      title: "Brand Identity",
      description: "Complete Rebrand For A Tech Startup",
      tags: ["Branding", "UI/UX", "Strategy"],
      category: "Design",
      image: "/projects/brand.png"
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics Platform With Real-Time Insights",
      tags: ["Vue.js", "D3.js", "PostgreSQL"],
      category: "Development",
      image: "/projects/saas.png"
    },
    {
      title: "Mobile Banking App",
      description: "Secure And Intuitive Banking On The Go",
      tags: ["React Native", "Security", "FinTech"],
      category: "Mobile",
      image: "/projects/banking.png"
    },
    {
      title: "Portfolio Website",
      description: "Minimalist Creative Portfolio For A Digital Artist",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      category: "Design",
      image: "/projects/portfolio.png"
    },
    {
      title: "Fitness Tracker",
      description: "Comprehensive Health Tracking With Personalized Insights",
      tags: ["Swift", "HealthKit", "Firebase"],
      category: "Mobile",
      image: "/projects/fitness.png"
    }
  ];

  const filteredProjects = activeFilter === 'All Projects' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#000000]">
      {/* Galaxy Background Animation */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <Suspense fallback={null}>
          <MemoizedGalaxy
            mouseRepulsion={true}
            mouseInteraction={true}
            density={1.0}
            glowIntensity={0.5}
            saturation={0.8}
            hueShift={240}
          />
        </Suspense>
      </div>

      <div className="container px-6 lg:px-12 max-w-[1400px] mx-auto relative z-10">
        
        {/* Header exact match */}
        <div className="text-center mb-12">
          <Reveal direction="up">
            <p className="text-[#f97316] font-mono uppercase tracking-widest font-medium text-[16px] mb-2">Our Portfolio</p>
            <h2 className="text-[36px] md:text-[48px] font-display font-bold text-white leading-tight">
              Explore Our Latest Projects
            </h2>
          </Reveal>
        </div>

        {/* Filters exact match */}
        <Reveal direction="up" delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-md text-[15px] font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-[#ec4899] to-[#f97316] text-white shadow-[0_4px_20px_rgba(236,72,153,0.3)]'
                    : 'bg-white text-black hover:bg-white/90'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Projects Grid exact match */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <Reveal key={project.title} delay={0.1 + (idx * 0.1)} direction="up">
              <div className="bg-[#171717] rounded-[24px] p-4 group hover:-translate-y-2 transition-transform duration-300 border border-white/5">
                
                {/* Image */}
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-5">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="px-1 pb-2">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="text-[20px] font-display font-medium text-white group-hover:text-[#f97316] transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                  </div>
                  
                  <p className="text-[#a3a3a3] text-[14px] mb-5 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="bg-white/10 text-white/70 text-[12px] font-medium px-3.5 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
