import { redirect } from "next/navigation";
import Project from "@/components/Project";
import { getProjectInServiceById } from "@/services/services";
import { getProjectByIdAction } from "@/actions/project/getProjectByIdAction";

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const result = await getProjectByIdAction(params.id);

  if (!result.project) {
    redirect("/");
  }

  const services = await getProjectInServiceById(result.project);
  return <Project baseProject={result.project} services={services} />;
}
