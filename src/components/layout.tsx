import { Navbar } from './navbar';
import { Footer } from './footer';
import { ScrollToTop } from './scroll-to-top';
import { ReactNode } from 'react';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
