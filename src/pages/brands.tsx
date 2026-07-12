import { useSEO } from '@/hooks/use-seo';
import { useIntersectionObserver } from '@/hooks/use-scroll';
import { Layout } from '@/components/layout';

const brandTiers = [
  {
    tier: 'Elite Performance',
    desc: 'Professional grade equipment trusted by athletes globally.',
    brands: ['Apex Dynamics', 'Velocity Pro', 'Titan Force', 'Aero Strike', 'Quantum Gear']
  },
  {
    tier: 'Pro Standards',
    desc: 'High-quality, durable equipment for serious competitors.',
    brands: ['Ironclad Sports', 'Core Athletics', 'Nova Fit', 'Strike Zone', 'Vertex']
  },
  {
    tier: 'Training Essentials',
    desc: 'Reliable gear for daily training and development.',
    brands: ['Endurance Line', 'Active Basics', 'Prime Motion', 'Forma', 'Impact']
  }
];

export default function Brands() {
  useSEO({
    title: 'Premium Brands & Partners',
    description: 'Mahadeva Sports partners with top-tier athletic brands to bring professional-grade equipment to Noida. View our trusted brand selection.',
    canonicalPath: '/brands'
  });

  const [headerRef, headerIntersecting] = useIntersectionObserver();

  return (
    <Layout>
      <main className="pt-24 pb-24">
        <section ref={headerRef} className="container mx-auto px-4 md:px-6 pt-12 pb-16">
          <div className={`max-w-4xl transition-all duration-700 ${headerIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 uppercase">
              Trusted <span className="text-gradient">Partners</span>
            </h1>
            <div className="w-24 h-2 bg-primary mb-8"></div>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              We stock only reputable, performance-tested brands to ensure every piece of equipment meets our exacting standards.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {brandTiers.map((tier, i) => (
              <BrandSection key={tier.tier} tier={tier} index={i} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

function BrandSection({ tier, index }: { tier: any, index: number }) {
  const [ref, intersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 ${intersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-4">{tier.tier}</h2>
        <p className="text-lg text-muted-foreground">{tier.desc}</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {tier.brands.map((brand: string, i: number) => (
          <div 
            key={brand}
            className="aspect-video glass-panel rounded-md flex items-center justify-center p-6 group hover:border-primary/50 transition-colors relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="font-display text-2xl font-bold uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors text-center relative z-10">
              {brand}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
