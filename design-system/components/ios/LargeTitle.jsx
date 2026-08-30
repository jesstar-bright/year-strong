import React from 'react';
const cn=(...a)=>a.filter(Boolean).join(' ');

/** iOS large title, set in Gluten. */
export function LargeTitle({ className='', children, ...rest }) {
  return <h1 className={cn('ys-largetitle', className)} {...rest}>{children}</h1>;
}
