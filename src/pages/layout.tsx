import { Header } from '@/components/Header';
import { useLocalStorage } from '@/hooks';
import Head from 'next/head';

export default function Layout({ children }: { children: React.ReactNode }) {
  useLocalStorage();
  return (
    <>
      <Head>
        <title>CarSpares</title>
        <meta
          name="description"
          content="Shop for car parts"
        />
        <link
          rel="shortcut icon"
          href="favicon.svg"
          type="image/x-icon"
        />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
}
