'use client';

import { Cpu , BadgeCheck , Brush , Users } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-card relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent"></div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-title animate-fade-in">
              About <span className="gradient-text">ByteBrusters</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
             ByteBrusters is an innovative IT solutions provider committed to elevating businesses through cutting-edge technology and intelligent design. We specialize in delivering comprehensive services across the IT and hardware spectrum, including web and app development, graphic design, networking solutions, and computer sales and services.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '300ms' }}>
              Our team of experienced professionals blends deep technical knowledge with creative problem-solving to offer tailored solutions that drive results. By integrating advanced AI tools into our workflows, we ensure your business operates smarter, faster, and more professionally than ever before.
            </p>
            <p className="text-foreground font-medium animate-fade-in" style={{ animationDelay: '400ms' }}>
              Whether you're looking to build a dynamic website, develop a mobile application, upgrade your IT infrastructure, or optimize your brand's visual identity, ByteBrusters has the expertise and technology to bring your vision to life. Let us help you power up your business for the digital age.


            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-muted p-8 rounded-lg animate-fade-in" style={{ animationDelay: '200ms' }}>
              <Cpu className="h-12 w-12 text-purple mb-4" />
              <h3 className="text-xl font-bold mb-2">Tech-Driven Innovation</h3>
              <p className="text-muted-foreground">Delivering smart, scalable, and future-ready IT solutions</p>
            </div>
            
            <div className="bg-muted p-8 rounded-lg animate-fade-in" style={{ animationDelay: '300ms' }}>
              <BadgeCheck  className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-2">Service Excellence</h3>
              <p className="text-muted-foreground">Maintaining the highest standards across every project and platform</p>
            </div>
            
            <div className="bg-muted p-8 rounded-lg animate-fade-in" style={{ animationDelay: '200ms' }}>
              <Brush className="h-12 w-12 text-purple mb-4" />
              <h3 className="text-xl font-bold mb-2">Creative Design</h3>
              <p className="text-muted-foreground">Designing visually compelling graphics and user interfaces that enhance brand identity</p>
            </div>
            
            <div className="bg-muted p-8 rounded-lg animate-fade-in" style={{ animationDelay: '500ms' }}>
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Client-Centered Approach</h3>
              <p className="text-muted-foreground">Transforming your ideas into results through close collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}