import { auth } from "@/services/auth";
import Projects from "@/components/Projects";
import { getProjectsByEmail } from "@/repository/projects";

export default async function ProjectsPage() {
  const session = await auth();
  if (!session || !session.user || !session.user.email) {
    return null;
  }

  const projects = await getProjectsByEmail(session.user.email);
  return <Projects email={session.user.email} projects={projects} />;
}
