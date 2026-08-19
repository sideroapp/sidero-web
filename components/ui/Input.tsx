import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'h-11 w-full rounded-md border bg-white px-3 text-base text-navy-900 transition-colors duration-200 placeholder:text-slate-400',
          'focus:border-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-800/50',
          error ? 'border-red-400' : 'border-slate-300',
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';
