import React from 'react';
const cn=(...a)=>a.filter(Boolean).join(' ');

/** Row of three macro/metric chips. */
export function MacroGrid({ items=[], columns=3, className='', style, ...rest }) {
  return (
    <div className={cn('ys-macros', className)} style={{ gridTemplateColumns: `repeat(${columns},1fr)`, ...style }} {...rest}>
      {items.map((m, i) => (
        <div key={i} className={cn('ys-macro', m.accent && 'ys-macro--accent')}>
          <span>{m.label}</span><b>{m.value}</b>
        </div>
      ))}
    </div>
  );
}
