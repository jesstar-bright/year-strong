import * as React from 'react';

export interface MenuItem { value?: string; label: React.ReactNode; danger?: boolean }

/** Dropdown menu / long-press context menu. Position it yourself with absolute coordinates. */
export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: MenuItem[];
  /** Currently selected value — renders a sage check. */
  value?: string;
  onSelect?: (value: string | number) => void;
}
export declare function Menu(props: MenuProps): JSX.Element;
