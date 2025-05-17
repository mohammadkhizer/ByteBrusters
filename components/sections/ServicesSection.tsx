'use client';

import { useState } from 'react';
import { Globe, Network, Video, Smartphone, Computer, Palette, TrendingUp, PlaySquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    id: 1,
    title: "Computer Networking",
    description: "Design, implementation and maintenance of secure and efficient network infrastructure for businesses of all sizes.",
    icon: <Network className="h-10 w-10" />,
    features: [
      "Network design and consulting",
      "Installation and configuration",
      "Network security",
      "Troubleshooting and maintenance",
      "Cloud networking solutions"
    ]
  },
  {
    id: 2,
    title: "Web Development",
    description: "Custom web applications and websites designed to meet your specific business needs and objectives.",
    icon: <Globe className="h-10 w-10" />,
    features: [
      "Responsive web design",
      "E-commerce solutions",
      "Content management systems",
      "Web application development",
      "API integrations"
    ]
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android to expand your business reach.",
    icon: <Smartphone className="h-10 w-10" />,
    features: [
      "iOS app development",
      "Android app development",
      "Cross-platform solutions",
      "App maintenance and updates",
      "App store optimization"
    ]
  },
  {
    id: 4,
    title: "Computer Sales & Services",
    description: "High-quality computer hardware, software, and repair services for individuals and businesses.",
    icon: <Computer className="h-10 w-10" />,
    features: [
      "Hardware sales and installation",
      "Software licensing and deployment",
      "Computer repair and maintenance",
      "Data recovery services",
      "IT consultation"
    ]
  },
  {
    id: 5,
    title: "Graphics Design",
    description: "Creative design solutions including branding, marketing materials, and digital assets for your business.",
    icon: <Palette className="h-10 w-10" />,
    features: [
      "Logo and brand identity",
      "Print design",
      "Digital marketing assets",
      "UI/UX design",
      "Illustration and infographics"
    ]
  },
  {
    id: 6,
    title: "Video & Photo Editing",
    description: "Professional video and photo editing services to enhance your visual content and engagement.",
    icon: <Video  className="h-10 w-10" />,
    features: [
      "Video editing and post-production",
      "Photo retouching and enhancement",
      "Motion graphics and animation",
      "Corporate video production",
      "Social media content creation"
    ]
  }
  
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0].id);

  const handleServiceClick = (id: number) => {
    setActiveService(id);
  };

  const activeServiceData = services.find(service => service.id === activeService) || services[0];

  return (
    <section id="services" className="section-padding bg-card relative">
      <div className="container mx-auto">
        <h2 className="section-title animate-fade-in">
          Our <span className="gradient-text">Services</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16 animate-fade-in" style={{ animationDelay: '200ms' }}>
          We offer comprehensive production services to bring your creative vision to reality, 
          from initial concept to final delivery.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="space-y-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  className={cn(
                    "w-full text-left p-8 rounded-lg transition-all duration-300 flex items-start gap-4",
                    activeService === service.id 
                      ? "bg-primary/10 border-l-4 border-primary" 
                      : "bg-muted hover:bg-muted/70 border-l-4 border-transparent"
                  )}
                  onClick={() => handleServiceClick(service.id)}
                >
                  <div className={cn(
                    "p-3 rounded-full transition-colors",
                    activeService === service.id ? "text-primary" : "text-muted-foreground"
                  )}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="bg-muted p-8 rounded-lg h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-primary/10 rounded-full text-primary">
                  {activeServiceData.icon}
                </div>
                <h3 className="text-2xl font-bold">{activeServiceData.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-8">
                {activeServiceData.description}
              </p>
              
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                Key Features
              </h4>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {activeServiceData.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <PlaySquare className="h-5 w-5 mt-0.5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 text-center">
                <a href="#contact" className="button-primary">
                  Inquire About This Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}