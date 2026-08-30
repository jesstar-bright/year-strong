import * as React from 'react';

export interface ChipItem { value: string; label: React.ReactNode }

/** Single-select filter chips. For multi-select, manage an array yourself. */
export interface FilterChipsProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: Array<string | ChipItem>;
  value?: string;
  onChange?: (value: string) => void;
  tone?: 'action' | 'ref';
}
export declare function FilterChips(props: FilterChipsProps): JSX.Element;
