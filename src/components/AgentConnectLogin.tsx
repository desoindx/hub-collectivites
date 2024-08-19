"use client";

import { signIn } from "next-auth/react";
import React from "react";

const Login = ({ callbackUrl = process.env.NEXT_PUBLIC_URL_SITE + "/projets" }: { callbackUrl?: string }) => {

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
