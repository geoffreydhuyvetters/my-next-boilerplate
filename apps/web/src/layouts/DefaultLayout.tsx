import type { ReactNode } from 'react';
import { styled } from '../../stitches.config';

type Props = { children: ReactNode };

const Main = styled('main', { padding: '30px' });

const DefaultLayout = (props: Props) => {
  return <Main {...props} />;
};

export { DefaultLayout };
