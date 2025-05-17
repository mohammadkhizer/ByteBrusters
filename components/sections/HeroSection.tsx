'use client';

import { useEffect, useRef } from 'react';
import { Play, ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full opacity-40"
          poster="https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg"
        >
          <source 
            src="https://player.vimeo.com/external/459967417.sd.mp4?s=482c12262b2b87caf8cd6cc20ccc08061b5d1088&profile_id=139&oauth2_token_id=57447761" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-in in-view" style={{ animationDelay: '200ms' }}>
          <span className="gradient-text">ByteBrusters</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
          Bringing your cinematic vision to life with exceptional storytelling and premium production quality
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 opacity-0 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <a href="#projects" className="button-primary flex items-center gap-2">
            View Our Work
          </a>
          <a href="#about" className="button-outline">
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in"
        style={{ animationDelay: '800ms' }}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-sm">Scroll Down</span>
          <ArrowDown size={20} className="animate-bounce" />
        </div>
      </a>
    </section>
  );
}