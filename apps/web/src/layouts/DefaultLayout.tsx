import type { ReactNode } from 'react';

type Props = { children: ReactNode };

const DefaultLayout = (props: Props) => {
  return <main {...props} />;
};

export { DefaultLayout };
