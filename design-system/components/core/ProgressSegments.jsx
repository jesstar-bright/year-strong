import React from 'react';
const cn=(...a)=>a.filter(Boolean).join(' ');

/** Discrete progress — one segment per exercise, not a continuous bar. */
export function ProgressSegments({ total=8, done=0, tone='action', className='', ...rest }) {
  return (
    <div className={cn('ys-progress', tone==='ref'&&'ys-progress--ref', className)}
         role="progressbar" aria-valuenow={done} aria-valuemin={0} aria-valuemax={total} {...rest}>
      {Array.from({length: total}, (_, i) => <i key={i} data-done={i < done ? 'true' : undefined} />)}
    </div>
  );
}
