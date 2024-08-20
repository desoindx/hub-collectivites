import styles from "./page.module.css";
import { redirect } from "next/navigation";
import { auth } from "@/services/auth";
import AgentConnectLogin from "@/components/AgentConnectLogin";
import { ROUTES } from "@/app/routes";
import Image from "next/image";

export default async function Connexion({ searchParams }: { searchParams: { callbackUrl: string | undefined } }) {
  const session = await auth();
  if (session) {
    redirect(ROUTES.LISTE_PROJETS);
  }
  return (
    <div className="fr-container">
      <div className={styles.page}>
        <div className={styles.connexionSection}>
          <h3>Connexion au Hub des collectivités</h3>
          <p>
            AgentConnect est la solution proposée par l'État pour sécuriser et simplifier la connexion aux services en
            ligne
          </p>
          <AgentConnectLogin callbackUrl={searchParams.callbackUrl} />
        </div>
        <div className={styles.imageSection}>
          <Image
            src="/images/connexion/location-overseas-france.png"
            alt=""
            width={450}
            height={450}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
}
