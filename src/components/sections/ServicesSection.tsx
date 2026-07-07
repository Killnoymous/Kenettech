import { Reveal } from '../ui/Reveal';
import React, { Suspense } from 'react';
import { Palette, Code2, Smartphone, TrendingUp, Monitor, Zap, ChevronRight } from 'lucide-react';

const Ferrofluid = React.lazy(() => import('../ui/Ferrofluid'));
const MemoizedFerrofluid = React.memo(Ferrofluid);

export function ServicesSection() {
  const services = [
    {
      title: "Web Design",
      description: "Beautiful, user-centric designs that captivate your audience and drive engagement.",
      icon: Palette
    },
    {
      title: "Web Development",
      description: "Robust, scalable solutions built with cutting-edge technologies and best practices.",
      icon: Code2
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that deliver seamless experiences.",
      icon: Smartphone
    },
    {
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that amplify your brand's voice and maximize ROI across digital channels.",
      icon: TrendingUp
    },
    {
      title: "Custom Software",
      description: "Tailor-made software solutions engineered from the ground up to solve your unique business problems and technical specifications.",
      icon: Monitor
    },
    {
      title: "Brand Strategy",
      description: "Comprehensive branding solutions that define your identity, resonate with your target audience, and establish market presence.",
      icon: Zap
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#000000]">
      {/* Ferrofluid Background Animation */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
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
              <p className="text-accent-orange text-[16px] mb-2 font-medium">Our Services</p>
              <h2 className="text-[36px] md:text-[48px] font-display font-bold text-white leading-tight">
                We Offer All Digital Solutions.
              </h2>
            </div>
          </Reveal>
          
          <Reveal direction="up" delay={0.2}>
            {/* Gradient Border Button "Discover More" */}
            <div className="hidden md:block relative p-[1px] rounded-lg bg-gradient-to-r from-accent-pink to-accent-orange group cursor-pointer">
              <a href="#all-services" className="flex items-center justify-center bg-black text-white/90 px-6 py-2.5 rounded-lg text-[14px] font-medium transition-colors group-hover:bg-transparent">
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
                  
                  <div className={`mt-auto flex items-center text-[14px] font-medium relative z-10 ${
                    isActive ? 'text-accent-orange' : 'text-color-text-muted hover:text-white'
                  }`}>
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
