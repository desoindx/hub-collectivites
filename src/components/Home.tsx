import React from "react";
import Logout from "./Logout";
import { Project } from "@/repository/projects";
import Link from "next/link";

const Home = ({ email, projects }: { email: string; projects: Project[] }) => {
  return (
    <>
      <Logout />
      <div>Hello {email}</div>
      <div>Mes projets : </div>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link key={project.id} href={`/projets/${project.id}`}>
              {project.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
