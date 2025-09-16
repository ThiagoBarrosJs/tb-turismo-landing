import React from 'react';
import { Button } from '@/components/ui/button';
import { Plane } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-10 h-10 bg-hero-gradient rounded-full">
            <Plane className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
              TB Turismo
            </h1>
            <p className="text-xs text-muted-foreground -mt-1">Descubra o mundo</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="nav-link">Home</a>
          <a href="#destinos" className="nav-link">Destinos</a>
          <a href="#pacotes" className="nav-link">Pacotes</a>
          <a href="#contato" className="nav-link">Contato</a>
        </nav>

        {/* CTA Button */}
        <Button variant="outline" className="btn-bounce border-primary text-primary hover:bg-primary hover:text-white">
          Fale Conosco
        </Button>
      </div>
    </header>
  );
};

export default Header;