import React from 'react';
const cn=(...a)=>a.filter(Boolean).join(' ');

/** Bottom tab bar. Pink indicator, except Notes which reads sage. */
export function TabBar({ items=[], value, onChange, className='', ...rest }) {
  return (
    <nav className={cn('ys-tabbar', className)} role="tablist" {...rest}>
      {items.map((it) => {
        const t = typeof it === 'string' ? { value: it, label: it } : it;
        return (
          <button key={t.value} type="button" role="tab" data-tone={t.tone}
            aria-selected={value === t.value}
            onClick={() => onChange && onChange(t.value)}>{t.label}</button>
        );
      })}
    </nav>
  );
}
