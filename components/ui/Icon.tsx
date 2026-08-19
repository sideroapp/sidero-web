import type { IconType } from 'react-icons';
import { cn } from '@/lib/utils';

interface IconProps {
  icon: IconType;
  className?: string;
  size?: number;
}

export function Icon({ icon: IconComponent, className, size = 20 }: IconProps) {
  return <IconComponent size={size} className={cn('shrink-0', className)} aria-hidden="true" />;
}
