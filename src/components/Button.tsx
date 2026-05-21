import type { ReactNode } from 'react';

import { Link } from 'react-router-dom';

import { cn } from '@/utils/cn';

//----------------------------------------------------------------------------//

type Variant = 'primary' | 'secondary' | 'ghost' | 'navigation';

interface BaseProps {
  children: ReactNode;
  className?: string;
  variant?: Variant;
}

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: never;
  };

type ButtonAsLink = BaseProps & {
  to: string;
};

type Props = ButtonAsButton | ButtonAsLink;

//----------------------------------------------------------------------------//

const styles = {
  primary:
    'bg-cyan-400 text-slate-950 hover:bg-cyan-300 focus-visible:outline-cyan-400',

  secondary:
    'bg-white text-slate-950 hover:bg-slate-100 focus-visible:outline-white',

  ghost:
    'border border-white/15 bg-white/5 text-white hover:bg-white/10 focus-visible:outline-white',

  navigation: 'text-sm text-white/60 transition hover:text-white',
} as const satisfies Record<Variant, string>;

//----------------------------------------------------------------------------//

export function Button(props: Props) {
  const className = cn(
    'inline-flex items-center justify-center',
    'min-h-11 px-5 py-3',
    'rounded-xl text-sm font-semibold',
    'transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    styles[props.variant ?? 'primary'],
    props.className,
  );

  if ('to' in props && props.to !== undefined) {
    const { to, children } = props;

    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  const { children, ...buttonProps } = props;

  return (
    <button {...buttonProps} className={className}>
      {children}
    </button>
  );
}

export default Button;
