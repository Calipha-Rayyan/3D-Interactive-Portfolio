import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

// Returns true when the visitor has asked the system for less motion.
// It updates live if the setting changes while the page is open.
export default function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(QUERY).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(QUERY);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return reduced;
}
