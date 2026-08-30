import React from 'react';
const cn=(...a)=>a.filter(Boolean).join(' ');

/** Bottom sheet with a grabber. Renders inside the phone frame, not the page. */
export function Sheet({ open=false, title, onClose, className='', children }) {
  if (!open) return null;
  return (
    <>
      <div className="ys-veil" onClick={onClose} />
      <div className={cn('ys-sheet', className)} role="dialog" aria-modal="true">
        <div className="ys-sheet__grabber" />
        {title ? <p className="ys-sheet__title">{title}</p> : null}
        {children}
      </div>
    </>
  );
}
