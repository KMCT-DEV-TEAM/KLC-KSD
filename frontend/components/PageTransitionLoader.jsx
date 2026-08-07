'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Loader from './Loader';

function PageTransitionLoaderInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Show loader immediately
    setIsVisible(true);
    setIsFading(false);

    // Start fading out after 800ms
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 800);

    // Remove from DOM after fading finishes (700ms transition)
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 1500); // 800 + 700

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [pathname, searchParams]); // Run every time the route changes

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] transition-opacity duration-700 ease-in-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <Loader fullScreen={true} transparent={false} />
    </div>
  );
}

export default function PageTransitionLoader() {
  return (
    <Suspense fallback={null}>
      <PageTransitionLoaderInner />
    </Suspense>
  );
}
