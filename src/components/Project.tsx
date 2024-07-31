import { Project as ProjectType } from "@/repository/projects";
import { Service } from "@/services/services";
import Link from "next/link";
import React from "react";
import styles from "./Project.module.css";

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
              <div>
                {service.project.iframe && (
                  <iframe
                    className={styles.iframe}
                    src={service.project.iframe}
                  />
                )}
                <Link
                  href={service.project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le projet
                </Link>
              </div>
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
