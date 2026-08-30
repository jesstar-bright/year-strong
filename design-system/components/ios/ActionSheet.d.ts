import * as React from 'react';

export interface SheetAction { value?: string; label: React.ReactNode; danger?: boolean }

/** Two to four choices raised from the bottom edge, with Cancel detached beneath. */
export interface ActionSheetProps {
  open?: boolean;
  actions?: SheetAction[];
  cancelLabel?: string;
  onCancel?: () => void;
  onSelect?: (value: string | number) => void;
  className?: string;
}
export declare function ActionSheet(props: ActionSheetProps): JSX.Element | null;
