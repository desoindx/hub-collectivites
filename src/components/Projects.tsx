import React, { ReactNode } from "react";
import { Project } from "@/repository/projects";
import Breadcrumb from "@codegouvfr/react-dsfr/Breadcrumb";
import { Table } from "@codegouvfr/react-dsfr/Table";
import { ROUTES } from "@/app/routes";
import { statusLabel } from "@/services/status";
import { thematiquesLabel } from "@/services/thematiques";
import Button from "@codegouvfr/react-dsfr/Button";
import classNames from "classnames";
import styles from "./Projects.module.css";
const Home = ({ projects }: { projects: Project[] }) => {
  return (
    <>
      <Breadcrumb
        currentPageLabel="Liste des projets"
        homeLinkProps={{
          href: "/",
        }}
        segments={[]}
      />
      <Table
        caption="Gérer mes projets"
        headers={["Intitulé", "Statut", "Thématiques", "Date de dépôt", "Action"]}
        data={projects.map((project) => [
          project.name,
          statusLabel[project.status],
          project.thematiques.map((thematique) => (
            <div className={classNames("fr-tag", styles.tag)}>{thematiquesLabel[thematique]}</div>
          )),
          project.createdAt.toLocaleDateString(),
          <Button className={styles.button} size="small" linkProps={{ href: ROUTES.FICHE_PROJET(project.id) }}>
            Voir mon projet
          </Button>,
        ])}
      />
    </>
  );
};

export default Home;
