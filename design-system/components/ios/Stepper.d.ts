import * as React from 'react';

/** Numeric stepper — the fastest way to log a rep count with one thumb. */
export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  min?: number;
  max?: number;
  /** Increment. Use 5 for pounds, 1 for reps. */
  step?: number;
  /** Suffix rendered next to the number — "lb", "s". */
  unit?: string;
  onChange?: (value: number) => void;
}
export declare function Stepper(props: StepperProps): JSX.Element;
