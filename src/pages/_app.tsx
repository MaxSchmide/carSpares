import type { AppProps } from 'next/app';
import Layout from './layout';
import { GlobalStyles, theme } from '@/styles';
import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from '@/lib/styled';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledComponentsRegistry>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StyledComponentsRegistry>
    </ThemeProvider>
  );
}
