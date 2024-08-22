"use server";
import { Project } from "@prisma/client";
import { auth } from "@/services/auth";
import { getProjectById } from "@/repository/projects";
import { ResponseAction } from "@/types/actions";

export const getProjectByIdAction = async (
  projectId: string,
): Promise<ResponseAction<{ project?: Project | null }>> => {
  const session = await auth();
  if (!session || !session.user?.email) {
    return { type: "error", message: "UNAUTHENTICATED" };
  }
  const project = await getProjectById(projectId);
  if (
    project?.user_projects.some((userProject) => userProject.user_id === session.user.id && !userProject.deleted_at)
  ) {
    return { type: "success", message: "PROJECT_CREATED", project };
  } else {
    return { type: "error", message: "UNAUTHORIZED_PROJECT" };
  }
};
