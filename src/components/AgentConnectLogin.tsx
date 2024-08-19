"use client";

import { signIn } from "next-auth/react";
import React from "react";
import { ROUTES } from "@/app/routes";

const Login = ({ callbackUrl = process.env.NEXT_PUBLIC_URL_SITE + ROUTES.LISTE_PROJETS }: { callbackUrl?: string }) => {

  const handleSignIn = () => signIn("agentconnect", { callbackUrl: callbackUrl });

  return (
    <div className="fr-connect-group">
      <button className="fr-connect" onClick={handleSignIn}>
        <span className="fr-connect__login">S’identifier avec</span>{" "}
        <span className="fr-connect__brand">AgentConnect</span>
      </button>
      <p>
        <a
          href="https://agentconnect.gouv.fr/"
          target="_blank"
          rel="noopener"
          title="Qu’est-ce que AgentConnect  ? - nouvelle fenêtre"
        >
          Qu’est-ce que AgentConnect ?
        </a>
      </p>
    </div>
  );
};

export default Login;
