import * as React from 'react';

/** Mon–Sun strip. Completed days read sage; today reads ink with a pink underline. */
export interface DayStripProps extends React.HTMLAttributes<HTMLDivElement> {
  days?: string[];
  /** Index of the selected day. */
  value?: number;
  /** Indices already completed. */
  done?: number[];
  onChange?: (index: number) => void;
}
export declare function DayStrip(props: DayStripProps): JSX.Element;
