import * as React from 'react';

/** Generic container. Everything that groups content sits in one of these. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** card = outlined with shadow · flat = no shadow (cards inside cards) · sunken = chip grey */
  tone?: 'card' | 'flat' | 'sunken';
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;
