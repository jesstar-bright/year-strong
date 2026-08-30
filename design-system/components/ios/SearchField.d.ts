import * as React from 'react';

/** Search input sitting in the chip-grey field style. */
export interface SearchFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}
export declare function SearchField(props: SearchFieldProps): JSX.Element;
