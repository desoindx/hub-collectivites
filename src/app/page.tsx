import { authOptions } from "@/services/auth";
import styles from "./page.module.css";
import { getServerSession } from "next-auth";
import Login from "@/components/Login";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return <main className={styles.main}>{session ? "Yoooo" : <Login />} </main>;
}
