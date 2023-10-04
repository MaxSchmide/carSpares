import PageLoader from '@/components/PageLoader/PageLoader';
import StoreProvider from '@/providers/StoreProvider';
import StylesProvider from '@/providers/StylesProvider';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from './layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);

  const start = () => setIsLoading(true);
  const end = () => setIsLoading(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  return (
    <StoreProvider>
      <StylesProvider>
        {isLoading && <PageLoader />}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StylesProvider>
    </StoreProvider>
  );
}
