import { prisma } from "@/services/prisma";
import { ProjectInfoFormData } from "@/forms/project/ProjectInfoFormSchema";

export const getProjectsByEmail = (email: string) => prisma.project.findMany({ where: { owner: email } });

export const getProjectById = (id: string) => prisma.project.findFirst({ where: { id } });

export const createProject = (data: ProjectInfoFormData, ownerEmail: string) =>
  prisma.project.create({
    data: { name: data.nom, description: data.description, owner: ownerEmail },
  });

export type Project = Exclude<Awaited<ReturnType<typeof getProjectsByEmail>>, null>[number];
