"use client";

import Button from "@codegouvfr/react-dsfr/Button";
import { signOut } from "next-auth/react";
import React from "react";
import styles from "./Logout.module.css";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/app/routes";

const Logout = () => {

  const router = useRouter();

  const onLogout = async () => {
    router.push(ROUTES.DECONNEXION);
  };
  return (
    <Button className={styles.logout} onClick={() => onLogout()}>
      Se déconnecter
    </Button>
  );
};

export default Logout;
