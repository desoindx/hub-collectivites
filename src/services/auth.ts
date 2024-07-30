import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: Record<string, string> | undefined) {
        console.log("credentials", credentials);
        if (!credentials) {
          return null;
        }

        const user = {
          id: credentials.email,
          email: credentials.email,
          password: credentials.password,
        };

        if (user.email === user.password) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};
