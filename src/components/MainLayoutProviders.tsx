"use client";
import { PropsWithChildren } from "react";
import { DsfrProvider } from "@codegouvfr/react-dsfr/next-appdir/DsfrProvider";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export default function MainLayoutProviders({ children, lang }: PropsWithChildren<{ lang: string }>) {
  return (
    <SessionProvider>
      <DsfrProvider lang={lang}>
          {children}
        <Toaster position="bottom-left" />
      </DsfrProvider>
    </SessionProvider>
  );
}
