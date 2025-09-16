import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Waves, Globe, Camera } from 'lucide-react';

const features = [
  {
    icon: Waves,
    title: 'Praias Paradisíacas',
    description: 'Descubra as praias mais deslumbrantes do mundo, com águas cristalinas e areias douradas que vão te deixar sem fôlego.',
    color: 'text-blue-500'
  },
  {
    icon: Globe,
    title: 'Viagens Internacionais',
    description: 'Explore culturas fascinantes, monumentos históricos e paisagens únicas em destinos internacionais cuidadosamente selecionados.',
    color: 'text-green-500'
  },
  {
    icon: Camera,
    title: 'Passeios Culturais',
    description: 'Mergulhe na história e tradições locais com nossos roteiros culturais exclusivos e guias especializados.',
    color: 'text-purple-500'
  }
];

const Features = () => {
  return (
    <section id="destinos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Experiências Únicas Para Você
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada viagem é uma oportunidade de criar memórias inesquecíveis. 
            Descubra nossos principais tipos de experiências.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover bg-white border-0 shadow-card group">
              <CardContent className="p-8 text-center">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-card-gradient rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;