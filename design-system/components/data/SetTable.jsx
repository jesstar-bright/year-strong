import React from 'react';
const cn=(...a)=>a.filter(Boolean).join(' ');

/** The set/reps logging table. The core object of the app. */
export function SetTable({ sets=[], current=0, onSelect, headers=['SET','REPS'], className='', ...rest }) {
  return (
    <div className={cn('ys-settable', className)} {...rest}>
      <div className="ys-settable__head">{headers.map(h => <span key={h}>{h}</span>)}</div>
      {sets.map((s, i) => (
        <button key={i} type="button" className="ys-setrow"
          aria-current={i === current ? 'true' : undefined}
          data-done={s.done ? 'true' : undefined}
          onClick={() => onSelect && onSelect(i)}>
          <span>{s.label ?? i + 1}</span>
          <b>{s.reps ?? ''}</b>
        </button>
      ))}
    </div>
  );
}
