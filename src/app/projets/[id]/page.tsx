import { authOptions } from "@/services/auth";
import { getServerSession } from "next-auth";
import Login from "@/components/Login";
import { getProjectById } from "@/repository/projects";
import { redirect } from "next/navigation";
import Project from "@/components/Project";
import { getProjectInServiceById } from "@/services/services";

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

  const services = await getProjectInServiceById(params.id);
  return <Project baseProject={project} services={services} />;
}
