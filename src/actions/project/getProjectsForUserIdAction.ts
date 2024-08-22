"use server";
import { Project } from "@prisma/client";
import { auth } from "@/services/auth";
import { getProjectsByUserId } from "@/repository/projects";
import { ResponseAction } from "@/types/actions";

export const getProjectsForUserIdAction = async (userId: string): Promise<ResponseAction<{ projects: Project[] }>> => {
  const session = await auth();
  if (!session || !session.user?.email) {
    return { type: "error", message: "UNAUTHENTICATED", projects: [] };
  }
  if (userId !== session.user.id) {
    return { type: "error", message: "UNAUTHORIZED_USER", projects: [] };
  }
  const projects = await getProjectsByUserId(userId);
  return { type: "success", message: "PROJECT_CREATED", projects };
};
