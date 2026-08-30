import React from 'react';
const cn=(...a)=>a.filter(Boolean).join(' ');

/** Dropdown / context menu. Render inside a positioned parent. */
export function Menu({ items=[], value, onSelect, className='', ...rest }) {
  return (
    <div className={cn('ys-menu', className)} role="menu" {...rest}>
      {items.map((it, i) => (
        <button key={i} type="button" role="menuitem" data-danger={it.danger ? 'true' : undefined}
          onClick={() => onSelect && onSelect(it.value ?? i)}>
          <span>{it.label}</span>
          {value != null && value === it.value ? <span className="ys-menu__check">✓</span> : null}
        </button>
      ))}
    </div>
  );
}
