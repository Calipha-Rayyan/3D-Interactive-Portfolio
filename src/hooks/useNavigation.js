import { useCallback, useEffect, useRef, useState } from 'react';

const NAV_HEIGHT = 72;

export default function useNavigation(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0] || 'home');
  const isNavigatingRef = useRef(false);
  const unlockTimerRef = useRef(null);

  // Smooth scroll to target section with precise sticky header offset
  const scrollToSection = useCallback((id, updateHash = true) => {
    const cleanId = id.replace(/^#/, '');
    const element = document.getElementById(cleanId);
    if (!element) return;

    // Lock scroll-spy updates while smooth scroll is underway
    isNavigatingRef.current = true;
    setActiveId(cleanId);

    if (unlockTimerRef.current) clearTimeout(unlockTimerRef.current);

    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // Calculate exact position: element top minus navbar height
    const targetY = Math.max(0, scrollTop + rect.top - NAV_HEIGHT);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({
      top: targetY,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });

    if (updateHash && window.location.hash !== `#${cleanId}`) {
      window.history.pushState(null, '', `#${cleanId}`);
    }

    // Release lock when scroll completes
    const releaseLock = () => {
      isNavigatingRef.current = false;
      window.removeEventListener('scrollend', releaseLock);
    };

    if ('onscrollend' in window) {
      window.addEventListener('scrollend', releaseLock, { once: true });
    }

    // Fallback release timer in case scrollend doesn't fire
    unlockTimerRef.current = setTimeout(() => {
      isNavigatingRef.current = false;
    }, 850);
  }, []);

  // ScrollSpy listener that reliably tracks active sections during natural scrolling
  useEffect(() => {
    let ticking = false;

    const determineActiveSection = () => {
      if (isNavigatingRef.current) return;

      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // 1. Extreme top of document
      if (scrollY < 100) {
        setActiveId(sectionIds[0] || 'home');
        return;
      }

      // 2. Extreme bottom of document (always activates the final section, e.g. contact)
      if (windowHeight + scrollY >= docHeight - 40) {
        const lastId = sectionIds[sectionIds.length - 1];
        if (lastId) setActiveId(lastId);
        return;
      }

      // 3. Scan sections from top to bottom
      // Check which section is currently occupying the primary reading focal plane
      const headerLine = scrollY + NAV_HEIGHT + 60;
      let currentSection = sectionIds[0];

      for (let i = 0; i < sectionIds.length; i++) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;

        if (headerLine >= top && headerLine < bottom) {
          currentSection = id;
          break;
        } else if (headerLine >= top) {
          currentSection = id;
        }
      }

      if (currentSection) {
        setActiveId(currentSection);
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          determineActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    // Initial check on mount
    determineActiveSection();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (unlockTimerRef.current) clearTimeout(unlockTimerRef.current);
    };
  }, [sectionIds]);

  // Handle browser Back / Forward popstate and initial URL hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.slice(1);
      if (hash && sectionIds.includes(hash)) {
        scrollToSection(hash, false);
      }
    };

    // If page is loaded with a hash (e.g. #projects or #contact), scroll to it after initial render
    if (window.location.hash) {
      setTimeout(handleHash, 100);
    }

    window.addEventListener('popstate', handleHash);
    return () => window.removeEventListener('popstate', handleHash);
  }, [sectionIds, scrollToSection]);

  return { activeId, scrollToSection };
}
