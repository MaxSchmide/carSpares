import { Header } from '@/components/Header';
import { useLocalStorage } from '@/hooks';
import Head from 'next/head';

export default function Layout({ children }: { children: React.ReactNode }) {
  useLocalStorage();
  return (
    <>
      <Head>
        <title>CarSpares</title>
        <link
          rel="shortcut icon"
          href="favicon.svg"
          type="image/x-icon"
        />
        <meta
          name="description"
          content="An Online auto shop with car parts"
        />
        <link
          rel="manifest"
          href="manifest.json"
        />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
}
