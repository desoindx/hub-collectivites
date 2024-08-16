import {authOptions} from "@/services/auth";
import {getServerSession} from "next-auth";
import Login from "@/components/Login";

export default async function ProjectsPage() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !session.user.email) {
    return <Login/>;
  }
  return <div>Création d'un projet</div>;
}
