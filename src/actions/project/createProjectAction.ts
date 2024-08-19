"use server";
import { ProjectInfoFormData, ProjectInfoFormSchema } from "@/forms/project/ProjectInfoFormSchema";
import { getServerSession } from "next-auth";
import { Project } from "@prisma/client";
import { authOptions } from "@/services/auth";
import { createProject } from "@/repository/projects";
import { ResponseAction } from "@/types/actions";

export const createProjectAction = async (
  data: ProjectInfoFormData,
): Promise<ResponseAction<{ createdProject?: Project | null }>> => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return { type: "error", message: "UNAUTHENTICATED" };
  }
  const parseParamResult = ProjectInfoFormSchema.safeParse(data);
  if (!parseParamResult.success) {
    return { type: "error", message: "PARSING_ERROR" };
  }
  const project = await createProject(data, session.user.email);
  return {
    type: "success",
    createdProject: project,
    message: "PROJECT_CREATED",
  };
};
