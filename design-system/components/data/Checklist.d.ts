import * as React from 'react';

export interface ChecklistItem { label: React.ReactNode; done?: boolean }

/** Ticks fill sage and strike the label — completion is history, so it is not pink. */
export interface ChecklistProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: ChecklistItem[];
  onToggle?: (index: number) => void;
}
export declare function Checklist(props: ChecklistProps): JSX.Element;
