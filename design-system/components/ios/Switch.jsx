import React from 'react';
const cn=(...a)=>a.filter(Boolean).join(' ');

/** iOS toggle. Sage when on, because "on" is a settled state. */
export function Switch({ checked=false, label, onChange, className='', ...rest }) {
  return (
    <button type="button" role="switch" aria-checked={checked}
      className={cn('ys-switch', className)} onClick={() => onChange && onChange(!checked)} {...rest}>
      <span className="ys-switch__track"><span className="ys-switch__thumb" /></span>
      {label ? <span>{label}</span> : null}
    </button>
  );
}
