import * as React from 'react';

/** Italic voice line. One per screen, maximum — it is the only sentence that is not data. */
export interface AsideProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
}
export declare function Aside(props: AsideProps): JSX.Element;
