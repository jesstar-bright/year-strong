import React from 'react';
const cn=(...a)=>a.filter(Boolean).join(' ');

/** A single number that matters, with its label and an optional delta line. */
export function StatCard({ label, value, sub, done=false, className='', ...rest }) {
  return (
    <div className={cn('ys-stat', done&&'ys-stat--done', className)} {...rest}>
      <span>{label}</span><b>{value}</b>{sub ? <small>{sub}</small> : null}
    </div>
  );
}
