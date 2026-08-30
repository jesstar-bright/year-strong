import * as React from 'react';

export interface TabItem { value: string; label: React.ReactNode; tone?: 'action' | 'ref' }

/** Fixed bottom navigation. Three to five items; labels are mono caps. */
export interface TabBarProps extends React.HTMLAttributes<HTMLElement> {
  items?: Array<string | TabItem>;
  value?: string;
  onChange?: (value: string) => void;
}
export declare function TabBar(props: TabBarProps): JSX.Element;
