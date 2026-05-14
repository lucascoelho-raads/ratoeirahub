'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { useInView } from 'framer-motion';

interface BlurTextEffectProps {
  children: string;
  className?: string;
}

export const BlurTextEffect: React.FC<BlurTextEffectProps> = ({ children, className = '' }) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.querySelectorAll('span.char');
    
    // Set initial state
    gsap.set(chars, { opacity: 0, y: 10, filter: 'blur(8px)' });

    if (isInView) {
      const animation = gsap.to(chars, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.3,
        ease: 'power2.out',
        stagger: 0.005, // reduced stagger time for smoother effect on long paragraphs
        clearProps: 'filter',
      });

      return () => {
        animation.kill();
      };
    }
  }, [children, isInView]);

  return (
    <span className={`inline-block ${className}`} ref={containerRef}>
      {children.split('').map((char, i) => (
        <span key={`${char}-${i}`} className="char inline-block" style={{ whiteSpace: 'pre' }}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};
