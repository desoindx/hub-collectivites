import { ProjectInfoForm } from "@/forms/project/ProjectInfoForm";
import Image from "next/image";
import styles from "./page.module.css";
import classNames from "classnames";

export default async function ProjectsPage() {
  return (
    <div className={styles.page}>
      <div className={classNames("fr-container", styles.header)}>
        <Image
          src="/images/project/project-add.svg"
          alt=""
          height={80}
          width={80}
          className={styles.createProjectIcon}
        />
        <div className={styles.headerTitle}>Informations du projet</div>
      </div>
      <hr />
      <div className={classNames("fr-container", styles.form)}>
        <ProjectInfoForm />
      </div>
    </div>
  );
}
