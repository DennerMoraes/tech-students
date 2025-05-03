'use client';

import React, { useEffect, useState, useRef } from 'react';

type AnimatedCounterProps = {
  number: number;
  duration?: number;
  className?: string;
  unit?: string;
};

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  number,
  duration = 1000,
  className,
  unit
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animate();
          setHasAnimated(true);
          observer.disconnect(); // opcional: remove o observer depois da primeira animação
        }
      },
      { threshold: 0.5 } // quando 50% do elemento estiver visível
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animate = () => {
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
  };

  return (
    <p ref={ref} className={className}>
      {count}
      {unit}
    </p>
  );
};

export default AnimatedCounter;
