import { useRef } from 'react';
import usePointerTilt from '../hooks/usePointerTilt.js';

// A reusable layered card with three nested wrappers, each with one job:
//   .depth-card        -> parallax (JavaScript moves it while scrolling)
//   .depth-card__float -> gentle floating animation (CSS only)
//   .depth-card__tilt  -> mouse/touch tilt (CSS variables set by the hook)
// Splitting them keeps the three effects from overriding each other's transform.
export default function DepthCard({
  layer = 'mid',
  speed = 0,
  tilt = false,
  float = true,
  className = '',
  children,
}) {
  const tiltRef = useRef(null);
  usePointerTilt(tiltRef, tilt);

  return (
    <div className={`depth-card depth-card--${layer} ${className}`} data-speed={speed}>
      <div className={`depth-card__float ${float ? 'is-floating' : ''}`}>
        <div className="depth-card__tilt" ref={tiltRef}>
          <div className="depth-card__face">{children}</div>
        </div>
      </div>
    </div>
  );
}
