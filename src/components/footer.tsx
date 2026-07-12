import { Link } from 'wouter';
import { Dumbbell, MapPin, Mail, ArrowRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary pt-16 pb-8 border-t border-border relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group w-fit outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md p-1">
              <div className="bg-primary p-1.5 rounded-sm transform group-hover:rotate-12 transition-transform">
                <Dumbbell className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-display text-2xl font-bold tracking-wider text-foreground">
                MAHADEVA SPORTS
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Noida's premier destination for high-performance sports equipment. Founded by Arun Kumar Yadav to equip athletes with the gear they need to dominate.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-xl tracking-wider text-foreground">GEAR UP</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors w-fit flex items-center gap-2 group">
                <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                All Products
              </Link>
              <Link href="/brands" className="text-muted-foreground hover:text-primary transition-colors w-fit flex items-center gap-2 group">
                <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                Premium Brands
              </Link>
              <Link href="/why-choose-us" className="text-muted-foreground hover:text-primary transition-colors w-fit flex items-center gap-2 group">
                <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                Why Choose Us
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors w-fit flex items-center gap-2 group">
                <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                About Founder
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <h3 className="font-display text-xl tracking-wider text-foreground">VISIT HEADQUARTERS</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-foreground mb-1">Store Location</p>
                  <p className="text-muted-foreground text-sm">
                    Office No. 5, Sahil Apartment<br />
                    Sector 121, Noida, UP<br />
                    India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-foreground mb-1">Direct Contact</p>
                  <a href="mailto:mahadevasports001@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors break-all">
                    mahadevasports001@gmail.com
                  </a>
                  <p className="text-muted-foreground text-sm mt-2">
                    Founder: Arun Kumar Yadav
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Mahadeva Sports. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="uppercase font-semibold tracking-wider text-xs">Equip to Win</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
