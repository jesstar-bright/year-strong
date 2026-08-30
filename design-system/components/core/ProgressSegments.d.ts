import * as React from 'react';

/** Segmented progress bar. Countable, because the workout is countable. */
export interface ProgressSegmentsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** How many segments. Above ~12 use a plain bar instead. */
  total?: number;
  done?: number;
  /** action = pink (in progress) · ref = sage (a completed history) */
  tone?: 'action' | 'ref';
}
export declare function ProgressSegments(props: ProgressSegmentsProps): JSX.Element;
