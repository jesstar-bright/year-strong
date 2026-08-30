import React from 'react';
const cn=(...a)=>a.filter(Boolean).join(' ');

/** The one action control. Pink in light mode, soft pink in dark — the token handles it. */
export function Button({ variant='primary', size='md', block=false, className='', children, ...rest }) {
  return (
    <button type="button" className={cn('ys-btn', variant!=='primary'&&`ys-btn--${variant}`, size!=='md'&&`ys-btn--${size}`, block&&'ys-btn--block', className)} {...rest}>
      {children}
    </button>
  );
}
