import React from 'react';
const cn=(...a)=>a.filter(Boolean).join(' ');

/** iOS alert. Confirmations only — never for information. */
export function Alert({ open=false, title, message, actions=[], onSelect, className='' }) {
  if (!open) return null;
  return (
    <>
      <div className="ys-veil" />
      <div className={cn('ys-alert', className)} role="alertdialog" aria-modal="true">
        <div className="ys-alert__body">
          {title ? <p className="ys-alert__title">{title}</p> : null}
          {message ? <p className="ys-alert__text">{message}</p> : null}
        </div>
        <div className="ys-alert__actions">
          {actions.map((a, i) => (
            <button key={i} type="button" style={a.danger ? { color: 'var(--pink-ink)', fontWeight: 800 } : undefined}
              onClick={() => onSelect && onSelect(a.value ?? i)}>{a.label}</button>
          ))}
        </div>
      </div>
    </>
  );
}
