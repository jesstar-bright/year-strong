import * as React from 'react';

export interface ListRow { label: React.ReactNode; value?: React.ReactNode; chevron?: boolean; onClick?: () => void }

/**
 * @startingPoint section="iOS" subtitle="Inset grouped list with rows and values" viewport="430x320"
 */
export interface ListGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Mono caps section header above the group. */
  label?: React.ReactNode;
  rows?: ListRow[];
  /** Custom row content; overrides rows. */
  children?: React.ReactNode;
}
export declare function ListGroup(props: ListGroupProps): JSX.Element;
