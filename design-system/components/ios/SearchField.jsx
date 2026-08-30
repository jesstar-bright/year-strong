import React from 'react';
const cn=(...a)=>a.filter(Boolean).join(' ');

/** iOS search field. */
export function SearchField({ placeholder='Search', value, onChange, className='', ...rest }) {
  return (
    <label className={cn('ys-search', className)}>
      <span aria-hidden="true">⌕</span>
      <input type="search" placeholder={placeholder} value={value}
        onChange={(e) => onChange && onChange(e.target.value)} {...rest} />
    </label>
  );
}
