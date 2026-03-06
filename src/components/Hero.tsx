import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden transition-colors duration-500">
      {/* Base Background Color Layer */}
      <div className="absolute inset-0 bg-[var(--background)] z-[-20]" />

      {/* Background Video Layer (Dark Mode Only) */}
      <div className="absolute inset-0 z-[-10] dark:opacity-100 opacity-0 transition-opacity duration-500">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-vid1.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8 animate-in fade-in zoom-in duration-1000">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-[var(--foreground)] drop-shadow-2xl">
          WELCOME TO <span className="text-accent-cyan">THE NEXUS</span>
        </h1>
        <p className="text-lg md:text-xl text-[var(--foreground)]/70 max-w-2xl mx-auto font-light tracking-wide">
          The ultimate high-tech sandbox for future AI experimentation.
          Step into a world of glassmorphism and neon pulses.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button className="px-8 py-4 bg-accent-cyan text-black font-bold rounded-full hover:scale-105 transition-all duration-300 neon-cyan-glow">
            GET STARTED
          </button>
          <button className="px-8 py-4 glass text-[var(--foreground)] font-bold rounded-full hover:bg-[var(--foreground)]/10 transition-all duration-300">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Subtle Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--background)] to-transparent z-20" />
    </section>
  );
};

export default Hero;
