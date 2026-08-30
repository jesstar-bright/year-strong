import * as React from 'react';

export interface MacroItem { label: React.ReactNode; value: React.ReactNode; accent?: boolean }

/** Compact metric chips — protein, calories, iron, vitamin C. */
export interface MacroGridProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: MacroItem[];
  /** 3 by default; 4 only on wide layouts. */
  columns?: number;
  }
export declare function MacroGrid(props: MacroGridProps): JSX.Element;
