"use client";

import Button from "@codegouvfr/react-dsfr/Button";
import { signOut } from "next-auth/react";
import React from "react";
import styles from "./Logout.module.css";

const Logout = () => {
  return (
    <Button className={styles.logout} onClick={() => signOut()}>
      Se deconnecter
    </Button>
  );
};

export default Logout;
