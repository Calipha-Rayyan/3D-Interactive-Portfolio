import { useEffect, useRef, useState } from 'react';
import useReducedMotion from './useReducedMotion.js';

/**
 * useSpatialTilt provides physics-damped, pointer-responsive 3D rotation,
 * dynamic specular light tracking, touch drag rotation, and keyboard navigation.
 */
export default function useSpatialTilt({
  enabled = true,
  maxTilt = 16,
  damping = 0.08,
} = {}) {
  const containerRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const isEffectsActive = enabled && !reducedMotion;

  const [tiltState, setTiltState] = useState({ rx: 0, ry: 0, px: 0, py: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !isEffectsActive) {
      if (el) {
        el.style.setProperty('--rx', '0deg');
        el.style.setProperty('--ry', '0deg');
        el.style.setProperty('--px', '0');
        el.style.setProperty('--py', '0');
        el.style.setProperty('--light-x', '50%');
        el.style.setProperty('--light-y', '50%');
      }
      return undefined;
    }

    let rafId = 0;
    let targetX = 0; // -1 to 1
    let targetY = 0; // -1 to 1
    let currentX = 0;
    let currentY = 0;
    let isTouching = false;
    let touchStart = { x: 0, y: 0 };

    const updatePhysics = () => {
      // Lerp (linear interpolation) for smooth inertia
      currentX += (targetX - currentX) * damping;
      currentY += (targetY - currentY) * damping;

      const rotX = (-currentY * maxTilt).toFixed(2);
      const rotY = (currentX * maxTilt).toFixed(2);

      const lightX = ((currentX + 1) * 50).toFixed(1);
      const lightY = ((currentY + 1) * 50).toFixed(1);

      el.style.setProperty('--rx', `${rotX}deg`);
      el.style.setProperty('--ry', `${rotY}deg`);
      el.style.setProperty('--px', currentX.toFixed(3));
      el.style.setProperty('--py', currentY.toFixed(3));
      el.style.setProperty('--light-x', `${lightX}%`);
      el.style.setProperty('--light-y', `${lightY}%`);

      // Update state for optional React layer calculations
      setTiltState({
        rx: Number(rotX),
        ry: Number(rotY),
        px: currentX,
        py: currentY,
      });

      rafId = requestAnimationFrame(updatePhysics);
    };

    const handlePointerMove = (e) => {
      if (e.pointerType === 'touch') return;
      const rect = el.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = ((e.clientY - rect.top) / rect.height) * 2 - 1;

      targetX = Math.max(-1, Math.min(1, normX));
      targetY = Math.max(-1, Math.min(1, normY));
    };

    const handlePointerLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    // Touch support: dragging across the 3D element rotates it
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        isTouching = true;
        touchStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchMove = (e) => {
      if (!isTouching || e.touches.length !== 1) return;
      const rect = el.getBoundingClientRect();
      const dx = (e.touches[0].clientX - touchStart.x) / (rect.width * 0.5);
      const dy = (e.touches[0].clientY - touchStart.y) / (rect.height * 0.5);

      targetX = Math.max(-1, Math.min(1, dx));
      targetY = Math.max(-1, Math.min(1, dy));
    };

    const handleTouchEnd = () => {
      isTouching = false;
      targetX = 0;
      targetY = 0;
    };

    // Keyboard support: Arrow keys allow keyboard users to rotate the 3D scene
    const handleKeyDown = (e) => {
      const step = 0.35;
      if (e.key === 'ArrowLeft') {
        targetX = Math.max(-1, targetX - step);
        e.preventDefault();
      } else if (e.key === 'ArrowRight') {
        targetX = Math.min(1, targetX + step);
        e.preventDefault();
      } else if (e.key === 'ArrowUp') {
        targetY = Math.max(-1, targetY - step);
        e.preventDefault();
      } else if (e.key === 'ArrowDown') {
        targetY = Math.min(1, targetY + step);
        e.preventDefault();
      } else if (e.key === 'Home' || e.key === 'Escape') {
        targetX = 0;
        targetY = 0;
      }
    };

    const handleKeyUp = () => {
      // Return slowly to center after key release
      targetX = 0;
      targetY = 0;
    };

    rafId = requestAnimationFrame(updatePhysics);

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    el.addEventListener('pointerleave', handlePointerLeave);
    el.addEventListener('touchstart', handleTouchStart, { passive: true });
    el.addEventListener('touchmove', handleTouchMove, { passive: true });
    el.addEventListener('touchend', handleTouchEnd);
    el.addEventListener('keydown', handleKeyDown);
    el.addEventListener('keyup', handleKeyUp);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('pointermove', handlePointerMove);
      el.removeEventListener('pointerleave', handlePointerLeave);
      el.removeEventListener('touchstart', handleTouchStart);
      el.removeEventListener('touchmove', handleTouchMove);
      el.removeEventListener('touchend', handleTouchEnd);
      el.removeEventListener('keydown', handleKeyDown);
      el.removeEventListener('keyup', handleKeyUp);
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
      el.style.setProperty('--px', '0');
      el.style.setProperty('--py', '0');
    };
  }, [isEffectsActive, maxTilt, damping]);

  return { containerRef, tiltState, isEffectsActive, reducedMotion };
}
