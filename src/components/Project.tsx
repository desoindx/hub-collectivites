import { Project as ProjectType } from "@/repository/projects";
import { Service } from "@/services/services";
import Link from "next/link";
import React from "react";
import styles from "./Project.module.css";

const Project = ({
  baseProject,
  services,
}: {
  baseProject: ProjectType;
  services: Service[];
}) => {
  return (
    <div>
      <h1>{baseProject.name}</h1>
      <div>
        {services.map(({ service, project }) => (
          <div key={service.slug}>
            <h2>{service.name}</h2>
            <div>{service.description}</div>
            {project ? (
              <div>
                {project.iframe && (
                  <iframe className={styles.iframe} src={project.iframe} />
                )}
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Etre accompagné
                </Link>
              </div>
            ) : (
              <Link
                href={service.newProjectUrl.replace("${id}", baseProject.id)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le service
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
