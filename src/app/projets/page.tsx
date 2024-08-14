import { authOptions } from "@/services/auth";
import styles from "./page.module.css";
import { getServerSession } from "next-auth";
import Login from "@/components/Login";
import Projects from "@/components/Projects";
import { getProjectsByEmail } from "@/repository/projects";

export default async function ProjectsPage() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !session.user.email) {
    return <Login />;
  }

  const projects = await getProjectsByEmail(session.user.email);
  return <Projects email={session.user.email} projects={projects} />;
}
