import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0f1115] to-[#0a0c0f] text-foreground relative overflow-hidden border-t border-border/30">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-1/3 w-96 h-48 bg-accent/5 blur-3xl" />
      
      <div className="container-custom py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <div className="mb-6">
              <span className="block font-bold text-3xl editorial-heading tracking-tight">
                Athlete<span className="text-accent">Hub</span>
              </span>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
                Premium Sports Gear
              </p>
            </div>
            <p className="text-muted-foreground body-text mb-8 leading-relaxed">
              Your trusted partner for premium sports equipment and accessories. 
              Empowering athletes at every level.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-500">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-500">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-foreground uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-muted-foreground hover:text-accent transition-colors duration-500 text-sm">All Products</Link></li>
              <li><Link to="/shop?sport=cricket" className="text-muted-foreground hover:text-accent transition-colors duration-500 text-sm">Cricket Gear</Link></li>
              <li><Link to="/shop?sport=football" className="text-muted-foreground hover:text-accent transition-colors duration-500 text-sm">Football Equipment</Link></li>
              <li><Link to="/shop?sport=fitness" className="text-muted-foreground hover:text-accent transition-colors duration-500 text-sm">Fitness Accessories</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-accent transition-colors duration-500 text-sm">About Us</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-bold mb-6 text-foreground uppercase tracking-wider text-sm">Customer Service</h4>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors duration-500 text-sm">Contact Us</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-500 text-sm">Shipping Info</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-500 text-sm">Returns & Exchanges</a></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-accent transition-colors duration-500 text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-accent transition-colors duration-500 text-sm">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-6 text-foreground uppercase tracking-wider text-sm">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">123 Sports Avenue, Athletic City, AC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground text-sm">hello@athletehub.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Athlete Hub. All rights reserved.
          </p>
          <div className="flex items-center gap-6 opacity-60 hover:opacity-100 transition-opacity">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/200px-PayPal.svg.png" alt="PayPal" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};
