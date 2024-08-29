import { prisma } from "@/services/prisma";
import { ProjectInfoFormData } from "@/forms/project/ProjectInfoFormSchema";
import { Status } from "@prisma/client";

export const getProjectsByUserId = (userId: string) =>
  prisma.project.findMany({
    where: {
      user_projects: {
        some: {
          user_id: userId,
          deleted_at: null,
        },
      },
    },
  });

export const getProjectById = (id: string) =>
  prisma.project.findUnique({
    where: { id },
    include: { user_projects: true },
  });

export const createProject = (data: ProjectInfoFormData, ownerId: string) =>
  prisma.project.create({
    data: {
      name: data.nom,
      description: data.description,
      ownerUserId: ownerId,
      status: Status.EN_COURS,
      thematiques: data.thematiques,
      sousThematiques: data.sousThematiques,
      user_projects: {
        create: {
          user_id: ownerId,
          role: "ADMIN",
        },
      },
    },
  });

export type Project = Exclude<Awaited<ReturnType<typeof getProjectsByUserId>>, null>[number];
