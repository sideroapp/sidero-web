import { cn } from '@/lib/utils';

type ContainerTag = 'div' | 'section' | 'header' | 'footer' | 'main' | 'nav' | 'article';

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  as?: ContainerTag;
}

export function Container({ as = 'div', className, children, ...props }: ContainerProps) {
  const Tag = as as 'div';
  return (
    <Tag className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)} {...props}>
      {children}
    </Tag>
  );
}
