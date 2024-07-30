import { authOptions } from "@/services/auth";
import styles from "./page.module.css";
import { getServerSession } from "next-auth";
import Login from "@/components/Login";
import Home from "@/components/Home";

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <main className={styles.main}>
      {session && session.user && session.user.email ? (
        <Home email={session.user.email} />
      ) : (
        <Login />
      )}{" "}
    </main>
  );
}
