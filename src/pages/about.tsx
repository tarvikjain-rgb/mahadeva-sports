import { useSEO } from '@/hooks/use-seo';
import { useIntersectionObserver } from '@/hooks/use-scroll';
import { Layout } from '@/components/layout';
import { Target, Flag, Users } from 'lucide-react';

export default function About() {
  useSEO({
    title: 'About Us & Founder',
    description: 'Learn about Mahadeva Sports and our founder, Arun Kumar Yadav. Dedicated to providing top-tier sports equipment to the athletes of Noida.',
    canonicalPath: '/about'
  });

  const [headerRef, headerIntersecting] = useIntersectionObserver();
  const [contentRef, contentIntersecting] = useIntersectionObserver();
  const [founderRef, founderIntersecting] = useIntersectionObserver();
  const [valuesRef, valuesIntersecting] = useIntersectionObserver();

  return (
    <Layout>
      <main className="pt-24 pb-24">
        {/* Header */}
        <section ref={headerRef} className="container mx-auto px-4 md:px-6 pt-12 pb-16">
          <div className={`max-w-4xl transition-all duration-700 ${headerIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 uppercase">
              About <span className="text-gradient">Mahadeva Sports</span>
            </h1>
            <div className="w-24 h-2 bg-primary mb-8"></div>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              We are not just a sports shop. We are a destination for athletes who refuse to compromise on their equipment.
            </p>
          </div>
        </section>

        {/* Story */}
        <section ref={contentRef} className="bg-secondary/50 py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${contentIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 uppercase">Our Mission</h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    Located in the heart of Noida at Sector 121, Mahadeva Sports was established with a singular focus: to equip athletes with professional-grade sporting goods.
                  </p>
                  <p>
                    Whether you are stepping onto the cricket pitch, dominating the football field, or building a home gym, the quality of your equipment defines the ceiling of your performance. We source, stock, and recommend only the gear that meets our rigorous standards.
                  </p>
                </div>
              </div>
              <div className="relative aspect-square md:aspect-[4/3] rounded-md overflow-hidden glass-panel p-2">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 rounded-md"></div>
                <div className="w-full h-full bg-secondary flex items-center justify-center rounded-md border border-border relative overflow-hidden">
                   <div className="absolute inset-0 sports-pattern opacity-30"></div>
                   <div className="text-4xl font-display font-bold text-muted-foreground/30 uppercase text-center p-8">
                     Equip <br/> To <br/> Win
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section ref={founderRef} className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className={`max-w-5xl mx-auto glass-panel p-8 md:p-16 rounded-md relative overflow-hidden transition-all duration-700 ${founderIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-secondary border-4 border-primary/20 shrink-0 flex items-center justify-center overflow-hidden">
                  {/* Placeholder for founder image */}
                  <span className="font-display text-6xl text-muted-foreground">AKY</span>
                </div>
                <div>
                  <h2 className="text-sm text-primary font-bold tracking-widest uppercase mb-2">The Founder</h2>
                  <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 uppercase text-foreground">Arun Kumar Yadav</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    "A true athlete knows that trust in their equipment translates directly to confidence in their game. At Mahadeva Sports, we don't just sell products; we provide that confidence. Every item on our shelves is there because I believe it can help an athlete perform better."
                  </p>
                  <div className="flex items-center gap-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                    <span className="w-12 h-[1px] bg-primary"></span>
                    Director & Owner
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section ref={valuesRef} className="pb-16 pt-8">
          <div className="container mx-auto px-4 md:px-6">
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ${valuesIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              {[
                { icon: Target, title: 'Precision', desc: 'Curated selection focused on performance and durability.' },
                { icon: Flag, title: 'Local Pride', desc: 'Committed to serving and elevating Noida\'s sporting community.' },
                { icon: Users, title: 'Guidance', desc: 'Expert recommendations tailored to your skill level and goals.' }
              ].map((val, i) => (
                <div key={i} className="bg-background border border-border p-8 rounded-md group hover:border-primary/50 transition-colors">
                  <val.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="text-2xl font-display font-bold mb-3 uppercase">{val.title}</h4>
                  <p className="text-muted-foreground">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}
