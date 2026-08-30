import * as React from 'react';

export interface SetEntry { label?: React.ReactNode; reps?: React.ReactNode; done?: boolean }

/**
 * @startingPoint section="Data" subtitle="The set and reps logging table" viewport="430x420"
 */
export interface SetTableProps extends React.HTMLAttributes<HTMLDivElement> {
  sets?: SetEntry[];
  /** Index of the active row. */
  current?: number;
  onSelect?: (index: number) => void;
  /** Column headers. Change the second for time- or distance-based work. */
  headers?: [string, string];
}
export declare function SetTable(props: SetTableProps): JSX.Element;
