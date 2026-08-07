'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AosInit() {
  useEffect(() => {
    // Delay AOS initialization to allow React to fully hydrate the DOM first
    // This prevents the 'text content did not match' or attribute mismatch hydration errors
    const initAOS = setTimeout(() => {
      AOS.init({
        duration: 800,
        once: false,
        offset: 50,
        easing: 'ease-in-out',
      });
    }, 100);

    return () => clearTimeout(initAOS);
  }, []);

  return null;
}
