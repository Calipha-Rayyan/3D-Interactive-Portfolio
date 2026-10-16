import { useEffect } from 'react';

// Mouse: the element tilts toward the pointer (CSS variables --rx and --ry),
// updated at most once per animation frame.
// Touch: a tap toggles the "is-lifted" class, so touch users get the same depth
// without needing hover. Pass enabled=false to turn all of this off.
export default function usePointerTilt(ref, enabled = true, maxTilt = 10) {
  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return undefined;

    let frame = 0;
    let pending = null;

    const apply = () => {
      frame = 0;
      if (!pending) return;
      el.style.setProperty('--rx', `${(-pending.y * maxTilt).toFixed(2)}deg`);
      el.style.setProperty('--ry', `${(pending.x * maxTilt).toFixed(2)}deg`);
    };

    const handleMove = (event) => {
      if (event.pointerType !== 'mouse') return;
      const rect = el.getBoundingClientRect();
      pending = {
        x: (event.clientX - rect.left) / rect.width - 0.5,
        y: (event.clientY - rect.top) / rect.height - 0.5,
      };
      if (!frame) frame = requestAnimationFrame(apply);
    };

    const resetTilt = () => {
      pending = null;
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
      if (frame) cancelAnimationFrame(frame);
      resetTilt();
      el.classList.remove('is-lifted');
    };
  }, [ref, enabled, maxTilt]);
}