import { useState, useEffect } from 'react';
import { Reveal } from '../ui/Reveal';
import { X } from 'lucide-react';

export function AboutSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    if (isModalOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-bg-dark">
      <div className="container px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Visual (Abstract mechanical iris/aperture) */}
          <Reveal direction="right">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/4.5] lg:aspect-square group max-w-xl mx-auto lg:mx-0 w-full bg-[#050505] border border-white/5 shadow-2xl flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#ec4899]/10 to-[#f97316]/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative w-[70%] h-[70%] max-w-[400px] max-h-[400px] group-hover:scale-105 transition-transform duration-700">
                {/* Glow behind the aperture */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#ec4899] to-[#f97316] rounded-full blur-[40px] opacity-40 animate-pulse" style={{ animationDuration: '6s' }}></div>
                
                {/* SVG Aperture */}
                <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 animate-spin" style={{ animationDuration: '24s', animationTimingFunction: 'linear' }}>
                  <defs>
                    <linearGradient id="apertureGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                  </defs>
                  
                  {/* Aperture blades */}
                  <g className="origin-center" style={{ animation: 'pulse 8s ease-in-out infinite' }}>
                    {/* Blade 1 */}
                    <path d="M50 15 C 75 15, 85 30, 85 50 L 55 55 Z" fill="url(#apertureGradient)" className="opacity-80 mix-blend-screen" />
                    {/* Blade 2 */}
                    <path d="M85 50 C 85 75, 70 85, 50 85 L 45 55 Z" fill="url(#apertureGradient)" className="opacity-80 mix-blend-screen" />
                    {/* Blade 3 */}
                    <path d="M50 85 C 25 85, 15 70, 15 50 L 45 45 Z" fill="url(#apertureGradient)" className="opacity-80 mix-blend-screen" />
                    {/* Blade 4 */}
                    <path d="M15 50 C 15 25, 30 15, 50 15 L 55 45 Z" fill="url(#apertureGradient)" className="opacity-80 mix-blend-screen" />
                    
                    {/* Inner mechanical ring */}
                    <circle cx="50" cy="50" r="18" fill="none" stroke="#050505" strokeWidth="4" />
                    <circle cx="50" cy="50" r="14" fill="none" stroke="url(#apertureGradient)" strokeWidth="1.5" strokeDasharray="4 4" className="origin-center animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }} />
                    <circle cx="50" cy="50" r="5" fill="url(#apertureGradient)" className="opacity-90" />
                  </g>
                </svg>
              </div>
            </div>
          </Reveal>

          {/* Right: Content (Left aligned) */}
          <div className="flex flex-col max-w-2xl">
            <Reveal direction="left" delay={0.1}>
              <h2 className="text-[36px] md:text-[48px] font-display font-bold text-white mb-8 leading-tight">
                About Kenet Technologies
              </h2>
            </Reveal>

            {/* Bullet points */}
            <Reveal direction="left" delay={0.2}>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-accent-orange"></span>
                  <span className="text-[16px] text-white/90 font-medium">Thought Partnership</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-accent-orange"></span>
                  <span className="text-[16px] text-white/90 font-medium">No Wasted Time</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-accent-orange"></span>
                  <span className="text-[16px] text-white/90 font-medium">Transformation.</span>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.3}>
              <p className="text-[15px] md:text-[16px] text-color-text-muted mb-6 leading-relaxed">
                Kenet Technologies is an AI solutions and product engineering company based in Rohini, Delhi. We partner with MSMEs, fintechs, and growing businesses to design, build, and ship software that actually moves the needle — not just software that looks good in a pitch deck.
              </p>
              <p className="text-[15px] md:text-[16px] text-color-text-muted mb-12 leading-relaxed">
                You're the subject-matter expert. We're the engineering expert. We sit at the table, understand your real goals, and build the right thing for the right people — no bottlenecks, no guesswork, no wasted time.
              </p>
            </Reveal>

            {/* Stats matching the image exactly: 3 rounded dark boxes */}
            <Reveal direction="left" delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <div className="flex-1 bg-gradient-to-b from-[#111111] to-[#050505] border border-white/10 rounded-xl p-5 flex flex-col justify-center">
                  <h3 className="text-[28px] font-display font-medium text-gradient mb-1">40+</h3>
                  <p className="text-[12px] text-white/70 font-medium">Projects Delivered</p>
                </div>
                <div className="flex-1 bg-gradient-to-b from-[#111111] to-[#050505] border border-white/10 rounded-xl p-5 flex flex-col justify-center">
                  <h3 className="text-[28px] font-display font-medium text-gradient mb-1">15+</h3>
                  <p className="text-[12px] text-white/70 font-medium">Businesses Empowered</p>
                </div>
                <div className="flex-1 bg-gradient-to-b from-[#111111] to-[#050505] border border-white/10 rounded-xl p-5 flex flex-col justify-center">
                  <h3 className="text-[28px] font-display font-medium text-gradient mb-1">3+</h3>
                  <p className="text-[12px] text-white/70 font-medium">Years of Craft</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.5}>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center bg-gradient-primary text-white px-8 py-3.5 rounded-lg text-[15px] font-medium transition-all duration-300 hover:scale-105 shadow-[0_4px_30px_rgba(236,72,153,0.3)] w-fit"
              >
                Read More Us
              </button>
            </Reveal>
          </div>

        </div>
      </div>

      {/* Modal / Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          {/* Modal Panel */}
          <div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
            <div className="p-8 md:p-10 flex-shrink-0 relative border-b border-white/5">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>
              
              <h3 className="text-[28px] md:text-[32px] font-display font-bold text-white pr-8 leading-tight">
                Why Kenet Technologies
              </h3>
            </div>
            
            <div className="p-8 md:p-10 overflow-y-auto">
              <div className="space-y-6">
                <p className="text-[15px] md:text-[16px] text-color-text-muted leading-relaxed">
                  Kenet was founded on a simple frustration: most software vendors optimize for handoff, not outcomes. We built Kenet Technologies as an engineering partner instead — a team that sits with you at the table, understands the actual business problem, and ships something that solves it.
                </p>
                <p className="text-[15px] md:text-[16px] text-color-text-muted leading-relaxed">
                  We work across two tracks: custom engineering — web platforms, mobile apps, and AI systems built to your spec — and our own products, including NoteNetra (AI-driven document processing and workflow automation for MSMEs) and VisionPay (a spec-based visual payment solution). Building our own products means we bring real product instincts to every client engagement, not just delivery instincts.
                </p>
                <p className="text-[15px] md:text-[16px] text-color-text-muted leading-relaxed">
                  Based in Rohini, Delhi, we're a small, senior team by design — no bloated account layers between you and the people actually building your product.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
