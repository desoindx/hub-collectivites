import React from "react";
import styles from "./Service.module.css";
import { Service as ServiceType } from "@/services/services";
import Button from "@codegouvfr/react-dsfr/Button";
import IFrameResized from "./IFrameResized";
import classNames from "classnames";

const Service = ({ id, service }: { id: string; service: ServiceType }) => {
  const { service: serviceData, project } = service;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img className={styles.logo} src={serviceData.logo} alt=""></img>
        <div className={styles.mainHeader}>
          <h3 className={styles.title}>{serviceData.name}</h3>
          <span className={classNames("fr-text--sm", styles.description)}>{serviceData.description}</span>
        </div>
        {project ? (
          <Button
            className={styles.button}
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
            className={styles.button}
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
      {project && project.iframe && (
        <div className={styles.content}>
          {project.iframe && <IFrameResized src={project.iframe} className={styles.iframe} />}
        </div>
      )}
    </div>
  );
};

export default Service;
