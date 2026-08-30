import React from 'react';
const cn=(...a)=>a.filter(Boolean).join(' ');

/** iOS action sheet: grouped choices plus a separate Cancel. */
export function ActionSheet({ open=false, actions=[], cancelLabel='Cancel', onCancel, onSelect, className='' }) {
  if (!open) return null;
  return (
    <>
      <div className="ys-veil" onClick={onCancel} />
      <div className={cn('ys-actionsheet', className)} role="dialog" aria-modal="true">
        <div className="ys-actionsheet__group">
          {actions.map((a, i) => (
            <button key={i} type="button" data-danger={a.danger ? 'true' : undefined}
              onClick={() => onSelect && onSelect(a.value ?? i)}>{a.label}</button>
          ))}
        </div>
        <button type="button" className="ys-actionsheet__cancel" onClick={onCancel}>{cancelLabel}</button>
      </div>
    </>
  );
}
