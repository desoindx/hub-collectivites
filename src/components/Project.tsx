import { Breadcrumb } from "@codegouvfr/react-dsfr/Breadcrumb";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { Project as ProjectType } from "@/repository/projects";
import { Service as ServiceType } from "@/services/services";
import React from "react";
import styles from "./Project.module.css";
import Box from "./Box";
import classNames from "classnames";
import Service from "./Service";

const Project = ({ baseProject, services }: { baseProject: ProjectType; services: ServiceType[] }) => {
  return (
    <>
      <Breadcrumb
        currentPageLabel={baseProject.name}
        homeLinkProps={{
          href: "/",
        }}
        segments={[
          {
            label: "Liste des projets",
            linkProps: {
              href: "/projets",
            },
          },
        ]}
      />
      <h1>{baseProject.name}</h1>
      <Box
        header={
          <>
            <h2 className={styles.title}>Description</h2>
            <Button className={styles.cta} iconId="fr-icon-edit-line" priority="tertiary no outline">
              Editer
            </Button>
          </>
        }
      >
        {baseProject.description}
      </Box>
      <Box
        header={
          <>
            <h2 className={styles.title}>Thématiques</h2>
            <Button className={styles.cta} iconId="fr-icon-edit-line" priority="tertiary no outline">
              Editer
            </Button>
          </>
        }
      >
        TODO
      </Box>
      <Box
        header={
          <>
            <div>
              <h2>Services aidants</h2>
              <span className={classNames("fr-text--sm", styles.subtitle)}>
                Les services de l’écosystème qui répondent à votre problématique
              </span>
            </div>
            <div className={styles.tag}>
              {services.length} identifié
              {services.length > 1 ? "s" : ""}
            </div>
          </>
        }
      >
        <div className={styles.services}>
          {services.map((service) => (
            <Service key={service.service.slug} service={service} id={baseProject.id} />
          ))}
        </div>
      </Box>
    </>
  );
};

export default Project;
