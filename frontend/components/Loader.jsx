"use client";
import React from 'react';

const Loader = ({ fullScreen = false, transparent = false }) => {
  const containerClasses = fullScreen
    ? `fixed inset-0 z-[9999] flex flex-col items-center justify-center ${transparent ? 'bg-transparent' : 'bg-secondary'}`
    : `w-full flex-1 min-h-[60vh] flex flex-col items-center justify-center ${transparent ? 'bg-transparent' : 'bg-secondary'}`;

  const textColorClass = transparent ? "text-primary" : "text-white";

  return (
    <div className={containerClasses}>
      <div className="relative w-28 h-28 flex items-center justify-center mb-6">
        <img
          src="/images/Loader.png"
          alt="Loading..."
          className="w-full h-full object-contain animate-spin"
          style={{ animationDuration: '6s' }}
        />
      </div>
      <p className={`${textColorClass} font-bold tracking-widest uppercase text-sm animate-pulse`}>
        LOADING..
      </p>
    </div>
  );
};

export default Loader;
