import React from 'react';
const cn=(...a)=>a.filter(Boolean).join(' ');

/** One meal slot on the Food tab, with its lettered options. */
export function MealRow({ time, tag, name, alts, options=[], onClick, className='', ...rest }) {
  return (
    <button type="button" className={cn('ys-meal', className)} onClick={onClick} {...rest}>
      <span><span className="ys-meal__time">{time}</span><span className="ys-meal__tag">{tag}</span></span>
      <span>
        <span className="ys-meal__name">{name}</span>{alts ? <span className="ys-meal__alt"> · {alts}</span> : null}
        {options.map((o, i) => (
          <span className="ys-meal__opt" key={i}><b>{o.key}</b><span>{o.text}</span></span>
        ))}
      </span>
    </button>
  );
}
