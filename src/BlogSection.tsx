import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Como manter a pele saudável no verão",
      excerpt: "Descubra cuidados essenciais para proteger a pele do sol, prevenir manchas e manter a hidratação durante os meses mais quentes do ano.",
      category: "Cuidados Diários",
      date: "15 Jul 2024",
      readTime: "5 min",
      featured: true
    },
    {
      id: 2,
      title: "Preenchimento Labial: dúvidas mais comuns",
      excerpt: "Respostas completas sobre segurança, durabilidade, preparação e resultados do procedimento mais procurado em nossa clínica.",
      category: "Procedimentos",
      date: "10 Jul 2024",
      readTime: "7 min",
      featured: true
    },
    {
      id: 3,
      title: "Skinbooster: o segredo da pele hidratada",
      excerpt: "Entenda como funciona o tratamento que revolucionou a hidratação facial e por que tantas pacientes estão apaixonadas pelos resultados.",
      category: "Tratamentos",
      date: "5 Jul 2024",
      readTime: "4 min",
      featured: false
    },
    {
      id: 4,
      title: "Harmonização facial: arte e ciência",
      excerpt: "A importância do equilíbrio facial e como técnicas avançadas podem realçar sua beleza natural respeitando suas características únicas.",
      category: "Harmonização",
      date: "1 Jul 2024",
      readTime: "6 min",
      featured: false
    }
  ];

  return (
    <section id="blog" className="py-10 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-foreground">
            Dicas &
            <span className="block font-bold text-primary">Artigos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Compartilhamos conhecimento e dicas valiosas sobre cuidados estéticos, 
            procedimentos e tendências em dermatologia
          </p>
        </div>

        {/* Featured Posts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <Card 
              key={post.id}
              className="clinic-card group hover:shadow-elegant transition-all duration-500 slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Featured Image Placeholder */}
              <div className="aspect-video bg-gradient-primary rounded-t-xl relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-primary-foreground">
                  <div className="text-center">
                    <BookOpen className="w-12 h-12 mx-auto mb-2 opacity-60" />
                    <p className="text-sm opacity-80">Imagem do artigo</p>
                  </div>
                </div>
                {post.featured && (
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    Destaque
                  </Badge>
                )}
              </div>

              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <Badge variant="outline">{post.category}</Badge>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto font-medium text-primary hover:text-primary/80 group-hover:gap-2 transition-all duration-300"
                >
                  Ler artigo completo
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Posts Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <Card 
              key={post.id}
              className="clinic-card group hover:shadow-lg transition-all duration-300 scale-in"
              style={{ animationDelay: `${(index + 2) * 150}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                  <Badge variant="outline" className="text-xs">{post.category}</Badge>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="p-0 h-auto font-medium text-primary hover:text-primary/80"
                >
                  Ler mais
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="bg-gradient-primary rounded-2xl p-12 text-primary text-center fade-in">
          <h3 className="text-2xl md:text-3xl font-light mb-4">
            Receba dicas exclusivas
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Assine nossa newsletter e receba conteúdos exclusivos sobre cuidados estéticos, 
            novidades em tratamentos e promoções especiais
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-full bg-white text-primary placeholder:text-primary/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8">
              Assinar
            </Button>
          </div>
          <p className="text-sm opacity-70 mt-4">
            Não enviamos spam. Cancele quando quiser.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;