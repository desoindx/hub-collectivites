import Header from "@/components/Header";

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Header/>
      <main>{children}</main>
    </>
  );
}
