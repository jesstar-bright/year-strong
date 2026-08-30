import React from 'react';
const cn=(...a)=>a.filter(Boolean).join(' ');

/** The single italic coaching line per screen. */
export function Aside({ className='', children, ...rest }) {
  return <p className={cn('ys-aside', className)} {...rest}>{children}</p>;
}
