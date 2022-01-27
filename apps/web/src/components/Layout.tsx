import type { ReactNode } from 'react';

type Props = { children: ReactNode };

const Layout = (props: Props) => {
  return <main className={'m-4'} {...props} />;
};

export { Layout };
