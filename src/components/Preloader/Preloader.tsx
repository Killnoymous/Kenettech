import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Preloader = () => {
  const [isUnmounted, setIsUnmounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  const handleEnter = () => {
    // Prevent double triggers
    if (containerRef.current && gsap.getProperty(containerRef.current, 'opacity') < 1) return;
    
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 1.0,
      ease: 'power2.inOut',
      onComplete: () => {
        document.body.style.overflow = 'auto';
        setIsUnmounted(true);
      }
    });
  };

  if (isUnmounted) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#000000] overflow-hidden"
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        onEnded={handleEnter}
      >
        <source src="/videos/preloader.mp4" type="video/mp4" />
      </video>

      {/* Enter button overlay */}
      <button 
        onClick={handleEnter}
        className="absolute bottom-[10%] px-10 py-3 border border-white/20 bg-black/40 backdrop-blur-md text-white/90 text-sm tracking-[0.3em] font-medium transition-all duration-500 hover:bg-white hover:text-black hover:border-white z-10"
      >
        ENTER
      </button>
    </div>
  );
};
