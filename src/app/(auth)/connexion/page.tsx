import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@/services/auth";
import AgentConnectLogin from "@/components/AgentConnectLogin";
import { ROUTES } from "@/app/routes";

export default async function Connexion({ searchParams }: { searchParams: { callbackUrl: string | undefined } }) {
  const session = await auth();
  if (session) {
    redirect(ROUTES.LISTE_PROJETS);
  }
  return (
    <div className="fr-container">
      <AgentConnectLogin callbackUrl={searchParams.callbackUrl} />
    </div>
  );
}
