"use server";
import {ProjetInfoFormData, ProjetInfoFormSchema} from "@/forms/project/ProjetInfoFormSchema";
import {getServerSession} from "next-auth";
import {ResponseAction} from "@/actions/actions-types";
import {Project} from "@prisma/client";
import {authOptions} from "@/services/auth";
import {createProject} from "@/repository/projects";

export const createProjectAction = async (
  data: ProjetInfoFormData,
): Promise<ResponseAction<{ createdProject?: Project | null }>> => {

  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return {type: "error", message: "UNAUTHENTICATED"};
  }
  const parseParamResult = ProjetInfoFormSchema.safeParse(data);
  if (!parseParamResult.success) {
    return {type: "error", message: "PARSING_ERROR"};
  }
  const project = await createProject(data.nom, data.description, session.user.email);
  return {type: "success", createdProject: project, message: "PROJECT_CREATED"};
};
