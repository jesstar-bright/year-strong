import React from 'react';
const cn=(...a)=>a.filter(Boolean).join(' ');

/** −/+ stepper for reps, weight and sets. */
export function Stepper({ value=0, min=0, max=999, step=1, unit='', onChange, className='', ...rest }) {
  const set = (v) => onChange && onChange(Math.min(max, Math.max(min, v)));
  return (
    <div className={cn('ys-stepper', className)} {...rest}>
      <button type="button" aria-label="Decrease" onClick={() => set(value - step)}>−</button>
      <span>{value}{unit}</span>
      <button type="button" aria-label="Increase" onClick={() => set(value + step)}>+</button>
    </div>
  );
}
