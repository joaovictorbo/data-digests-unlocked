import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Clock, Database, Zap } from "lucide-react";

export const PerformanceSection = () => {
  const performanceData = [
    { name: "Disk-based", read: 100, write: 80, color: "#ef4444" },
    { name: "SSD-based", read: 500, write: 300, color: "#f97316" },
    { name: "Memory Engine", read: 50000, write: 45000, color: "#6366f1" },
  ];

  const useCasesData = [
    { name: "Caching", value: 35, color: "#6366f1" },
    { name: "Session Store", value: 25, color: "#8b5cf6" },
    { name: "Real-time Analytics", value: 20, color: "#06b6d4" },
    { name: "Gaming Leaderboards", value: 12, color: "#10b981" },
    { name: "Outros", value: 8, color: "#f59e0b" },
  ];

  const benchmarks = [
    {
      metric: "Latência",
      value: "< 1ms",
      description: "Tempo de resposta médio",
      icon: Clock,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      metric: "Throughput",
      value: "1M+ ops/s",
      description: "Operações por segundo",
      icon: TrendingUp,
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      metric: "Capacidade",
      value: "RAM Limit",
      description: "Limitado pela memória",
      icon: Database,
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      metric: "Disponibilidade",
      value: "99.99%",
      description: "Alta disponibilidade",
      icon: Zap,
      color: "text-success",
      bgColor: "bg-success/10"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <Badge variant="outline" className="mb-6 text-primary border-primary/30">
            Performance & Benchmarks
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Performance <span className="text-primary">Excepcional</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja como o Memory Engine supera outras soluções em velocidade e eficiência
          </p>
        </div>

        {/* Métricas principais */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benchmarks.map((benchmark, index) => {
            const Icon = benchmark.icon;
            return (
              <Card 
                key={benchmark.metric}
                className="text-center shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${benchmark.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`w-8 h-8 ${benchmark.color}`} />
                  </div>
                  <div className="text-3xl font-bold mb-2">{benchmark.value}</div>
                  <div className="font-semibold text-foreground mb-1">{benchmark.metric}</div>
                  <div className="text-sm text-muted-foreground">{benchmark.description}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Gráfico de Performance */}
          <Card className="shadow-elegant animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Comparação de Performance
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Operações por segundo (escala logarítmica)
              </p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis 
                    dataKey="name"
                    fontSize={12}
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  />
                  <YAxis 
                    scale="log"
                    domain={[1, 100000]}
                    fontSize={12}
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="read" name="Leitura" fill="#6366f1" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="write" name="Escrita" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Casos de Uso */}
          <Card className="shadow-elegant animate-scale-in" style={{animationDelay: '0.2s'}}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5 text-secondary" />
                Principais Casos de Uso
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Distribuição por tipo de aplicação
              </p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={useCasesData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    fontSize={12}
                  >
                    {useCasesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Vantagens vs Desvantagens */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-elegant animate-slide-up border-l-4 border-l-success">
            <CardHeader>
              <CardTitle className="text-success">✅ Vantagens</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Performance Extrema</p>
                  <p className="text-sm text-muted-foreground">Acesso O(1) com latência sub-milissegundo</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Simplicidade</p>
                  <p className="text-sm text-muted-foreground">Implementação e manutenção simples</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Escalabilidade</p>
                  <p className="text-sm text-muted-foreground">Escala horizontalmente com cluster</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Cache Friendly</p>
                  <p className="text-sm text-muted-foreground">Otimizado para cache de CPU</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant animate-slide-up border-l-4 border-l-destructive" style={{animationDelay: '0.2s'}}>
            <CardHeader>
              <CardTitle className="text-destructive">⚠️ Limitações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Volatilidade</p>
                  <p className="text-sm text-muted-foreground">Dados perdidos quando sistema reinicia</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Custo de Memória</p>
                  <p className="text-sm text-muted-foreground">RAM é mais cara que armazenamento persistente</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Capacidade Limitada</p>
                  <p className="text-sm text-muted-foreground">Limitado pela quantidade de RAM disponível</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Backup Complexo</p>
                  <p className="text-sm text-muted-foreground">Requer estratégias especiais de backup</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};