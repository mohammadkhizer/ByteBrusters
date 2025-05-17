'use client';

import { useState } from 'react';
import { Mail, Phone, Instagram  } from 'lucide-react';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactSection() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg')] bg-cover bg-center opacity-5"></div>
      <div className="container mx-auto relative z-10">
        <h2 className="section-title animate-fade-in">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16 animate-fade-in" style={{ animationDelay: '200ms' }}>
          Ready to bring your vision to life? Contact us to discuss your project 
          and how we can help make it a reality.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              
              {submitted ? (
                <div className="bg-toast-success/20 border border-toast-success/30 text-white p-4 rounded-md mb-6">
                  Thank you for your message! We will get back to you as soon as possible.
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-input rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-input rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 bg-input rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-3 bg-input rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none resize-none"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="button-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="bg-card p-8 rounded-lg shadow-lg h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">

                <div className="flex items-start gap-4">
                  <div className="bg-muted p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:bytebrusters1115@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                      bytebrusters1115@gmail.com
                    </a>
                  </div>
                </div>

                  <div className="flex items-start gap-4">
                  <div className="bg-muted p-3 rounded-full">
                    <Instagram className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Instagram</h4>
                    <a href="https://instagram.com/ByteBrusters/" target='_blank' className="text-muted-foreground hover:text-accent">ByteBrusters</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-muted p-3 rounded-full">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:+919510865651" className="text-muted-foreground hover:text-accent transition-colors">
                      +91 9510865651
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-auto">
                <h4 className="text-xl font-semibold mb-4">Business Hours</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}