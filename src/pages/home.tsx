import { useSEO } from '@/hooks/use-seo';
import { useIntersectionObserver } from '@/hooks/use-scroll';
import { Link } from 'wouter';
import { Layout } from '@/components/layout';
import { ArrowRight, Trophy, Shield, Zap } from 'lucide-react';

export default function Home() {
  useSEO({
    title: 'Home',
    description: 'Mahadeva Sports is Noida\'s premier sports equipment retailer. High-performance gear for cricket, football, gym, and more.',
    canonicalPath: '/'
  });

  const [heroRef, heroIntersecting] = useIntersectionObserver();
  const [categoriesRef, categoriesIntersecting] = useIntersectionObserver();
  const [featuresRef, featuresIntersecting] = useIntersectionObserver();
  const [ctaRef, ctaIntersecting] = useIntersectionObserver();

  return (
    <Layout>
      <main>
        {/* HERO SECTION */}
        <section 
          ref={heroRef}
          className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden"
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-background z-0">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] opacity-70"></div>
            <div className="absolute inset-0 sports-pattern opacity-50"></div>
          </div>

          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className={`max-w-4xl transition-all duration-1000 ${heroIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-primary/10 border border-primary/20 text-primary font-semibold text-sm tracking-wider uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Noida's Premium Sports Retailer
              </div>
              <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tight mb-6 text-foreground uppercase">
                Dominate <br/>
                <span className="text-gradient">Your Game</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-medium">
                Elite equipment for serious athletes. From professional cricket bats to heavy-duty gym gear, Mahadeva Sports equips you to win.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link 
                  href="/products"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-display text-2xl px-8 py-4 rounded-sm transform hover:-translate-y-1 transition-all shadow-xl shadow-primary/20 flex items-center gap-2 group outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  EXPLORE GEAR
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/contact"
                  className="bg-secondary hover:bg-secondary/80 text-secondary-foreground font-display text-2xl px-8 py-4 rounded-sm border border-border transform hover:-translate-y-1 transition-all flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  VISIT STORE
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES OVERVIEW */}
        <section 
          ref={featuresRef}
          className="py-24 bg-secondary relative z-10"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Trophy, title: 'Premium Quality', desc: 'Only the highest grade materials from trusted manufacturers.' },
                { icon: Shield, title: 'Authentic Gear', desc: '100% genuine equipment verified for professional use.' },
                { icon: Zap, title: 'Expert Advice', desc: 'Guided by founder Arun Kumar Yadav to match your exact needs.' }
              ].map((feature, i) => (
                <div 
                  key={i}
                  className={`glass-panel p-8 rounded-md transition-all duration-700 delay-${(i+1)*100} ${featuresIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} hover:border-primary/50 group`}
                >
                  <feature.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-display font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CATEGORY TEASER */}
        <section 
          ref={categoriesRef}
          className="py-32 relative overflow-hidden"
        >
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className={`mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 transition-all duration-700 ${categoriesIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div>
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 uppercase">Arsenal <span className="text-gradient">Selection</span></h2>
                <p className="text-xl text-muted-foreground max-w-xl">A glimpse into our comprehensive range of sporting goods.</p>
              </div>
              <Link href="/products" className="font-semibold text-primary hover:text-primary/80 uppercase tracking-wider flex items-center gap-2 group transition-colors">
                View All Categories <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Cricket', img: '/images/cricket.jpg' },
                { name: 'Football', img: '/images/football.jpg' },
                { name: 'Badminton', img: '/images/badminton.jpg' },
                { name: 'Gym Gear', img: '/images/gym.jpg' }
              ].map((cat, i) => (
                <Link 
                  key={cat.name} 
                  href="/products"
                  className={`group relative aspect-[4/5] overflow-hidden rounded-md transition-all duration-700 delay-${(i+1)*100} ${categoriesIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                >
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                  <img 
                    src={cat.img} 
                    alt={`${cat.name} Equipment`} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                    <h3 className="text-3xl font-display font-bold text-white mb-2">{cat.name}</h3>
                    <div className="w-12 h-1 bg-primary transform origin-left group-hover:scale-x-150 transition-transform"></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section 
          ref={ctaRef}
          className="py-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-primary/10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <div className={`max-w-3xl mx-auto transition-all duration-700 ${ctaIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 uppercase">Ready to Upgrade?</h2>
              <p className="text-xl text-muted-foreground mb-10">Visit Mahadeva Sports in Sector 121, Noida to experience the gear firsthand.</p>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-display text-2xl px-10 py-4 rounded-sm shadow-xl shadow-primary/20 transform hover:-translate-y-1 transition-all"
              >
                GET DIRECTIONS
              </Link>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}
