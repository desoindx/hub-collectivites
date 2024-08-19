export default function ProjectLayout({ children }: { children: JSX.Element }) {
  return (
    <>
      <main className="fr-container fr-container--fluid">{children}</main>
    </>
  );
}
