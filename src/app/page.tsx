import Hero from '@/components/Hero';
import Auth from '@/components/Auth';
import FeatureGrid from '@/components/FeatureGrid';

export default function Home() {
  return (
    <main className="min-h-screen bg-nexus-black selection:bg-accent-cyan/30 selection:text-accent-cyan">
      <Hero />
      <div id="auth">
        <Auth />
      </div>
      <FeatureGrid />

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/5 text-center bg-nexus-black">
        <p suppressHydrationWarning className="text-white/30 text-xs tracking-widest uppercase">
          &copy; {new Date().getFullYear()} THE NEXUS PORTAL. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </main>
  );
}
