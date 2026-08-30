import React from 'react';
const cn=(...a)=>a.filter(Boolean).join(' ');
const TICK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 13l5 5L20 6" /></svg>
);

/** Sage-ticking checklist for prep steps and daily habits. */
export function Checklist({ items=[], onToggle, className='', ...rest }) {
  return (
    <div className={cn(className)} {...rest}>
      {items.map((it, i) => (
        <button key={i} type="button" className="ys-check" role="checkbox" aria-checked={!!it.done} onClick={() => onToggle && onToggle(i)}>
          <span className="ys-check__box">{TICK}</span>
          <span>{it.label}</span>
        </button>
      ))}
    </div>
  );
}
