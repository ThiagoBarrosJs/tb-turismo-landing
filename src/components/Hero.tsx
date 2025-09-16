import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Star } from 'lucide-react';
import heroImage from '@/assets/hero-beach.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-overlay-gradient" />
      
      {/* Decorative wave */}
      <div className="hero-bg absolute inset-0 opacity-30" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-secondary" fill="currentColor" />
            <span className="text-sm font-medium">Mais de 10.000 viajantes satisfeitos</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Descubra o mundo com a{' '}
            <span className="bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent">
              TB Turismo
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Experiências únicas, destinos paradisíacos e momentos inesquecíveis 
            aguardam por você. Sua próxima aventura começa aqui.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="btn-bounce bg-secondary hover:bg-secondary-dark text-secondary-foreground shadow-button px-8 py-4 text-lg font-semibold">
              Explorar destinos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="btn-bounce border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
              <MapPin className="mr-2 w-5 h-5" />
              Ver pacotes
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-secondary">50+</div>
              <div className="text-sm text-white/80">Destinos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-secondary">15</div>
              <div className="text-sm text-white/80">Anos de experiência</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-secondary">24/7</div>
              <div className="text-sm text-white/80">Suporte</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;