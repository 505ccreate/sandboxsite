import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_background.png"
          alt="The Nexus Hero Background"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8 animate-in fade-in zoom-in duration-1000">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl">
          WELCOME TO <span className="text-accent-cyan">THE NEXUS</span>
        </h1>
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-light tracking-wide">
          The ultimate high-tech sandbox for future AI experimentation.
          Step into a world of glassmorphism and neon pulses.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button className="px-8 py-4 bg-accent-cyan text-black font-bold rounded-full hover:scale-105 transition-all duration-300 neon-cyan-glow">
            GET STARTED
          </button>
          <button className="px-8 py-4 glass text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Subtle Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-nexus-black to-transparent z-20" />
    </section>
  );
};

export default Hero;
