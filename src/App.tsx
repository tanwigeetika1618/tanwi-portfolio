import { lazy, Suspense } from 'react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar/Navbar';
import EraSection from './components/EraSection/EraSection';
import Footer from './components/Footer';
import ParticleField from './components/ParticleField';
import ScrollMascot from './components/ScrollMascot';
import ShootingStars from './components/ShootingStars';
import SpaceBackgroundEffects from './components/SpaceBackgroundEffects';
import { eras } from './eras/eraData';
import { useScrollProgress } from './hooks/useScrollProgress';

const LoadingScreen = lazy(() => import('./components/LoadingScreen/LoadingScreen'));

export default function App() {
  const { progress, activeEra, scrollToEra } = useScrollProgress();

  return (
    <>
      <Suspense fallback={null}>
        <LoadingScreen />
      </Suspense>

      <SpaceBackgroundEffects />
      <ParticleField />
      <ShootingStars />
      <ScrollMascot activeEra={activeEra} />
      <Navbar activeEra={activeEra} scrollToEra={scrollToEra} progress={progress} />

      <main className="relative z-[2]">
        <HeroSection />

        {/* Journey divider */}
        <div className="relative py-16 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent" />
          </div>
          <div className="relative bg-[#050510] px-8 text-center">
            <h2 className="text-lg md:text-xl font-medium text-gray-500 font-['Space_Grotesk'] tracking-wide">
              🪐 Planets of My Journey
            </h2>
            <p className="text-[10px] text-gray-700 mt-1 font-mono tracking-[0.2em] uppercase">
              {eras.length} worlds to explore
            </p>
          </div>
        </div>

        {/* Era sections */}
        {eras.map((era, index) => (
          <EraSection key={era.id} era={era} index={index} />
        ))}
      </main>

      <Footer />
    </>
  );
}
