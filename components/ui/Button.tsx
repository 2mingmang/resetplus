import React from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-blue-800 text-white hover:bg-blue-900 shadow-[0_10px_30px_rgba(30,64,175,0.18)]',
  secondary: 'bg-white text-slate-800 border border-slate-200 hover:bg-slate-50',
  ghost: 'bg-transparent text-slate-700 hover:bg-slate-100',
};

export function Button({
  as = 'button',
  variant = 'primary',
  className = '',
  ...props
}: (
  | ({ as?: 'button' } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | ({ as: 'a' } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
) & { variant?: Variant }) {
  const base =
    'inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-200';
  const cls = `${base} ${variantClasses[variant]} ${className}`;

  if (as === 'a') {
    const aProps = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return <a {...aProps} className={cls} />;
  }

  const bProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return <button {...bProps} className={cls} />;
}

