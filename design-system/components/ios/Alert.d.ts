import * as React from 'react';

export interface AlertAction { value?: string; label: React.ReactNode; danger?: boolean }

/** Blocking confirmation. Two actions, side by side. */
export interface AlertProps {
  open?: boolean;
  title?: React.ReactNode;
  message?: React.ReactNode;
  actions?: AlertAction[];
  onSelect?: (value: string | number) => void;
  className?: string;
}
export declare function Alert(props: AlertProps): JSX.Element | null;
