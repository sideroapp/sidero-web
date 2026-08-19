'use client';

import { motion } from 'framer-motion';

interface FadeInOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  /** Distância (px) do deslocamento vertical de entrada. */
  offset?: number;
}

export function FadeInOnScroll({
  children,
  className,
  delay = 0,
  duration = 0.4,
  offset = 24,
}: FadeInOnScrollProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
