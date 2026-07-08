import { useState, useEffect } from 'react';
import { WebGLPlasmaSphere } from './WebGLPlasmaSphere';

export function Preloader() {
  const [isEntered, setIsEntered] = useState(false);
  const [isUnmounted, setIsUnmounted] = useState(false);

  useEffect(() => {
    // Lock body scroll while preloader is active
    if (!isEntered) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'auto';
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
      }, 100);
    }
    
    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.scrollBehavior = 'smooth';
    };
  }, [isEntered]);

  const handleEnter = () => {
    setIsEntered(true);
    // Let the explosive zoom transition finish before unmounting
    setTimeout(() => {
      setIsUnmounted(true);
    }, 1500); 
  };

  if (isUnmounted) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-colors duration-[1500ms] ${
        isEntered ? 'bg-transparent pointer-events-none' : 'bg-[#070707]'
      }`}
    >
      
      {/* Explosive Zoom Container */}
      <div 
        className={`relative z-10 flex flex-col items-center justify-center transition-all duration-[1500ms] ease-[cubic-bezier(0.87,0,0.13,1)] ${
          isEntered ? 'scale-[40] opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        
        {/* Plasma Sphere WebGL */}
        <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] flex items-center justify-center mb-16">
          {/* Ambient large glow behind the sphere */}
          <div className={`absolute inset-0 bg-[#ec4899] blur-[100px] rounded-full animate-pulse pointer-events-none transition-opacity duration-1000 ${isEntered ? 'opacity-100 scale-150' : 'opacity-15'}`}></div>
          
          <WebGLPlasmaSphere />
        </div>

      </div>

      {/* Minimalist ENTER button matching the reference perfectly */}
      <div className={`absolute z-20 bottom-[15%] md:bottom-[20%] transition-opacity duration-300 ${isEntered ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <button 
          onClick={handleEnter}
          className="px-12 py-3 border border-white/20 text-white/90 text-[12px] tracking-[0.3em] font-medium hover:bg-white/10 hover:border-white/50 transition-all duration-300 pointer-events-auto"
        >
          ENTER
        </button>
      </div>

    </div>
  );
}
