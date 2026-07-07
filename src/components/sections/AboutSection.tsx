import { Reveal } from '../ui/Reveal';

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-bg-dark">
      <div className="container px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Image (Square-ish with rounded corners as in image) */}
          <Reveal direction="right">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/4.5] lg:aspect-square group max-w-xl mx-auto lg:mx-0 w-full">
              {/* Finding a similar image of women working at a table */}
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt="Tech Team Collaborating" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 contrast-125"
                loading="lazy"
              />
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
              <a href="#more" className="inline-flex items-center justify-center bg-gradient-primary text-white px-8 py-3.5 rounded-lg text-[15px] font-medium transition-all duration-300 hover:scale-105 shadow-[0_4px_30px_rgba(236,72,153,0.3)] w-fit">
                Read More Us
              </a>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
