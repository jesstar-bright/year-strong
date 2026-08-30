import * as React from 'react';

/**
 * The evidence block — sage wash, sage border, italic citation.
 */
export interface RefCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: React.ReactNode;
  /** Full citation, rendered italic and muted. Always include one. */
  cite?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function RefCard(props: RefCardProps): JSX.Element;
