import { Reveal } from '../ui/Reveal';
import React, { Suspense, useState, useEffect } from 'react';
import { Palette, Code2, Smartphone, TrendingUp, Monitor, Zap, ChevronRight, X, Check } from 'lucide-react';

const Ferrofluid = React.lazy(() => import('../ui/Ferrofluid'));
const MemoizedFerrofluid = React.memo(Ferrofluid);

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedService(null);
    };
    if (selectedService) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);
  const services = [
    {
      title: "Web Design",
      description: "Beautiful, user-centric designs that captivate your audience and drive engagement.",
      icon: Palette,
      details: {
        intro: "We design interfaces around how your users actually think, not generic templates.",
        bullets: ["UX research & wireframing", "Responsive, accessibility-first design", "Design systems built for future scalability"]
      }
    },
    {
      title: "Web Development",
      description: "Robust, scalable solutions built with cutting-edge technologies and best practices.",
      icon: Code2,
      details: {
        intro: "Fast, scalable web platforms built with modern frameworks and clean architecture.",
        bullets: ["Full-stack development (React/Next.js, Node.js)", "API design & integration", "Performance optimization & SEO fundamentals"]
      }
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that deliver seamless experiences.",
      icon: Smartphone,
      details: {
        intro: "Native and cross-platform apps engineered for real-world reliability, not just demo polish.",
        bullets: ["iOS & Android development (React Native)", "Offline-first architecture where needed", "App Store / Play Store deployment support"]
      }
    },
    {
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that amplify your brand's voice and maximize ROI across digital channels.",
      icon: TrendingUp,
      details: {
        intro: "Growth strategy and execution grounded in data, not guesswork.",
        bullets: ["SEO & content strategy", "Paid campaign management", "Analytics setup & conversion tracking"]
      }
    },
    {
      title: "Custom Software",
      description: "Tailor-made software solutions engineered from the ground up to solve your unique business problems and technical specifications.",
      icon: Monitor,
      details: {
        intro: "Tailor-made systems engineered from the ground up around your exact workflow.",
        bullets: ["Custom AI/ML integration", "Workflow automation", "Legacy system modernization"]
      }
    },
    {
      title: "Brand Strategy",
      description: "Comprehensive branding solutions that define your identity, resonate with your target audience, and establish market presence.",
      icon: Zap,
      details: {
        intro: "Positioning and identity systems built for how your business actually competes.",
        bullets: ["Brand identity & visual systems", "Messaging & positioning", "Competitive market analysis"]
      }
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#000000]">
      {/* Ferrofluid Background Animation */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Suspense fallback={null}>
          <MemoizedFerrofluid
            colors={["#f97316", "#ec4899", "#9d4edd"]}
            speed={0.5}
            scale={1}
            turbulence={1}
            fluidity={0.1}
            rimWidth={0.2}
            sharpness={3}
            shimmer={1}
            glow={2}
            flowDirection="down"
            opacity={1}
            mouseInteraction={true}
            mouseStrength={1}
            mouseRadius={0.3}
          />
        </Suspense>
      </div>

      <div className="container px-6 lg:px-12 max-w-[1400px] mx-auto relative z-10">
        
        {/* Header exact match */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <Reveal direction="up">
            <div className="max-w-2xl">
              <p className="text-accent-orange font-mono uppercase tracking-widest text-[16px] mb-2 font-medium">Our Services</p>
              <h2 className="text-[36px] md:text-[48px] font-display font-bold text-white leading-tight">
                We Offer All Digital Solutions.
              </h2>
            </div>
          </Reveal>
          
          <Reveal direction="up" delay={0.2} width="fit-content">
            {/* Gradient Border Button "Discover More" */}
            <div className="hidden md:inline-block relative p-[1px] rounded-lg bg-gradient-to-r from-accent-pink to-accent-orange group cursor-pointer">
              <a href="#all-services" className="flex items-center justify-center bg-black text-white/90 px-6 py-2.5 rounded-lg text-[14px] font-medium transition-colors group-hover:bg-transparent whitespace-nowrap">
                Discover More
              </a>
            </div>
          </Reveal>
        </div>

        {/* Grid exact match: 3 columns. Cards have very dark bg, thin border. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            // The 2nd card (index 1) in the image is active
            const isActive = idx === 1; 

            return (
              <Reveal key={idx} delay={idx * 0.1} direction="up">
                <div className={`p-8 group relative overflow-hidden h-full flex flex-col cursor-pointer transition-all duration-300 rounded-xl border ${
                  isActive ? 'border-accent-orange/40 shadow-[0_0_30px_rgba(249,115,22,0.1)]' : 'border-white/10 bg-[#050505] hover:border-white/20'
                }`}>
                  
                  {/* Active Card Glow Background */}
                  {isActive && (
                    <div className="absolute inset-0 bg-[#050505] z-0">
                      {/* Orange/brown glow in the top right */}
                      <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] bg-[#b45309] opacity-30 blur-[60px] rounded-full"></div>
                    </div>
                  )}

                  {/* Icon Box */}
                  <div className="mb-6 relative z-10">
                    <div className={`w-10 h-10 rounded-md flex items-center justify-center ${
                      isActive ? 'bg-gradient-primary' : 'bg-white/10 text-white/50 group-hover:text-white'
                    }`}>
                      <Icon className={`w-5 h-5 ${isActive ? 'text-white' : ''}`} />
                    </div>
                  </div>

                  <h3 className="text-[20px] font-medium text-white mb-3 relative z-10">{service.title}</h3>
                  <p className="text-[14px] text-color-text-muted leading-relaxed flex-grow mb-8 relative z-10">
                    {service.description}
                  </p>
                  
                  <button 
                    onClick={() => setSelectedService(service.title)}
                    className={`mt-auto flex items-center text-[14px] font-medium relative z-10 transition-colors ${
                      isActive ? 'text-accent-orange' : 'text-color-text-muted hover:text-white'
                    }`}
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>

      {/* Modal / Dialog */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setSelectedService(null)}
          ></div>
          
          {/* Modal Panel */}
          <div className="relative w-full max-w-2xl bg-[#050505] border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
            <div className="p-8 md:p-10 flex-shrink-0 relative border-b border-white/5">
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>
              
              <h3 className="text-[24px] md:text-[28px] font-display font-bold text-white pr-8 leading-tight">
                {selectedService}
              </h3>
            </div>
            
            <div className="p-8 md:p-10 overflow-y-auto">
              <div className="space-y-6">
                <p className="text-[15px] md:text-[16px] text-color-text-muted leading-relaxed">
                  {services.find(s => s.title === selectedService)?.details.intro}
                </p>
                
                <ul className="space-y-4 mt-6">
                  {services.find(s => s.title === selectedService)?.details.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-accent-orange" />
                      </div>
                      <span className="text-[15px] text-white/80 leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
