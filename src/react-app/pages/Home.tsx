import Navbar from '@/react-app/components/Navbar';
import Hero from '@/react-app/components/Hero';
import ComponentShowcase from '@/react-app/components/ComponentShowcase';
import BlocksPreview from '@/react-app/components/BlocksPreview';
import ComponentsGrid from '@/react-app/components/ComponentsGrid';
import CodeExample from '@/react-app/components/CodeExample';
import FinalCTA from '@/react-app/components/FinalCTA';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex flex-1 flex-col pt-[var(--nav-height)] bg-gradient-to-b from-accent to-white dark:from-background dark:to-background">
        {/* Fade effect at top */}
        <div
          aria-hidden="true"
          className="fixed inset-x-0 top-[var(--nav-height)] z-40 h-6 bg-background"
          style={{ maskImage: 'linear-gradient(to bottom, white, transparent)' }}
        />

        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4">
            <Hero />
          </div>

          <ComponentShowcase />
          <BlocksPreview />
          <ComponentsGrid />
          <CodeExample />
        </div>

        {/* CTA section acts as shutter over footer */}
        <FinalCTA />

        {/* Footer with shutter reveal animation */}
        <Footer />
      </main>
    </div>
  );
}

