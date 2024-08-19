import React from "react";
import Logout from "./Logout";
import { Project } from "@/repository/projects";
import Link from "next/link";
import Breadcrumb from "@codegouvfr/react-dsfr/Breadcrumb";
import { ROUTES } from "@/app/routes";

const Home = ({ email, projects }: { email: string; projects: Project[] }) => {
  return (
    <>
      <Breadcrumb
        currentPageLabel="Liste des projets"
        homeLinkProps={{
          href: "/"
        }}
        segments={[]}
      />
      <Logout />
      <h1>Mes projets</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link key={project.id} href={ROUTES.FICHE_PROJET(project.id)}>
              {project.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
