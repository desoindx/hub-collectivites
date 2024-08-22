import { auth } from "@/services/auth";
import Projects from "@/components/Projects";
import { getProjectsByUserId } from "@/repository/projects";

export default async function ProjectsPage() {
  const session = await auth();
  if (!session || !session.user || !session.user.email) {
    return null;
  }

  const projects = await getProjectsByUserId(session.user.id);
  return <Projects projects={projects} />;
}
