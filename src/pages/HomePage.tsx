import { useEffect } from 'react';
import HeroSection from '../sections/home/HeroSection';
import TrustStripSection from '../sections/home/TrustStripSection';
import AboutSection from '../sections/home/AboutSection';
import PlatformFlowSection from '../sections/home/PlatformFlowSection';
import SolutionsSection from '../sections/home/SolutionsSection';
import VisionStatsSection from '../sections/home/VisionStatsSection';
import ContactCtaSection from '../sections/home/ContactCtaSection';

export default function HomePage() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        const target = Number(el.dataset.count || 0);
        const suffix = el.dataset.suffix || '';
        let start: number | null = null;
        const step = (time: number) => {
          if (start === null) start = time;
          const progress = Math.min((time - start) / 1400, 1);
          el.textContent = `${Math.round(target * (1 - Math.pow(1 - progress, 3)))}${suffix}`;
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        counterObserver.unobserve(el);
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('[data-count]').forEach((el) => counterObserver.observe(el));

    return () => { revealObserver.disconnect(); counterObserver.disconnect(); };
  }, []);

  return (
    <main id="top">
      <HeroSection />
      <TrustStripSection />
      <AboutSection />
      <PlatformFlowSection />
      <SolutionsSection />
      <VisionStatsSection />
      <ContactCtaSection />
    </main>
  );
}
