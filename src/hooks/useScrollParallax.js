import { useEffect } from 'react';
import useReducedMotion from './useReducedMotion.js';

// Moves every element with a data-speed attribute inside the container.
// A larger speed means the layer moves further, so it looks closer to the viewer.
// Updates are batched with requestAnimationFrame to keep scrolling smooth.
export default function useScrollParallax(ref, enabled = true) {
  const reduced = useReducedMotion();

  useEffect(() => {
    const container = ref.current;
    if (!container || !enabled || reduced) return undefined;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = container.getBoundingClientRect();
      // How far the container has scrolled past the top of the viewport.
      const progress = -rect.top;
      container.querySelectorAll('[data-speed]').forEach((layer) => {
        const speed = Number(layer.dataset.speed) || 0;
        layer.style.transform = `translate3d(0, ${(progress * speed).toFixed(1)}px, 0)`;
      });
    };

    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (frame) cancelAnimationFrame(frame);
      container.querySelectorAll('[data-speed]').forEach((layer) => {
        layer.style.transform = '';
      });
    };
  }, [ref, enabled, reduced]);
}
