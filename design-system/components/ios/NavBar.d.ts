import * as React from 'react';

/** Compact nav bar. Pair with LargeTitle for the top level of a tab. */
export interface NavBarProps extends React.HTMLAttributes<HTMLElement> {
  /** Back label — the previous screen's name, not "Back". */
  back?: React.ReactNode;
  onBack?: () => void;
  title?: React.ReactNode;
  /** Trailing slot: an icon button or a plain-variant Button. */
  action?: React.ReactNode;
}
export declare function NavBar(props: NavBarProps): JSX.Element;
