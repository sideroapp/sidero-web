import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          'min-h-32 w-full rounded-md border bg-white px-3 py-2 text-base text-navy-900 transition-colors duration-200 placeholder:text-slate-400',
          'focus:border-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-800/50',
          error ? 'border-red-400' : 'border-slate-300',
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';
