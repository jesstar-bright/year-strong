import React from 'react';
const cn=(...a)=>a.filter(Boolean).join(' ');

/** Horizontal filter row. */
export function FilterChips({ items=[], value, onChange, tone='action', className='', ...rest }) {
  return (
    <div className={cn('ys-chips', className)} {...rest}>
      {items.map((it) => {
        const o = typeof it === 'string' ? { value: it, label: it } : it;
        return (
          <button key={o.value} type="button"
            className={cn('ys-chip', tone==='ref'&&'ys-chip--ref')}
            aria-pressed={value === o.value}
            onClick={() => onChange && onChange(o.value)}>{o.label}</button>
        );
      })}
    </div>
  );
}
