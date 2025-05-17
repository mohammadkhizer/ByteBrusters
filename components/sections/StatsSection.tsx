'use client';

import { useEffect, useState, useRef } from 'react';
import { Heart, Award, Video, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

type StatProps = {
  icon: React.ReactNode;
  value: number;
  label: string;
  duration?: number;
  delay?: number;
};

function StatCounter({ icon, value, label, duration = 2000, delay = 0 }: StatProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const step = 1;
    const timeoutId = setTimeout(() => {
      const timer = setInterval(() => {
        start += step;
        setCount(Math.min(start, value));
        
        if (start >= value) {
          clearInterval(timer);
        }
      }, Math.max(duration / value, 15));
      
      return () => clearInterval(timer);
    }, delay);
    
    return () => clearTimeout(timeoutId);
  }, [isVisible, value, duration, delay]);

  return (
    <div ref={counterRef} className="text-center animate-fade-in">
      <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-muted rounded-full">
        {icon}
      </div>
      <h3 className="text-4xl font-bold mb-2">
        {count}
        <span className="text-primary">+</span>
      </h3>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 relative bg-muted/30">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7991486/pexels-photo-7991486.jpeg')] bg-cover bg-center opacity-5"></div>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          <StatCounter
            icon={<Heart className="h-8 w-8 text-accent" />}
            value={50}
            label="Satisfied Clients"
            delay={0}
          />
          <StatCounter
            icon={<Video className="h-8 w-8 text-purple" />}
            value={5}
            label="Projects Completed"
            delay={200}
          />
          
          <StatCounter
            icon={<Calendar className="h-8 w-8 text-primary" />}
            value={3}
            label="Years of Experience"
            delay={200}
          />
        </div>
      </div>
    </section>
  );
}