import type { AppProps } from 'next/app';

import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { reset, styled } from 'ui';

type PageProps = {};

reset();

const Main = styled('main', { padding: '$4' });

const MyApp = ({ Component, pageProps }: AppProps<PageProps>) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Main>
        <Component {...pageProps} />
      </Main>
    </QueryClientProvider>
  );
};

export default MyApp;
