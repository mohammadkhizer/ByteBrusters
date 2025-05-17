'use client';

import Image from 'next/image';
import { Film, Camera, Linkedin  } from 'lucide-react';
import { cn } from '@/lib/utils';

const teamMembers = [
  {
    id: 1,
    name: "Mohammed Khizer Shaikh",
    role: "Web Developer, Network Enginner",
    image: "/images/Khizer.jpeg",
    bio: "Your one-stop destination for all things digital! From top-notch computer Networking to cutting-edge web development.",
    cvPath: "https://www.linkedin.com/in/mohammad-khizer-shaikh-14a362275/"
  },
  {
    id: 2,
    name: "Mohammed Faisal Shaikh",
    role: "Jr. Web Developer, Hardware Enginner",
    image: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "I love helping people and teaching them new skills which can help them to deal with their problems, overcome their obstacles and help them to understand their feelings and emotions better. I am very good at creating a safe and confidential environment.",
    cvPath: "cv/regina-finch-cv.pdf"
  },
  {
    id: 3,
    name: "Ruhan Laliwala",
    role: "Inetern App Developer",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Visionary cinematographer known for creating stunning visual narratives that captivate audiences.",
    icon: <Camera className="h-5 w-5" />
  },
  {
    id: 4,
    name: "Alex Foster",
    role: "Sound Designer",
    image: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Sound design specialist who creates immersive audio experiences that elevate storytelling.",
    icon: <Film className="h-5 w-5" />
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="section-title text-center animate-fade-in">
          Meet Our <span className="gradient-text">Team</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16 animate-fade-in" style={{ animationDelay: '200ms' }}>
          Our talented professionals combine creativity, technical expertise, and passion 
          to deliver exceptional media productions that exceed expectations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id} 
              className="group relative animate-fade-in"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="relative h-80 rounded-lg overflow-hidden mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {member.cvPath && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-center">
                      <a 
                        href={member.cvPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary/80 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-primary transition-colors text-primary-foreground"
                      >
                        <Linkedin  />
                        
                      </a>
                    </div>
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-accent mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}