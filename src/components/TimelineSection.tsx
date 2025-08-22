import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Lightbulb, Rocket, Zap } from "lucide-react";

export const TimelineSection = () => {
  const timelineEvents = [
    {
      year: "1970s",
      title: "Primeiras Estruturas Hash",
      description: "Desenvolvimento das primeiras tabelas hash para bancos de dados",
      icon: Lightbulb,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
    },
    {
      year: "1990s",
      title: "Memory-Mapped Files",
      description: "Introdução de mapeamento de arquivos em memória para performance",
      icon: Calendar,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      year: "2000s",
      title: "In-Memory Databases",
      description: "Surgimento de bancos completamente em memória como Redis",
      icon: Rocket,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      year: "2010s+",
      title: "Memory Engines Modernos",
      description: "Otimizações avançadas com NUMA, persistent memory e NVMe",
      icon: Zap,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <Badge variant="outline" className="mb-6 text-secondary border-secondary/30">
            Evolução Histórica
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Timeline dos <span className="text-secondary">Memory Engines</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe a evolução dos motores de banco de dados em memória ao longo das décadas
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Linha do tempo central */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full"></div>
          
          <div className="space-y-16">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={event.year}
                  className={`relative flex items-center ${isEven ? 'justify-start' : 'justify-end'} animate-slide-up`}
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  {/* Ponto na linha do tempo */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-primary rounded-full z-10 shadow-lg animate-pulse-slow"></div>
                  
                  {/* Card do evento */}
                  <Card 
                    className={`w-full max-w-md shadow-elegant hover:shadow-glow transition-all duration-500 hover:-translate-y-2 ${
                      isEven ? 'mr-auto' : 'ml-auto'
                    } ${isEven ? 'lg:mr-8' : 'lg:ml-8'}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 ${event.bgColor} ${event.borderColor} border-2 rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-6 h-6 ${event.color}`} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <Badge variant="secondary" className="text-xs">
                              {event.year}
                            </Badge>
                          </div>
                          <h3 className="text-lg font-semibold mb-2">
                            {event.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Estatísticas resumo */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          <Card className="text-center p-6 bg-white/80 backdrop-blur-sm shadow-elegant animate-scale-in">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Anos de evolução</div>
          </Card>
          
          <Card className="text-center p-6 bg-white/80 backdrop-blur-sm shadow-elegant animate-scale-in" style={{animationDelay: '0.1s'}}>
            <div className="text-3xl font-bold text-secondary mb-2">1000x</div>
            <div className="text-sm text-muted-foreground">Mais rápido que disco</div>
          </Card>
          
          <Card className="text-center p-6 bg-white/80 backdrop-blur-sm shadow-elegant animate-scale-in" style={{animationDelay: '0.2s'}}>
            <div className="text-3xl font-bold text-accent mb-2">O(1)</div>
            <div className="text-sm text-muted-foreground">Complexidade de acesso</div>
          </Card>
          
          <Card className="text-center p-6 bg-white/80 backdrop-blur-sm shadow-elegant animate-scale-in" style={{animationDelay: '0.3s'}}>
            <div className="text-3xl font-bold text-success mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Disponibilidade</div>
          </Card>
        </div>
      </div>
    </section>
  );
};