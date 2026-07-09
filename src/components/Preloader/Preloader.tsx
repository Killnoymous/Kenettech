import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const KEYWORDS = [
  "Engineering",
  "AI Products",
  "Innovation",
  "Design",
  "Kenet Technologies"
];

export const Preloader = () => {
  const [isUnmounted, setIsUnmounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [keywordIndex, setKeywordIndex] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const percentageRef = useRef<HTMLDivElement>(null);
  const keywordRef = useRef<HTMLDivElement>(null);
  const slicesRef = useRef<HTMLDivElement[]>([]);

  // Configure vertical slices
  const NUM_SLICES = 5;

  useEffect(() => {
    // Session check
    const hasSeenPreloader = sessionStorage.getItem('kenet_preloader_seen');
    if (hasSeenPreloader) {
      setIsUnmounted(true);
      return;
    }

    // Lock scroll
    document.body.style.overflow = 'hidden';

    // Simulate loading and sync keyword changes
    const loadDuration = 2000; // 2 seconds
    let startTime: number;
    let animationFrame: number;

    const animateProgress = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const p = Math.min((elapsed / loadDuration) * 100, 100);
      
      setProgress(Math.floor(p));

      // Calculate which keyword to show based on progress
      // We want to show the last keyword ("Kenet Technologies") for the final 20%
      const keywordStep = 100 / (KEYWORDS.length - 1 + 0.5); // Add 0.5 to keep the last word longer
      const index = Math.min(Math.floor(p / keywordStep), KEYWORDS.length - 1);
      
      setKeywordIndex((prev) => {
        if (prev !== index && keywordRef.current) {
          // Add a subtle flash/opacity pop on change
          gsap.fromTo(keywordRef.current, 
            { opacity: 0, y: 10 }, 
            { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" }
          );
        }
        return index;
      });

      if (p < 100) {
        animationFrame = requestAnimationFrame(animateProgress);
      } else {
        // Trigger exit after a tiny pause at 100%
        setTimeout(triggerExitAnimation, 200);
      }
    };

    animationFrame = requestAnimationFrame(animateProgress);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const triggerExitAnimation = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = 'auto';
        sessionStorage.setItem('kenet_preloader_seen', 'true');
        window.dispatchEvent(new Event('preloaderComplete'));
        setIsUnmounted(true);
      }
    });

    // 1. Fade out the text slightly
    tl.to([percentageRef.current, keywordRef.current], {
      opacity: 0,
      y: -20,
      duration: 0.6,
      ease: 'power3.inOut',
      stagger: 0.1
    }, 0);

    // 2. Slice reveal: The 5 columns slide up smoothly and very fast
    tl.to(slicesRef.current, {
      y: '-100%',
      duration: 0.8,
      ease: 'expo.inOut',
      stagger: 0.1
    }, 0.2);
  };

  if (isUnmounted) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none"
    >
      {/* Background Slices */}
      <div className="absolute inset-0 flex w-full h-full">
        {Array.from({ length: NUM_SLICES }).map((_, i) => (
          <div 
            key={i} 
            ref={el => { if (el) slicesRef.current[i] = el; }}
            className="flex-1 h-full bg-[#000000]"
          />
        ))}
      </div>

      {/* Preloader Content */}
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 px-6 text-center md:text-left bg-transparent">
        {/* Flashing Keyword */}
        <div 
          ref={keywordRef} 
          className="text-white/60 font-display text-2xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase min-w-[200px] md:min-w-[400px] md:text-right"
        >
          {KEYWORDS[keywordIndex]}
        </div>

        {/* Separator Dot (Hidden on small mobile) */}
        <div className="hidden md:block w-2 h-2 bg-white/30 rounded-full" />

        {/* Percentage Counter */}
        <div 
          ref={percentageRef} 
          className="text-white font-mono text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter"
          style={{ fontVariantNumeric: 'tabular-nums' }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
};
