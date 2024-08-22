import { auth } from "@/services/auth";
import Projects from "@/components/Projects";
import { getProjectsForUserIdAction } from "@/actions/project/getProjectsForUserIdAction";

export default async function ProjectsPage() {
  const session = await auth();
  if (!session?.user.id) {
    return null;
  }

  const result = await getProjectsForUserIdAction(session.user.id);

  return <Projects projects={result.projects} />;
}
