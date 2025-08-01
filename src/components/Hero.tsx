import { Button } from "@/components/ui/button";
import { Camera, ArrowRight } from "lucide-react";
import { scrollToSection } from "@/utils/scroll";
import heroImage from "@/assets/hero-portfolio.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Wedding photography by Emilie Nørgaard"
          className="w-full h-full object-cover"
           
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <Camera className="w-10 h-10 text-gold mr-4" />
            <span className="text-white font-bold text-3xl sm:text-4xl font-display tracking-wide">Nørgaard Visuals</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-light text-white mb-6 leading-tight">
            Capturing
            <span className="block font-medium bg-gradient-gold bg-clip-text text-transparent">
              Timeless Moments
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 font-light max-w-2xl mx-auto">
            Emilie Nørgaard — Aarhus-based Photographer
          </p>
          
          <p className="text-lg text-white/80 mb-12 max-w-xl mx-auto font-light">
            Creating elegant, artistic photography that tells your unique story with warmth and authenticity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              className="bg-gold hover:bg-gold-dark text-white shadow-gold font-medium px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              Book a Session
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('portfolio')}
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-medium px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-1 h-16 bg-white/30 rounded-full overflow-hidden">
          <div className="w-full h-4 bg-white rounded-full animate-float" />
        </div>
      </div>
    </section>
  );
};

export default Hero;