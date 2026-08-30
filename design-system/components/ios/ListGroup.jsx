import React from 'react';
const cn=(...a)=>a.filter(Boolean).join(' ');

/** Inset grouped list — the iOS settings pattern. */
export function ListGroup({ label, rows=[], className='', children, ...rest }) {
  return (
    <div {...rest}>
      {label ? <span className="ys-list__label">{label}</span> : null}
      <div className={cn('ys-list', className)}>
        {children || rows.map((r, i) => (
          <button key={i} type="button" className="ys-row" onClick={r.onClick}>
            <span>{r.label}</span>
            {r.value ? <span className="ys-row__value">{r.value}</span> : null}
            {r.chevron !== false ? <span className="ys-row__chev" style={r.value ? undefined : { marginLeft: 'auto' }}>›</span> : null}
          </button>
        ))}
      </div>
    </div>
  );
}
