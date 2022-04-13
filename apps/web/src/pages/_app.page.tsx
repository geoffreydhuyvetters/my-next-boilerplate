import { globalCss } from '@stitches/react';
import type { AppProps } from 'next/app';

import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { reset } from '../../stitches.config';

type PageProps = {};

reset();

const MyApp = ({ Component, pageProps }: AppProps<PageProps>) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default MyApp;
