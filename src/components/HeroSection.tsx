import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Database, Zap, Hash } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPGcgZmlsbD0iIzYzNjZmMSIgZmlsbC1vcGFjaXR5PSIwLjA1Ij4KICAgICAgPHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4=')] opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 animate-pulse-slow">
                <div className="w-24 h-24 bg-primary/20 rounded-full"></div>
              </div>
              <div className="relative z-10 w-24 h-24 gradient-primary rounded-full flex items-center justify-center animate-float">
                <Database className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Memory Engine
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Explore o poder dos motores de banco de dados baseados em <span className="font-semibold text-primary">hashing</span> 
            que revolucionaram o armazenamento em memória
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Card className="p-4 bg-white/80 backdrop-blur-sm shadow-elegant animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-sm">Ultra Rápido</p>
                  <p className="text-xs text-muted-foreground">Acesso O(1)</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-4 bg-white/80 backdrop-blur-sm shadow-elegant animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Hash className="w-5 h-5 text-secondary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-sm">Hash-Based</p>
                  <p className="text-xs text-muted-foreground">Distribuição eficiente</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-4 bg-white/80 backdrop-blur-sm shadow-elegant animate-scale-in" style={{animationDelay: '0.6s'}}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Database className="w-5 h-5 text-accent" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-sm">In-Memory</p>
                  <p className="text-xs text-muted-foreground">Alta performance</p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="space-y-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-6 text-lg font-semibold shadow-glow transition-all duration-300 hover:scale-105"
            >
              Começar Exploração
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full p-1">
          <div className="w-1 h-3 bg-primary rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};