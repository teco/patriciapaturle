import { Suspense } from 'react';
import { InstagramEmbed } from 'react-social-media-embed'; // Ensure installed: npm install react-social-media-embed
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Shadcn/UI for cards (adjust if using different UI lib)
import { Instagram } from 'lucide-react';

const BlogSection = () => {
  const instagramPosts = [
    'https://www.instagram.com/reel/DJXndmoP6Px/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    'https://www.instagram.com/reel/DL0u9yes053/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    'https://www.instagram.com/reel/DJ5GXeKvHkm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    'https://www.instagram.com/p/DLPWmpGMSLt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  ];

  return (
    <section id="blog" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <CardHeader className="text-center mb-8">
          <CardTitle className="text-3xl font-bold">Nosso Blog no Instagram</CardTitle>
          <p className="text-lg text-gray-600">Dicas de dermatologia, cuidados com a pele e vídeos educativos diretamente do nosso feed.</p>
        </CardHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {instagramPosts.map((url, index) => (
            <Card key={index} className="overflow-hidden shadow-md">
              <CardContent className="p-0">
                <Suspense fallback={<div className="h-96 flex items-center justify-center bg-gray-200">Carregando post do Instagram...</div>}>
                  <InstagramEmbed 
                    url={url} 
                    width="100%" 
                    height={500} 
                    captioned 
                    className="mx-auto aspect-video" 
                  />
                </Suspense>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            Quer ver mais conteúdo exclusivo? Siga-nos no Instagram!
          </p>
          <a 
            href="https://instagram.com/patriciapaturle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full transition-colors duration-200 min-h-[48px] text-base md:text-lg font-medium"
            aria-label="Seguir @patriciapaturle no Instagram"
          >
            <Instagram className="w-5 h-5" />
            Seguir @patriciapaturle
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;