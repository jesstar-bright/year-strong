import React from 'react';
const cn=(...a)=>a.filter(Boolean).join(' ');

/** Paper card with ink outline and sticker shadow. */
export function Card({ tone='card', className='', children, ...rest }) {
  return <div className={cn('ys-card', tone!=='card'&&`ys-card--${tone}`, className)} {...rest}>{children}</div>;
}
