'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = [
  'All',
  'Web Series',
  'Podcasts',
  'Short Films',
  'Feature Films',
  'Commercials',
];

const projects = [
  {
    id: 1,
    title: ' THE PERFECT IMMIGRANTS ',
    category: 'Web Series',
    image: 'images/THE-PERFECT-IMMIGRANTS.png',
    description: '(6 EPISODES,WEBSERIES) web-series on immigrants who encounters series of issues while living in UK.',
  },
  {
    id: 2,
    title: 'The GREAT NRI ADVENTURES',
    category: 'Web Series',
    image: 'images/The-GREAT-NRI-ADVENTURES.png',
    description: 'Commercial of Hotel Celebrity based in Bournemouth, UK.',
    link: 'https://m.imdb.com/title/tt35941563/?ref_=nm_knf_i_4'
  },
  {
    id: 3,
    title: 'HOTEL CELEBRITY ',
    category: 'AD',
    image: 'images/HOTEL-CELEBRITY.png',
    description: 'In-depth discussions with thought leaders on personal development and mindfulness.',
  },
  {
    id: 4,
    title: 'VAIGAI',
    category: 'AD',
    image: 'images/VAIGAI.png',
    description: 'Commercial of Vaigai Supermarket based in Bournmouth, UK.',
  },
  {
    id: 5,
    title: 'THE LAST WAVE',
    category: 'SHORT FILMS',
    image: 'images/THE-LAST-WAVE.png',
    description: 'A haunting journey through grief and vengeance, The Last Wave follows mute cook Todi and paralyzed Victor. Secrets emerge, revealing twisted pasts and devastating truths. As love and betrayal collide, the story ends with a powerful, unforgettable twist.',
  },
  {
    id: 6,
    title: 'LUNCH BREAK',
    category: 'SHORT FILMS',
    image: 'images/LUNCH-BREAK.png',
    description: ' During his chaotic lunch in the park, office worker Graham encounters Larry, an unpredictable stranger. Mishaps unfold—crossword errors, coffee spills, stolen briefcases. Amid frustration, laughter and connection emerge as Graham shares his sandwich, discovering unexpected friendship through disorder.',
  },
  {
    id: 7,
    title: 'LETTER ACROSS THE CHANNEL',
    category: 'SHORT FILMS',
    image: 'images/LETTER-ACROSS-THE-CHANNEL.png',
    description: 'Three journalists from the UK, Germany, and Nigeria debate how to cover the Ukraine wars ripple effects—whether to spotlight individual struggles or reveal global economic ties—while navigating national bias, journalistic duty, and the search of understanding.',
  },
  {
    id: 8,
    title: 'CLIFF WALK',
    category: 'SHORT FILMS',
    image: 'images/CLIFF-WALK.png',
    description: 'After suffering constant bullying, Jason confronted his stalker with only a pen. Instead of retaliating, he showed restraint and let him go—demonstrating strength, control, and a refusal to become what once hurt him. A moment of true transformation.',
  },
  {
    id: 9,
    title: 'THE GAP',
    category: 'SHORT FILMS',
    image: 'images/THE-GAP.png',
    description: 'In the unrest of the 1900s, a factory explosion leaves Jacob blamed for sabotage. Betrayed and pursued, his fate entangles with Mia and Sarah. Time-traveler Mathew returns home, uncovering a haunting link between their tragedy and his present.',
  },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto">
        <h2 className="section-title  mb-16 animate-fade-in">
          Our <span className="gradient-text">Projects</span>
        </h2>

        <div className="flex flex-wrap hidden justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
          {categories.map((category) => (
            <button
              key={category}
              className={cn(
                'px-6 py-2 rounded-full transition-all duration-300',
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/70'
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative rounded-lg overflow-hidden animate-fade-in"
              style={{ animationDelay: `${300 + index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={cn(
                    "object-cover transition-all duration-500",
                    hoveredProject === project.id ? "scale-110" : "scale-100"
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm rounded px-3 py-1 text-xs inline-block mb-3">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className={cn(
                  "text-muted-foreground text-sm transition-all duration-300",
                  hoveredProject === project.id ? "opacity-100 max-h-20" : "opacity-0 max-h-0"
                )}>
                  {project.description}
                </p>
              </div>
              
              
              <div className={cn(
                "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300",
                hoveredProject === project.id ? "opacity-100 scale-100" : "opacity-0 scale-50"
              )}>
                <button className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center">
                  <a href={project.link} target='_blank'> 
                    <Globe className="h-6 w-6 text-primary-foreground" />
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}