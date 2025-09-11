import { Camera, Heart, Instagram, Facebook, Mail, Phone } from "lucide-react";
import enspyreLogo from "@/assets/enspyre-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <Camera className="w-8 h-8 text-gold mr-3" />
              <span className="text-2xl font-display font-semibold">Nørgaard Visuals</span>
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Capturing timeless moments with artistic vision and authentic emotion.
              Based in Aarhus, creating beautiful memories throughout Denmark and beyond.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold transition-colors duration-300 flex items-center justify-center cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold transition-colors duration-300 flex items-center justify-center cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold transition-colors duration-300 flex items-center justify-center cursor-pointer">
                <Mail className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#portfolio" className="text-white/80 hover:text-gold transition-colors">Portfolio</a></li>
              <li><a href="#about" className="text-white/80 hover:text-gold transition-colors">About</a></li>
              <li><a href="#services" className="text-white/80 hover:text-gold transition-colors">Services</a></li>
              <li><a href="#testimonials" className="text-white/80 hover:text-gold transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center text-white/80">
                <Mail className="w-4 h-4 mr-3 text-gold" />
                hello@norgaardvisuals.com
              </div>
              <div className="flex items-center text-white/80">
                <Phone className="w-4 h-4 mr-3 text-gold" />
                +45 12 34 56 78
              </div>
              <div className="flex items-start text-white/80">
                <div className="w-4 h-4 mr-3 mt-0.5 text-gold">📍</div>
                Aarhus, Denmark
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            © 2024 Nørgaard Visuals. All rights reserved.
          </div>
            <a
              href="https://enspyre.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white/60 text-sm"
            >
              <img
              src={enspyreLogo}
              alt="Enspyre Logo"
              className="w-6 h-6 rounded-full mx-2"
              />
              ENSPYRE
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;