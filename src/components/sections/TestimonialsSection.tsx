import React, { Suspense } from 'react';
import { Reveal } from '../ui/Reveal';
const DarkVeil = React.lazy(() => import('../ui/DarkVeil'));
const MemoizedDarkVeil = React.memo(DarkVeil);

export function TestimonialsSection() {

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
          <p className="text-[20px] md:text-[28px] lg:text-[32px] font-display font-semibold text-white leading-relaxed mb-16 max-w-4xl mx-auto">
            "Kenet Technologies transformed our business operations. They didn't just build a custom software platform—they took the time to deeply understand our challenges and delivered an elegant, lightning-fast, and scalable solution. Their technical expertise is truly unmatched."
          </p>
        </Reveal>



      </div>
    </section>
  );
}
