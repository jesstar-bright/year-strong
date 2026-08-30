import * as React from 'react';

/**
 * Bottom sheet — the default way to present anything secondary.
 * The parent must be position:relative (the phone frame is).
 */
export interface SheetProps {
  open?: boolean;
  title?: React.ReactNode;
  /** Fired by the veil tap. Wire a swipe-down here too in production. */
  onClose?: () => void;
  className?: string;
  children?: React.ReactNode;
}
export declare function Sheet(props: SheetProps): JSX.Element | null;
