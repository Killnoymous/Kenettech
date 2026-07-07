import React, { Suspense } from 'react';
import { Reveal } from '../ui/Reveal';
const DarkVeil = React.lazy(() => import('../ui/DarkVeil'));
const MemoizedDarkVeil = React.memo(DarkVeil);

export function TestimonialsSection() {
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&q=80&w=150"
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-[#000000] flex flex-col justify-center min-h-[600px]">
      
      {/* DarkVeil Background */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
        <Suspense fallback={null}>
          <MemoizedDarkVeil 
            hueShift={-40}
            noiseIntensity={0.2}
            scanlineIntensity={0.1}
            speed={0.5}
            scanlineFrequency={0.0}
            warpAmount={0.3}
            resolutionScale={1}
          />
        </Suspense>
      </div>

      <div className="container px-6 relative z-20 text-center max-w-5xl mx-auto flex-grow flex flex-col items-center justify-center">
        
        <Reveal direction="up">
          <p className="text-accent-orange font-bold text-sm mb-4">Testimonials</p>
          <h2 className="text-[36px] md:text-[48px] font-display font-black text-white leading-tight mb-12">
            Our Happy Clients Says
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <p className="text-[20px] md:text-[28px] lg:text-[32px] font-display font-semibold text-white leading-relaxed mb-8 max-w-4xl mx-auto">
            "Kenet Technologies transformed our business operations. They didn't just build a custom software platform—they took the time to deeply understand our challenges and delivered an elegant, lightning-fast, and scalable solution. Their technical expertise is truly unmatched."
          </p>
          <p className="text-[15px] font-bold text-white mb-16">
            Elena Rodriguez - <span className="text-white/60 font-medium">Founder & CEO, TechFlow</span>
          </p>
        </Reveal>

        {/* Avatars Exact Match */}
        <Reveal direction="up" delay={0.4}>
          <div className="flex items-center justify-center space-x-3">
            {/* Dark left dot */}
            <button className="w-8 h-8 rounded-full bg-[#111] hover:bg-[#222] transition-colors border border-white/5"></button>
            
            {/* The 5 avatars */}
            {avatars.map((img, idx) => {
              const isActive = idx === 2; // middle is active
              return (
                <img 
                  key={idx}
                  src={img} 
                  alt="Client Avatar" 
                  className={`w-12 h-12 rounded-full object-cover transition-all duration-300 ${isActive ? 'scale-110 border-2 border-accent-orange shadow-[0_0_15px_rgba(249,115,22,0.4)]' : 'opacity-60 hover:opacity-100 border border-white/10'}`}
                />
              )
            })}

            {/* Orange right dot */}
            <button className="w-8 h-8 rounded-full bg-accent-orange transition-colors hover:bg-orange-600 shadow-[0_0_15px_rgba(249,115,22,0.4)]"></button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
