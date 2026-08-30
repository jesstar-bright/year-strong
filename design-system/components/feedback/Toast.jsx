import React from 'react';
const cn=(...a)=>a.filter(Boolean).join(' ');

/** Transient confirmation pill. */
export function Toast({ tone='default', className='', children, ...rest }) {
  return (
    <div role="status" className={cn('ys-toast', tone==='done'&&'ys-toast--done', className)} {...rest}>{children}</div>
  );
}
