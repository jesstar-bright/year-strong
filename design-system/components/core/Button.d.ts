import * as React from 'react';

/** Bubble button: ink outline, hard offset shadow, sits down onto it when pressed. */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = pink CTA · quiet = outline only · ref = sage (information actions) · plain = text link */
  variant?: 'primary' | 'quiet' | 'ref' | 'plain';
  size?: 'sm' | 'md' | 'lg';
  block?: boolean;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
