import React from 'react';
const cn=(...a)=>a.filter(Boolean).join(' ');

/** Sage research block. Information, never an action. */
export function RefCard({ title, cite, className='', children, ...rest }) {
  return (
    <div className={cn('ys-refcard', className)} {...rest}>
      {title ? <p className="ys-refcard__title">{title}</p> : null}
      <div>{children}</div>
      {cite ? <cite className="ys-refcard__cite">{cite}</cite> : null}
    </div>
  );
}
