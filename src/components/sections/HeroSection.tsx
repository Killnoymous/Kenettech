import { Reveal } from '../ui/Reveal';

export function HeroSection() {
  const logos = [
    { name: "TOP 10 — SAMSUNG SOLVE FOR TOMORROW 2025", img: null },
    { name: "NATIONAL FINALIST — INDIA INNOVATES 2026", img: null },
    { name: "PITCHED AT FITT, IIT DELHI", img: null },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#000000] pt-20">
      
      {/* Dark Theme Background Setup */}
      <div className="absolute inset-0 z-0 bg-[#000000]">
        
        {/* Massive Red/Orange Glow behind text (Top Left) */}
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#661100] blur-[80px] rounded-full opacity-60 pointer-events-none"></div>
        <div className="absolute top-[10%] left-[0%] w-[500px] h-[500px] bg-[#aa2211] blur-[80px] rounded-full opacity-40 pointer-events-none"></div>

        {/* The Wave / Mountain shape at the bottom */}
        {/* We use a dark gradient curve to mimic the shape of the wave without using unpredictable Unsplash images */}
        <div className="absolute bottom-0 left-0 w-full h-[60vh] pointer-events-none overflow-hidden">
           <div className="absolute bottom-[-20%] left-[-10%] w-[120%] h-[120%] rounded-[100%] bg-gradient-to-t from-black via-[#0a0a0a] to-transparent border-t-[2px] border-accent-pink/30 shadow-[0_-20px_50px_rgba(236,72,153,0.05)]"></div>
           <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[100%] rounded-[100%] bg-gradient-to-t from-black via-[#111] to-transparent border-t-[4px] border-accent-orange/40 shadow-[0_-20px_80px_rgba(249,115,22,0.1)] transform rotate-12"></div>
           
           {/* Subtle highlight lines */}
           <div className="absolute bottom-[30%] right-[30%] w-[400px] h-[200px] bg-accent-orange/20 blur-[60px] rounded-full"></div>
           <div className="absolute bottom-[20%] left-[40%] w-[300px] h-[150px] bg-accent-pink/20 blur-[60px] rounded-full"></div>
        </div>

        {/* Abstract Glowing Orb (Top Right) */}
        <div className="absolute top-[20%] right-[15%] w-24 h-24 z-10 animate-float opacity-80 pointer-events-none hidden lg:block">
           <div className="relative w-full h-full">
             <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#9d4edd] to-[#f97316]"></div>
             <div className="absolute inset-1 rounded-full bg-black"></div>
             {/* Wireframe lines effect */}
             <div className="absolute inset-0 rounded-full border border-white/20 transform rotate-45 scale-90"></div>
             <div className="absolute inset-0 rounded-full border border-accent-orange/40 transform -rotate-45 scale-95"></div>
             <div className="absolute inset-0 rounded-full border border-accent-pink/40 transform rotate-90 scale-95"></div>
             {/* Core glow */}
             <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#9d4edd] to-[#f97316] blur-[10px] opacity-60"></div>
           </div>
        </div>
      </div>

      <div className="container px-6 lg:px-12 relative z-20 mx-auto flex-grow flex flex-col justify-center">
        
        {/* Main Content (Left Aligned exactly like image) */}
        {/* Set max-w-none to prevent "We Design Websites" from wrapping early */}
        <div className="w-full max-w-[900px]">
          <Reveal direction="up" delay={0.1}>
            <h1 className="text-[42px] sm:text-[60px] md:text-[84px] lg:text-[96px] font-display font-bold leading-[1.1] tracking-tight text-white mb-6 whitespace-normal md:whitespace-nowrap">
              We Engineer <span className="text-gradient">AI Products</span><br/>
              That Actually Ship.
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="text-[16px] md:text-[18px] text-white/70 max-w-[650px] mb-10 leading-relaxed font-medium">
              Kenet Technologies partners with MSMEs, fintechs, and growing businesses to design, build, and launch AI-driven software — from custom engineering to our own products, NoteNetra and VisionPay.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <a href="#about" className="inline-flex items-center justify-center bg-gradient-primary text-white px-8 py-3.5 rounded-lg text-[15px] font-medium transition-all duration-300 hover:scale-105 shadow-[0_4px_30px_rgba(236,72,153,0.4)] border border-white/10">
              Start Your Project
            </a>
          </Reveal>
        </div>
      </div>

      {/* Client Logos Marquee (Exactly at the bottom) */}
      <div className="w-full bg-transparent relative z-20 py-8 border-t border-white/5 mt-auto">
        <div className="flex overflow-hidden relative w-full">
          {/* Fading Edges */}
          <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-[#000000] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-[#000000] to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex animate-marquee whitespace-nowrap w-max items-center">
            {/* We duplicate the array 4 times to ensure it's wide enough for any screen, 
                and since the animation translates -50%, it perfectly loops 2 copies. */}
            {[...logos, ...logos, ...logos, ...logos].map((logo, idx) => (
              <div key={idx} className="mx-8 md:mx-12 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                 {logo.img ? (
                    <div className="flex items-center space-x-3">
                       <img src={logo.img} alt={logo.name} className="h-6 md:h-8 object-contain filter invert opacity-80" />
                       <span className="text-[16px] md:text-[18px] font-display font-medium text-white">{logo.name}</span>
                    </div>
                 ) : (
                    <span className="text-[16px] md:text-[20px] font-display font-medium tracking-wide text-white">
                      {logo.name}
                    </span>
                 )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
