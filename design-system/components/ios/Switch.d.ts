import * as React from 'react';

/** Immediate-effect toggle. If it needs a Save button, use a checkbox instead. */
export interface SwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  checked?: boolean;
  label?: React.ReactNode;
  onChange?: (checked: boolean) => void;
}
export declare function Switch(props: SwitchProps): JSX.Element;
