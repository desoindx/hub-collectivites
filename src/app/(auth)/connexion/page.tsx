import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@/services/auth";
import AgentConnectLogin from "@/components/AgentConnectLogin";

export default async function Connexion({ searchParams }: { searchParams: { callbackUrl: string | undefined } }) {
  const session = await auth();
  if (session) {
    redirect("/projets");
  }
  return (
    <div className="fr-container">
      <AgentConnectLogin callbackUrl={searchParams.callbackUrl}/>
    </div>

  );
}
