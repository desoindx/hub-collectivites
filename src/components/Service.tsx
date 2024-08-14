import React from "react";
import styles from "./Service.module.css";
import { Service as ServiceType } from "@/services/services";
import Link from "next/link";
import Button from "@codegouvfr/react-dsfr/Button";

const Service = ({ id, service }: { id: string; service: ServiceType }) => {
  const { service: serviceData, project } = service;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img className={styles.logo} src={serviceData.logo} alt=""></img>
        <div className={styles.mainHeader}>
          <h3 className={styles.title}>{serviceData.name}</h3>
          <span className="fr-text--sm">{serviceData.description}</span>
        </div>
        {project ? (
          <Button
            iconId="fr-icon-external-link-line"
            iconPosition="right"
            linkProps={{
              href: project.url,
              target: "_blank",
              rel: "noopener noreferrer",
            }}
            priority="tertiary no outline"
          >
            Etre accompagné
          </Button>
        ) : (
          <Button
            iconId="fr-icon-external-link-line"
            iconPosition="right"
            linkProps={{
              href: serviceData.newProjectUrl.replace("${id}", id),
              target: "_blank",
              rel: "noopener noreferrer",
            }}
            priority="tertiary no outline"
          >
            Voir le service
          </Button>
        )}
      </div>
      {project && (
        <div>
          {project.iframe && (
            <iframe className={styles.iframe} src={project.iframe} />
          )}
        </div>
      )}
    </div>
  );
};

export default Service;
