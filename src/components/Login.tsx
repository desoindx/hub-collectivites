"use client";

import { Button } from "@codegouvfr/react-dsfr/Button";
import { Input } from "@codegouvfr/react-dsfr/Input";
import { signIn } from "next-auth/react";
import Error from "next/error";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response: any = await signIn("credentials", {
      email,
      password: email,
      redirect: false,
    });
    if (response) {
      router.refresh();
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        label="Email"
        nativeInputProps={{
          type: "email",
          required: true,
          value: email,
          onChange: (event) => setEmail(event.target.value),
        }}
      />
      <Button type="submit">Se connecter</Button>
    </form>
  );
};

export default Login;
