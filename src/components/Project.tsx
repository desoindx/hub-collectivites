import { Project as ProjectType } from "@/repository/projects";
import React from "react";

const Project = ({ project }: { project: ProjectType }) => {
  return (
    <div>
      <h1>{project.name}</h1>
    </div>
  );
};

export default Project;
