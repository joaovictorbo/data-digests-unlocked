import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Hash, Play, RotateCcw } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const HashingAnimation = () => {
  const [inputKey, setInputKey] = useState("user123");
  const [hashValue, setHashValue] = useState("");
  const [memoryAddress, setMemoryAddress] = useState("");
  const [animationStep, setAnimationStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Simulação de função hash simples
  const simpleHash = (key: string): number => {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      const char = key.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Converte para 32-bit integer
    }
    return Math.abs(hash) % 1024; // Hash table com 1024 slots
  };

  const startAnimation = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setAnimationStep(0);
    setHashValue("");
    setMemoryAddress("");

    // Step 1: Input processing
    setTimeout(() => {
      setAnimationStep(1);
    }, 500);

    // Step 2: Hash calculation
    setTimeout(() => {
      setAnimationStep(2);
      const hash = simpleHash(inputKey);
      setHashValue(hash.toString());
    }, 1500);

    // Step 3: Memory address calculation
    setTimeout(() => {
      setAnimationStep(3);
      const address = `0x${simpleHash(inputKey).toString(16).padStart(8, '0').toUpperCase()}`;
      setMemoryAddress(address);
    }, 2500);

    // Step 4: Complete
    setTimeout(() => {
      setAnimationStep(4);
      setIsAnimating(false);
    }, 3500);
  };

  const resetAnimation = () => {
    setAnimationStep(0);
    setHashValue("");
    setMemoryAddress("");
    setIsAnimating(false);
  };

  const memorySlots = Array.from({ length: 16 }, (_, i) => i);
  const targetSlot = hashValue ? simpleHash(inputKey) % 16 : -1;

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <Badge variant="outline" className="mb-6 text-primary border-primary/30">
            Demonstração Interativa
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Como o <span className="text-primary">Hashing</span> Funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visualize em tempo real como uma chave é transformada em um endereço de memória
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Controles */}
          <Card className="mb-8 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Hash className="w-5 h-5 text-primary" />
                Simulador de Hash Function
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="text-sm font-medium mb-2 block">Chave de Entrada</label>
                  <Input
                    value={inputKey}
                    onChange={(e) => setInputKey(e.target.value)}
                    placeholder="Digite uma chave..."
                    disabled={isAnimating}
                  />
                </div>
                <div className="flex gap-2 sm:items-end">
                  <Button 
                    onClick={startAnimation}
                    disabled={isAnimating || !inputKey}
                    className="flex items-center gap-2"
                  >
                    <Play className="w-4 h-4" />
                    {isAnimating ? "Processando..." : "Executar Hash"}
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={resetAnimation}
                    disabled={isAnimating}
                  >
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Visualização do Processo */}
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Input */}
            <Card className={`transition-all duration-500 ${animationStep >= 1 ? 'shadow-glow scale-105 border-primary/50' : 'shadow-elegant'}`}>
              <CardHeader className="text-center">
                <CardTitle className="text-lg">1. Input Key</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className={`text-2xl font-mono p-4 rounded-lg border-2 transition-all duration-500 ${
                  animationStep >= 1 ? 'bg-primary/10 border-primary/30 animate-pulse-slow' : 'bg-muted border-border'
                }`}>
                  "{inputKey}"
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Chave de entrada do usuário
                </p>
              </CardContent>
            </Card>

            {/* Hash Function */}
            <Card className={`transition-all duration-500 ${animationStep >= 2 ? 'shadow-glow scale-105 border-secondary/50' : 'shadow-elegant'}`}>
              <CardHeader className="text-center">
                <CardTitle className="text-lg">2. Hash Function</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className={`text-2xl font-mono p-4 rounded-lg border-2 transition-all duration-500 ${
                  animationStep >= 2 ? 'bg-secondary/10 border-secondary/30' : 'bg-muted border-border'
                }`}>
                  {hashValue || "???"}
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Valor hash calculado
                </p>
                {animationStep >= 2 && (
                  <div className="mt-3 text-xs text-muted-foreground">
                    <span className="font-mono bg-secondary/10 px-2 py-1 rounded">
                      hash("{inputKey}") = {hashValue}
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Memory Address */}
            <Card className={`transition-all duration-500 ${animationStep >= 3 ? 'shadow-glow scale-105 border-accent/50' : 'shadow-elegant'}`}>
              <CardHeader className="text-center">
                <CardTitle className="text-lg">3. Memory Address</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className={`text-lg font-mono p-4 rounded-lg border-2 transition-all duration-500 ${
                  animationStep >= 3 ? 'bg-accent/10 border-accent/30' : 'bg-muted border-border'
                }`}>
                  {memoryAddress || "0x????????"}
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Endereço na memória RAM
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Memory Visualization */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle>Hash Table Visualization</CardTitle>
              <p className="text-sm text-muted-foreground">
                Representação simplificada da tabela hash (16 slots de 1024 total)
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-16 gap-2">
                {memorySlots.map((slot) => (
                  <div
                    key={slot}
                    className={`aspect-square border-2 rounded-lg flex items-center justify-center text-xs font-mono transition-all duration-500 ${
                      slot === targetSlot && animationStep >= 4
                        ? 'bg-success/20 border-success animate-pulse-slow scale-110'
                        : 'bg-muted border-border hover:bg-muted/50'
                    }`}
                  >
                    {slot}
                  </div>
                ))}
              </div>
              
              {animationStep >= 4 && (
                <div className="mt-4 p-4 bg-success/10 border border-success/30 rounded-lg animate-fade-in">
                  <div className="flex items-center gap-2 text-success font-medium">
                    <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
                    Dados acessados com sucesso em O(1)!
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Slot {targetSlot} contém os dados para a chave "{inputKey}"
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};