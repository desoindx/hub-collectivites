import { authOptions } from "@/services/auth";
import { getServerSession } from "next-auth";
import Projects from "@/components/Projects";
import { getProjectsByEmail } from "@/repository/projects";

export default async function ProjectsPage() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !session.user.email) {
    return null;
  }

  const projects = await getProjectsByEmail(session.user.email);
  return <Projects email={session.user.email} projects={projects} />;
}
