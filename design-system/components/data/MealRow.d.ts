import * as React from 'react';

export interface MealOption { key: string; text: React.ReactNode }

/** A meal slot: time and tag on the left, name plus lettered options on the right. */
export interface MealRowProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 24-hour time — "07:30". */
  time: React.ReactNode;
  /** Mono caps sub-label — "40 G · IRON". */
  tag?: React.ReactNode;
  name: React.ReactNode;
  /** Italic run of alternates after the name. */
  alts?: React.ReactNode;
  options?: MealOption[];
}
export declare function MealRow(props: MealRowProps): JSX.Element;
