import StylesProvider from '@/providers/StylesProvider';
import type { AppProps } from 'next/app';
import Layout from './layout';
import StoreProvider from '@/providers/StoreProvider';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <StylesProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StylesProvider>
    </StoreProvider>
  );
}
