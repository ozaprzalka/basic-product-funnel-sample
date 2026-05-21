import type { ReactNode } from 'react';

import { cn } from '@/utils/cn';

//----------------------------------------------------------------------------//

interface Props {
  children: ReactNode;
  className?: string;
}

export function Section({ children, className }: Props) {
  return (
    <section
      className={cn(
        'mx-auto w-full max-w-6xl',
        'px-6 py-16 sm:px-8 lg:px-10',
        className,
      )}
    >
      {children}
    </section>
  );
}

export default Section;
