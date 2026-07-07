import React, { Suspense } from 'react';
import { Reveal } from '../ui/Reveal';
const ColorBends = React.lazy(() => import('../ui/ColorBends'));
const MemoizedColorBends = React.memo(ColorBends);

export function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "You're The Subject Expert. We're The Design Expert. We Sit At Your Table, Download Your Goals, Understand Why It Matters And Develop A Plan To Get There.",
      img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=800",
      layout: "col",
    },
    {
      num: "02",
      title: "Strategize",
      desc: "Founded With Passion For Technology And Design, Quergedruckt Stands For Creative Problem-Solving And Precision Craftsmanship.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      layout: "col",
    },
    {
      num: "03",
      title: "Design",
      desc: "Founded With Passion For Technology And Design, Quergedruckt Stands For Creative Problem-Solving And Precision Craftsmanship.",
      img: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=1000",
      layout: "full",
    },
    {
      num: "04",
      title: "Develop",
      desc: "Founded With Passion For Technology And Design, Quergedruckt Stands For Creative Problem-Solving And Precision Craftsmanship.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
      layout: "full",
    },
    {
      num: "05",
      title: "Launch",
      desc: "Founded With Passion For Technology And Design, Quergedruckt Stands For Creative Problem-Solving And Precision Craftsmanship.",
      img: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80&w=1000",
      layout: "full",
    }
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[#000000]">
      {/* ColorBends Background Animation */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Suspense fallback={null}>
          <MemoizedColorBends
            colors={['#f97316', '#ec4899', '#9d4edd']}
            rotation={90}
            speed={0.2}
            scale={1}
            frequency={1}
            warpStrength={1}
            mouseInfluence={1}
            noise={0.15}
            parallax={0.5}
            iterations={1}
            intensity={1.5}
            bandWidth={6}
            transparent
          />
        </Suspense>
      </div>

      <div className="container px-6 lg:px-12 max-w-[1400px] mx-auto relative z-10">
        
        {/* Header Exact Match */}
        <Reveal direction="up">
          <div className="mb-10">
            <p className="text-accent-orange font-mono uppercase tracking-widest font-medium text-[16px] mb-2">Our Process</p>
            <h2 className="text-[36px] md:text-[48px] font-display font-bold text-white leading-tight">
              Kenet Technologies Design Process
            </h2>
          </div>
        </Reveal>

        {/* Big Image Exact Match */}
        <Reveal direction="up" delay={0.2}>
          <div className="w-full aspect-[21/9] md:aspect-[24/8] rounded-2xl overflow-hidden mb-12 relative border border-white/5">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000" 
              alt="Professional Design Process" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        {/* Process Steps Grid Layout Matching Images */}
        <div className="flex flex-col space-y-4">
          
          {/* Top Row: 01 and 02 side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {steps.filter(s => s.layout === 'col').map((step, idx) => (
              <Reveal key={step.num} delay={0.1 + idx * 0.1} direction="up">
                <div className="relative p-8 rounded-xl bg-[#0a0a0a] border border-white/10 flex flex-col h-full overflow-hidden group hover:border-white/30 transition-colors">
                  
                  {/* Internal Effect */}
                  <div className="absolute inset-0 z-0 opacity-30 group-hover:opacity-60 transition-opacity duration-700">
                    <img 
                      src={step.img} 
                      alt="Effect" 
                      className="w-full h-full object-cover mix-blend-screen filter grayscale-[50%] brightness-110"
                    />
                    {/* Glow and Fade to make text readable */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#f97316]/10 mix-blend-color group-hover:opacity-100 opacity-0 transition-opacity duration-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/20"></div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-accent-orange font-bold text-[24px] group-hover:text-white transition-colors duration-300">{step.num}</span>
                      <h3 className="text-[22px] font-display font-medium text-white">{step.title}</h3>
                    </div>
                    <p className="text-color-text-muted text-[15px] leading-relaxed relative">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Full Width Rows: 03, 04, 05 */}
          {steps.filter(s => s.layout === 'full').map((step, idx) => (
            <Reveal key={step.num} delay={0.3 + idx * 0.1} direction="up">
              <div className="relative p-8 rounded-xl bg-[#0a0a0a] border border-white/10 flex flex-col overflow-hidden group hover:border-white/30 transition-colors">
                  
                {/* Internal Effect */}
                <div className="absolute inset-0 z-0 opacity-30 group-hover:opacity-60 transition-opacity duration-700">
                  <img 
                    src={step.img} 
                    alt="Effect" 
                    className="w-full h-full object-cover mix-blend-screen filter grayscale-[50%] brightness-110"
                    style={step.num === "05" ? { objectPosition: 'center bottom' } : {}}
                  />
                  {/* Glow and Fade to make text readable */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#9d4edd]/10 via-transparent to-[#ec4899]/10 mix-blend-color group-hover:opacity-100 opacity-0 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/20"></div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-accent-orange font-bold text-[24px] group-hover:text-white transition-colors duration-300">{step.num}</span>
                    <h3 className="text-[22px] font-display font-medium text-white">{step.title}</h3>
                  </div>
                  <p className="text-color-text-muted text-[15px] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}

        </div>

        {/* Start Your Project Button at the bottom */}
        <Reveal delay={0.6} direction="up">
          <div className="mt-16 flex justify-center">
            <a href="#contact" className="inline-flex items-center justify-center bg-gradient-primary text-white px-8 py-3.5 rounded-lg text-[15px] font-medium transition-all duration-300 hover:scale-105 shadow-[0_4px_30px_rgba(236,72,153,0.3)]">
              Start Your Project
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
