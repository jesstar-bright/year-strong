import * as React from 'react';

/** The screen's name at the top of a tab root. One per screen. */
export interface LargeTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
}
export declare function LargeTitle(props: LargeTitleProps): JSX.Element;
