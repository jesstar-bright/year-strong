import * as React from 'react';

/** Short-lived confirmation of something that already happened. */
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /** done = sage (a completion) · default = paper */
  tone?: 'default' | 'done';
  children?: React.ReactNode;
}
export declare function Toast(props: ToastProps): JSX.Element;
