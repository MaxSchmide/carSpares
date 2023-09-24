import MyHeader from '@/components/Header/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <MyHeader />
      <main>{children}</main>
    </div>
  );
}
