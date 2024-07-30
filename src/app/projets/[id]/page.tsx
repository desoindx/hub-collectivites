import { authOptions } from "@/services/auth";
import styles from "./page.module.css";
import { getServerSession } from "next-auth";
import Login from "@/components/Login";
import Home from "@/components/Home";
import { getProjectsByEmail, getProjectById } from "@/repository/projects";
import { redirect } from "next/navigation";
import Project from "@/components/Project";

export default async function ProjetPage({
  params,
}: {
  params: { id: string };
}) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !session.user.email) {
    return <Login />;
  }

  const project = await getProjectById(params.id);
  if (!project || project.owner !== session.user.email) {
    redirect("/");
  }

  return <Project project={project} />;
}
