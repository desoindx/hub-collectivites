import CredentialsProvider from "next-auth/providers/credentials";
import { v4 as uuidv4 } from "uuid";
import { getServerSession, NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";
import prismaClient from "@/prisma/prismaClient";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prismaClient),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    {
      id: "agentconnect",
      name: "Agent Connect",
      type: "oauth",
      idToken: true,
      clientId: process.env.AGENT_CONNECT_ID,
      clientSecret: process.env.AGENT_CONNECT_SECRET,
      wellKnown: process.env.AGENT_CONNECT_BASE_URL + "/v2/.well-known/openid-configuration",
      allowDangerousEmailAccountLinking: true,
      checks: ["nonce", "state"],
      authorization: {
        params: {
          scope: "openid uid given_name usual_name email siret chorusdt phone organizational_unit siren",
          acr_values: "eidas1",
          redirect_uri: process.env.NEXT_PUBLIC_URL_SITE + "/api/auth/callback/agentconnect",
          nonce: uuidv4(),
          state: uuidv4()
        }
      },
      client: {
        authorization_signed_response_alg: "HS256",
        id_token_signed_response_alg: "HS256",
        userinfo_encrypted_response_alg: "HS256",
        userinfo_signed_response_alg: "HS256",
        userinfo_encrypted_response_enc: "HS256"
      },
      userinfo: {
        async request(context) {
          const userInfo = await fetch(process.env.AGENT_CONNECT_BASE_URL + "/v2/userinfo", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${context.tokens.access_token}`
            }
          }).then((res) => {
            return res.text();
          });
          return JSON.parse(Buffer.from(userInfo.split(".")[1], "base64").toString());
        }
      },
      profile: async (profile) => {
        return {
          id: profile.email,
          prenom: profile.given_name,
          nom: profile.usual_name,
          email: profile.email,
          poste: profile.belonging_population,
          agentconnect_info: profile
        };
      }
    },
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials: Record<string, string> | undefined) {
        console.log("credentials", credentials);
        if (!credentials) {
          return null;
        }

        const user = {
          id: credentials.email,
          email: credentials.email,
          password: credentials.password
        };

        if (user.email === user.password) {
          return user;
        } else {
          return null;
        }
      }
    })
  ]
};

// Use it in server contexts
export function auth(
  ...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []
) {
  return getServerSession(...args, authOptions);
}