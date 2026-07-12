import { useSEO } from '@/hooks/use-seo';
import { useIntersectionObserver } from '@/hooks/use-scroll';
import { Layout } from '@/components/layout';
import { ShieldCheck, CheckCircle2, ThumbsUp, Wrench, Medal, Zap } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Authenticity Guaranteed',
    desc: 'Counterfeit gear ruins performance. We guarantee 100% authentic equipment sourced directly from certified manufacturers.'
  },
  {
    icon: Wrench,
    title: 'Expert Consultation',
    desc: 'Don\'t guess your gear. Founder Arun Kumar Yadav and our staff help you select equipment tailored exactly to your biomechanics and play style.'
  },
  {
    icon: ThumbsUp,
    title: 'Extensive Inventory',
    desc: 'From specialized cricket grips to heavy-duty Olympic barbells, we maintain a comprehensive stock so you don\'t have to wait.'
  },
  {
    icon: CheckCircle2,
    title: 'Quality Tested',
    desc: 'Every category of equipment we sell undergoes strict quality assessment before making it to our showroom floor.'
  },
  {
    icon: Medal,
    title: 'Professional Grade',
    desc: 'While we cater to beginners, our inventory ceiling hits professional, tournament-ready standards.'
  },
  {
    icon: Zap,
    title: 'Competitive Pricing',
    desc: 'Premium gear shouldn\'t require a premium markup. We offer highly competitive rates for elite equipment.'
  }
];

export default function WhyChooseUs() {
  useSEO({
    title: 'Why Choose Us | Differentiators',
    description: 'Why athletes in Noida trust Mahadeva Sports. 100% authentic gear, expert consultation by Arun Kumar Yadav, and professional-grade inventory.',
    canonicalPath: '/why-choose-us'
  });

  const [headerRef, headerIntersecting] = useIntersectionObserver();

  return (
    <Layout>
      <main className="pt-24 pb-24">
        <section ref={headerRef} className="container mx-auto px-4 md:px-6 pt-12 pb-16">
          <div className={`max-w-4xl transition-all duration-700 ${headerIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 uppercase">
              The Mahadeva <span className="text-gradient">Advantage</span>
            </h1>
            <div className="w-24 h-2 bg-primary mb-8"></div>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              We don't just sell sports goods. We provide the infrastructure for athletic excellence.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, i) => (
              <ReasonCard key={reason.title} reason={reason} index={i} />
            ))}
          </div>
        </section>

        {/* Call to action text */}
        <section className="container mx-auto px-4 md:px-6 mt-24">
           <div className="bg-primary/10 border border-primary/20 rounded-md p-10 md:p-16 text-center max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-6 text-foreground">Stop Compromising on Gear</h2>
              <p className="text-xl text-muted-foreground mb-0">
                A poor quality bat absorbs power. Cheap shoes risk injury. Flimsy weights break. Invest in your performance at Mahadeva Sports.
              </p>
           </div>
        </section>
      </main>
    </Layout>
  );
}

function ReasonCard({ reason, index }: { reason: any, index: number }) {
  const [ref, intersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      className={`glass-panel p-8 rounded-md hover:-translate-y-2 transition-all duration-500 group ${intersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <div className="w-16 h-16 bg-secondary rounded-md flex items-center justify-center mb-6 group-hover:bg-primary transition-colors border border-border group-hover:border-primary">
        <reason.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
      </div>
      <h3 className="text-2xl font-display font-bold uppercase mb-4 text-foreground">{reason.title}</h3>
      <p className="text-muted-foreground leading-relaxed">
        {reason.desc}
      </p>
    </div>
  );
}
