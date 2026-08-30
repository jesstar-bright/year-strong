import * as React from 'react';

export interface SegmentItem { value: string; label: React.ReactNode }

/** Mutually exclusive view switch. Use FilterChips instead when options exceed four. */
export interface SegmentedControlProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: Array<string | SegmentItem>;
  value?: string;
  onChange?: (value: string) => void;
}
export declare function SegmentedControl(props: SegmentedControlProps): JSX.Element;
