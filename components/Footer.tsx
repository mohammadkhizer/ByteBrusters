import { Film, Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <a href="#home" className="flex items-center gap-2 text-xl font-bold mb-4">
              
              <span className='gradient-text'>ByteBrusters</span>
            </a>
            <p className="text-muted-foreground mb-6">
              Bringing your cinematic vision to life with exceptional storytelling and premium production quality.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-accent transition-colors">
                  Computer Networking
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-accent transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-accent transition-colors">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-accent transition-colors">
                  Computer Sales & Services
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-accent transition-colors">
                  Graphics Design
                </a>
              </li>
              <li>
                <a href='#services' className="text-muted-foreground hover:text-accent transition-colors">
                  Video & Photo Editing
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 mt-0.5" />
                <a href="mailto:bytebrusters1115@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                  bytebrusters1115@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📞</span>
                <a href="tel:+919510865651" className="text-muted-foreground hover:text-accent transition-colors">
                  +91 9510865651
                </a>
              </li>
              <li>
                <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-6 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} ByteBrusters. All rights reserved.</p>
          <p>Manage and Developed By <a href='linkedin.com/in/mohammad-khizer-shaikh-14a362275/'><b>Mohammed Khizer Shaikh</b></a></p>
          </div>
      </div>
    </footer>
  );
}