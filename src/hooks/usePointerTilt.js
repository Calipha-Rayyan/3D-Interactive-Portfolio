import { useEffect } from 'react';
import useReducedMotion from './useReducedMotion.js';

// Mouse: the element tilts toward the pointer (CSS variables --rx and --ry).
// Touch: a tap toggles the "is-lifted" class, so touch users get the same
// depth effect without needing hover. Tilt is turned off for reduced motion.
export default function usePointerTilt(ref, enabled = true, maxTilt = 10) {
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled || reduced) return undefined;

    const handleMove = (event) => {
      if (event.pointerType !== 'mouse') return;
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty('--rx', `${(-y * maxTilt).toFixed(2)}deg`);
      el.style.setProperty('--ry', `${(x * maxTilt).toFixed(2)}deg`);
    };

    const resetTilt = () => {
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
    };

    const handleTap = (event) => {
      if (event.pointerType === 'mouse') return;
      el.classList.toggle('is-lifted');
    };

    el.addEventListener('pointermove', handleMove);
    el.addEventListener('pointerleave', resetTilt);
    el.addEventListener('pointerup', handleTap);

    return () => {
      el.removeEventListener('pointermove', handleMove);
      el.removeEventListener('pointerleave', resetTilt);
      el.removeEventListener('pointerup', handleTap);
    };
  }, [ref, enabled, reduced, maxTilt]);
}
