import { Project as ProjectType } from "@/repository/projects";
import { Service } from "@/services/services";
import Link from "next/link";
import React from "react";

const Project = ({
  project,
  services,
}: {
  project: ProjectType;
  services: Service[];
}) => {
  return (
    <div>
      <h1>{project.name}</h1>
      <div>
        {services.map((service) => (
          <div key={service.slug}>
            <h2>{service.service.name}</h2>
            <div>{service.service.description}</div>
            {service.project ? (
              <Link
                href={service.project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le projet
              </Link>
            ) : (
              <Link
                href={service.service.createUrl(project.id)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Importer le projet
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
