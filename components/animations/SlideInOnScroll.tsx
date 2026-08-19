'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

type Direction = 'left' | 'right' | 'up' | 'down';

interface SlideInOnScrollProps {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
}

const OFFSETS: Record<Direction, (distance: number) => { x?: number; y?: number }> = {
  left: (d) => ({ x: -d }),
  right: (d) => ({ x: d }),
  up: (d) => ({ y: -d }),
  down: (d) => ({ y: d }),
};

export function SlideInOnScroll({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  distance = 40,
}: SlideInOnScrollProps) {
  const prefersReducedMotion = useReducedMotion();
  const offset = prefersReducedMotion ? {} : OFFSETS[direction](distance);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: prefersReducedMotion ? 0 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
}
