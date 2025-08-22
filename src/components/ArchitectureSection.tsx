import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Database, Hash, Cpu, HardDrive } from "lucide-react";

export const ArchitectureSection = () => {
  const components = [
    {
      name: "Hash Function",
      icon: Hash,
      description: "Converte chaves em endereços de hash",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      name: "Hash Table",
      icon: Database,
      description: "Estrutura de dados principal",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      name: "Memory Pool",
      icon: HardDrive,
      description: "Gerencia alocação de memória",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      name: "CPU Cache",
      icon: Cpu,
      description: "Otimização de acesso",
      color: "text-success",
      bgColor: "bg-success/10"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <Badge variant="outline" className="mb-6 text-primary border-primary/30">
            Arquitetura Técnica
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Como o Memory Engine <span className="text-primary">Funciona</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entenda a arquitetura interna e os componentes que tornam o Memory Engine extremamente eficiente
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {components.map((component, index) => {
            const Icon = component.icon;
            return (
              <Card 
                key={component.name} 
                className="relative overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-scale-in group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${component.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${component.color}`} />
                  </div>
                  <CardTitle className="text-lg">{component.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    {component.description}
                  </p>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>
            );
          })}
        </div>

        {/* Fluxo de Dados */}
        <Card className="p-8 bg-white/50 backdrop-blur-sm shadow-elegant animate-fade-in">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl md:text-3xl mb-4">
              Fluxo de Dados no Memory Engine
            </CardTitle>
            <p className="text-muted-foreground">
              Visualize como os dados fluem através dos componentes da arquitetura
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
              {/* Input */}
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <span className="text-2xl">🔑</span>
                </div>
                <h4 className="font-semibold mb-2">Input Key</h4>
                <p className="text-sm text-muted-foreground">Chave de entrada</p>
              </div>

              <ArrowRight className="text-primary/50 w-8 h-8 animate-float" />

              {/* Hash Function */}
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hash className="w-10 h-10 text-secondary" />
                </div>
                <h4 className="font-semibold mb-2">Hash Function</h4>
                <p className="text-sm text-muted-foreground">Calcula hash</p>
              </div>

              <ArrowRight className="text-primary/50 w-8 h-8 animate-float" style={{animationDelay: '0.5s'}} />

              {/* Memory Location */}
              <div className="text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HardDrive className="w-10 h-10 text-accent" />
                </div>
                <h4 className="font-semibold mb-2">Memory Address</h4>
                <p className="text-sm text-muted-foreground">Localização na RAM</p>
              </div>

              <ArrowRight className="text-primary/50 w-8 h-8 animate-float" style={{animationDelay: '1s'}} />

              {/* Output */}
              <div className="text-center">
                <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse" style={{animationDelay: '1s'}}>
                  <span className="text-2xl">💾</span>
                </div>
                <h4 className="font-semibold mb-2">Data Access</h4>
                <p className="text-sm text-muted-foreground">Acesso O(1)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};