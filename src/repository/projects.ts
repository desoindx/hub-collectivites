import { prisma } from "@/services/prisma";

export const getProjectsByEmail = (email: string) =>
  prisma.project.findMany({ where: { owner: email } });

export const getProjectById = (id: string) =>
  prisma.project.findFirst({ where: { id } });

export type Project = Exclude<
  Awaited<ReturnType<typeof getProjectsByEmail>>,
  null
>[number];
