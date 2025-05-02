'use client'

import React, { useEffect, useState } from 'react';

type AnimatedCounterProps = {
  number: number;
  duration?: number;
  className?: string;
  unit?: string;
};

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ number, duration = 1000, className, unit }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const startTime = performance.now();

    const updateCounter = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * number);
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [number, duration]);

  return <p className={className}>{count}{unit}</p>;
};

export default AnimatedCounter;
