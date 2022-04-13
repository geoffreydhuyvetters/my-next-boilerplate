import type { ReactNode } from 'react';
import { styled } from 'ui';

type Props = { children: ReactNode };

const Main = styled('main', { padding: '$4' });

const DefaultLayout = (props: Props) => {
  return <Main {...props} />;
};

export { DefaultLayout };
