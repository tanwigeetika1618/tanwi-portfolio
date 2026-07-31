import { useState, useEffect, useCallback } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [activeEra, setActiveEra] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
    setProgress(Math.min(scrollPercent, 1));

    const sections = document.querySelectorAll('[data-era]');
    let currentEra = 0;
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.5) {
        currentEra = index;
      }
    });
    setActiveEra(currentEra);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToEra = useCallback((index: number) => {
    const sections = document.querySelectorAll('[data-era]');
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return { progress, activeEra, scrollToEra };
}
