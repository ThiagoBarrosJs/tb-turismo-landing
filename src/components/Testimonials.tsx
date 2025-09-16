import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Silva',
    location: 'São Paulo, SP',
    text: 'A TB Turismo transformou nossa lua de mel em uma experiência mágica! Bali foi ainda mais incrível do que imaginávamos. Atendimento impecável do início ao fim.',
    rating: 5,
    avatar: '👩‍💼'
  },
  {
    name: 'João Santos',
    location: 'Rio de Janeiro, RJ',
    text: 'Viajei para a Europa com minha família e tudo foi perfeito! Os roteiros eram bem planejados e os guias super conhecedores. Já estamos planejando a próxima viagem!',
    rating: 5,
    avatar: '👨‍💻'
  },
  {
    name: 'Ana Costa',
    location: 'Brasília, DF',
    text: 'Como pessoa que viaja sozinha, me senti super segura e acolhida. A TB Turismo cuidou de cada detalhe da minha viagem para o Japão. Experiência incrível!',
    rating: 5,
    avatar: '👩‍🎨'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            O que nossos viajantes dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de pessoas que confiaram em nós para realizar os seus sonhos de viagem.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="testimonial-card group">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex justify-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                    <Quote className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-muted-foreground text-center mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-12 h-12 bg-card-gradient rounded-full flex items-center justify-center text-2xl mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Pronto para ser nosso próximo cliente satisfeito?</p>
          <button className="btn-bounce bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 rounded-full font-semibold transition-colors duration-300">
            Começar minha jornada
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;