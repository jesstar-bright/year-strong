import React from 'react';
const cn=(...a)=>a.filter(Boolean).join(' ');

/** Tracked-out mono caps above a title, or as a section label. */
export function Eyebrow({ className='', children, ...rest }) {
  return <span className={cn('ys-eyebrow', className)} {...rest}>{children}</span>;
}
