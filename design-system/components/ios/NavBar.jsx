import React from 'react';
const cn=(...a)=>a.filter(Boolean).join(' ');

/** iOS navigation bar: back affordance, centred title, trailing action. */
export function NavBar({ back, onBack, title, action, className='', ...rest }) {
  return (
    <header className={cn('ys-navbar', className)} {...rest}>
      {back ? <button type="button" className="ys-navbar__back" onClick={onBack}>‹ {back}</button> : null}
      {title ? <span className="ys-navbar__title">{title}</span> : null}
      {action ? <span className="ys-navbar__action">{action}</span> : null}
    </header>
  );
}
