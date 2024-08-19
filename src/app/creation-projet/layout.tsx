import Header from "@/components/Header";

export default function ProjectCreationLayout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Header activePage="/creation-projet" />
      <main className="fr-container--fluid">{children}</main>
    </>
  );
}
