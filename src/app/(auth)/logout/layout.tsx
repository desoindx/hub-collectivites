import React, { ReactElement } from "react";

export default function Layout({ children }: { children: ReactElement | null }) {
  return (
    <div>
      <div className="fr-container">
        <div className="fr-h3">Déconnexion en cours...</div>
      </div>
      {children}
    </div>
  );
}
