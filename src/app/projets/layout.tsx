import Header from "@/components/Header";

export default function ProjectLayout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Header activePage="/projets" />
      <main className="fr-container fr-container--fluid">{children}</main>
    </>
  );
}
