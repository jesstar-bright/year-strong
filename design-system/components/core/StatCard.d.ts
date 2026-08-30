import * as React from 'react';

/**
 * Big-number card: streak, weight, pull-ups, protein.
 */
export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Mono caps label above the number. */
  label: React.ReactNode;
  /** The number. Keep it short — "17", "88g", "2 / 5". */
  value: React.ReactNode;
  /** Optional line beneath: a delta, a goal, a unit. */
  sub?: React.ReactNode;
  /** Sage instead of ink — for things already achieved. */
  done?: boolean;
}
export declare function StatCard(props: StatCardProps): JSX.Element;
