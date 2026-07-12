import { useSEO } from '@/hooks/use-seo';
import { useIntersectionObserver } from '@/hooks/use-scroll';
import { Layout } from '@/components/layout';
import { MapPin, Mail, User, Clock } from 'lucide-react';

export default function Contact() {
  useSEO({
    title: 'Contact Us | Location',
    description: 'Visit Mahadeva Sports in Sector 121, Noida. Contact owner Arun Kumar Yadav for inquiries about our premium sports equipment.',
    canonicalPath: '/contact'
  });

  const [headerRef, headerIntersecting] = useIntersectionObserver();
  const [contentRef, contentIntersecting] = useIntersectionObserver();

  return (
    <Layout>
      <main className="pt-24 pb-24">
        <section ref={headerRef} className="container mx-auto px-4 md:px-6 pt-12 pb-16">
          <div className={`max-w-4xl transition-all duration-700 ${headerIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 uppercase">
              Establish <span className="text-gradient">Contact</span>
            </h1>
            <div className="w-24 h-2 bg-primary mb-8"></div>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Ready to upgrade your gear? Visit our Noida showroom or reach out directly for specific inventory inquiries.
            </p>
          </div>
        </section>

        <section ref={contentRef} className="container mx-auto px-4 md:px-6">
          <div className={`max-w-3xl mx-auto transition-all duration-700 ${contentIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            
            {/* Contact Info & Map */}
            <div className="flex flex-col gap-10">
              <div className="glass-panel p-8 rounded-md border-l-4 border-l-primary">
                <h2 className="text-3xl font-display font-bold uppercase mb-8">Headquarters Info</h2>
                
                <div className="flex flex-col gap-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary p-3 rounded-md shrink-0 border border-border">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm text-muted-foreground font-semibold uppercase tracking-wider mb-1">Location</h3>
                      <p className="text-lg font-medium text-foreground">Office No. 5, Sahil Apartment</p>
                      <p className="text-lg text-muted-foreground">Sector 121, Noida, UP, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-secondary p-3 rounded-md shrink-0 border border-border">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm text-muted-foreground font-semibold uppercase tracking-wider mb-1">Electronic Mail</h3>
                      <a href="mailto:mahadevasports001@gmail.com" className="text-lg font-medium text-foreground hover:text-primary transition-colors break-all">
                        mahadevasports001@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-secondary p-3 rounded-md shrink-0 border border-border">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm text-muted-foreground font-semibold uppercase tracking-wider mb-1">Leadership</h3>
                      <p className="text-lg font-medium text-foreground">Arun Kumar Yadav</p>
                      <p className="text-muted-foreground">Founder & Owner</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary p-3 rounded-md shrink-0 border border-border">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm text-muted-foreground font-semibold uppercase tracking-wider mb-1">Operating Hours</h3>
                      <p className="text-lg font-medium text-foreground">Monday - Sunday</p>
                      <p className="text-muted-foreground">10:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video rounded-md overflow-hidden bg-secondary border border-border relative group">
                <div className="absolute inset-0 bg-background/50 flex flex-col items-center justify-center p-6 text-center z-10 backdrop-blur-sm group-hover:backdrop-blur-0 group-hover:bg-background/20 transition-all duration-500">
                  <MapPin className="w-10 h-10 text-primary mb-4 opacity-50 group-hover:opacity-100 group-hover:-translate-y-2 transition-all" />
                  <span className="font-display text-2xl font-bold uppercase text-foreground/70 group-hover:text-foreground">Sector 121, Noida</span>
                  <span className="text-sm text-muted-foreground mt-2">Interactive map disabled in demo</span>
                </div>
                {/* Visual map texture */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, hsl(var(--primary)) 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
