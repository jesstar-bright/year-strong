import React from 'react';
const cn=(...a)=>a.filter(Boolean).join(' ');

/** iOS segmented control. Two to four short options. */
export function SegmentedControl({ items=[], value, onChange, className='', ...rest }) {
  return (
    <div className={cn('ys-seg', className)} role="tablist" {...rest}>
      {items.map((it) => {
        const o = typeof it === 'string' ? { value: it, label: it } : it;
        return (
          <button key={o.value} type="button" role="tab" aria-selected={value === o.value}
            onClick={() => onChange && onChange(o.value)}>{o.label}</button>
        );
      })}
    </div>
  );
}
