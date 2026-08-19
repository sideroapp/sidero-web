'use client';

import { motion } from 'framer-motion';

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
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...OFFSETS[direction](distance) }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
