import Header from "@/components/Header";
import { ROUTES } from "@/app/routes";

export default function ProjectLayout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Header />
      <main className="fr-container fr-container--fluid">{children}</main>
    </>
  );
}
