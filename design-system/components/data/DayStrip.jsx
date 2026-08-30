import React from 'react';
const cn=(...a)=>a.filter(Boolean).join(' ');
const DAYS = ['M','T','W','Th','F','Sa','Su'];

/** Week selector across the top of the Today screen. */
export function DayStrip({ days=DAYS, value, done=[], onChange, className='', ...rest }) {
  return (
    <div className={cn('ys-daystrip', className)} role="tablist" {...rest}>
      {days.map((d, i) => (
        <button key={d} type="button" role="tab"
          aria-current={value === i ? 'true' : undefined}
          data-done={done.includes(i) ? 'true' : undefined}
          onClick={() => onChange && onChange(i)}>{d}</button>
      ))}
    </div>
  );
}
