import { auth } from "@/services/auth";
import { getProjectById } from "@/repository/projects";
import { redirect } from "next/navigation";
import Project from "@/components/Project";
import { getProjectInServiceById } from "@/services/services";

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const session = await auth();
  const project = await getProjectById(params.id);

  if (!project || project.ownerUserId !== session?.user.id) {
    redirect("/");
  }

  const services = await getProjectInServiceById(project);
  return <Project baseProject={project} services={services} />;
}
