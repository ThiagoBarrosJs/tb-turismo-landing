import React from 'react';
import { Plane, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-hero-gradient rounded-full">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
                  TB Turismo
                </h3>
                <p className="text-xs text-background/70 -mt-1">Descubra o mundo</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed">
              Há mais de 15 anos realizando sonhos e criando memórias img de pessoa oesquecíveis através de viagens únicas e experiências autênticas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-secondary">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-background/80 hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#destinos" className="text-background/80 hover:text-secondary transition-colors">Destinos</a></li>
              <li><a href="#pacotes" className="text-background/80 hover:text-secondary transition-colors">Pacotes</a></li>
              <li><a href="#contato" className="text-background/80 hover:text-secondary transition-colors">Contato</a></li>
              <li><a href="#" className="text-background/80 hover:text-secondary transition-colors">Sobre Nós</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-secondary">Nossos Serviços</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-secondary transition-colors">Viagens Nacionais</a></li>
              <li><a href="#" className="text-background/80 hover:text-secondary transition-colors">Viagens Internacionais</a></li>
              <li><a href="#" className="text-background/80 hover:text-secondary transition-colors">Lua de Mel</a></li>
              <li><a href="#" className="text-background/80 hover:text-secondary transition-colors">Viagens Corporativas</a></li>
              <li><a href="#" className="text-background/80 hover:text-secondary transition-colors">Cruzeiros</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-secondary">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-background/80">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-background/80">contato@tbturismo.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="text-background/80">São Paulo, SP</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3 text-secondary">Siga-nos</h5>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary hover:text-foreground transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary hover:text-foreground transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary hover:text-foreground transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60">
            &copy; 2024 TB Turismo. Todos os direitos reservados. | 
            <a href="#" className="hover:text-secondary transition-colors ml-1">Política de Privacidade</a> | 
            <a href="#" className="hover:text-secondary transition-colors ml-1">Termos de Uso</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;