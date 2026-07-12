import { useSEO } from '@/hooks/use-seo';
import { useIntersectionObserver } from '@/hooks/use-scroll';
import { Layout } from '@/components/layout';

const categories = [
  { name: 'Cricket Equipment', img: '/images/cricket.jpg', desc: 'English willow bats, leather balls, professional pads, gloves, and helmets.' },
  { name: 'Football Equipment', img: '/images/football.jpg', desc: 'Match-grade footballs, training cones, goal nets, and protective shin guards.' },
  { name: 'Badminton Equipment', img: '/images/badminton.jpg', desc: 'Carbon fiber rackets, feather and nylon shuttlecocks, and professional grips.' },
  { name: 'Volleyball Equipment', img: '/images/volleyball.jpg', desc: 'Indoor and beach volleyballs, knee pads, and professional nets.' },
  { name: 'Basketball Equipment', img: '/images/basketball.jpg', desc: 'Premium leather indoor and durable outdoor composite basketballs.' },
  { name: 'Hockey Equipment', img: '/images/hockey.jpg', desc: 'Composite and wood field hockey sticks, dimpled balls, and goalie gear.' },
  { name: 'Table Tennis', img: '/images/table-tennis.jpg', desc: 'ITTF approved paddles, 3-star seamless balls, and durable tables.' },
  { name: 'Gym Equipment', img: '/images/gym.jpg', desc: 'Hex dumbbells, kettlebells, weight plates, benches, and barbells.' },
  { name: 'Fitness Accessories', img: '/images/fitness.jpg', desc: 'Resistance bands, yoga mats, jump ropes, ab rollers, and foam rollers.' },
  { name: 'Sports Shoes', img: '/images/shoes.jpg', desc: 'High-performance cleats, non-marking indoor shoes, and running trainers.' },
];

export default function Products() {
  useSEO({
    title: 'Sports Equipment & Gear',
    description: 'Explore Mahadeva Sports categories: Cricket, Football, Badminton, Gym Gear, Sports Shoes, and more. Premium quality for ultimate performance.',
    canonicalPath: '/products'
  });

  const [headerRef, headerIntersecting] = useIntersectionObserver();

  return (
    <Layout>
      <main className="pt-24 pb-24">
        <section ref={headerRef} className="container mx-auto px-4 md:px-6 pt-12 pb-16">
          <div className={`max-w-4xl transition-all duration-700 ${headerIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 uppercase">
              Our <span className="text-gradient">Arsenal</span>
            </h1>
            <div className="w-24 h-2 bg-primary mb-8"></div>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              A comprehensive selection of professional-grade equipment across all major sporting disciplines.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <ProductCard key={cat.name} cat={cat} index={i} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

function ProductCard({ cat, index }: { cat: any, index: number }) {
  const [ref, intersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      className={`group glass-panel rounded-md overflow-hidden flex flex-col transition-all duration-700 ${intersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <div className="aspect-[4/3] overflow-hidden relative bg-secondary">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-60"></div>
        <img 
          src={cat.img} 
          alt={`${cat.name} at Mahadeva Sports`} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow bg-background relative z-20 -mt-4">
        <h2 className="text-3xl font-display font-bold uppercase mb-3 text-foreground">{cat.name}</h2>
        <div className="w-10 h-1 bg-primary mb-4 transform origin-left group-hover:scale-x-150 transition-transform"></div>
        <p className="text-muted-foreground text-sm flex-grow">
          {cat.desc}
        </p>
      </div>
    </div>
  );
}
