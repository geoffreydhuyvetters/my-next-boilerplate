import type { ReactNode } from 'react';

type Props = { children: ReactNode };

const DefaultLayout = (props: Props) => {
  return <main className={'m-4'} {...props} />;
};

export { DefaultLayout };
