import { prisma } from "@/services/prisma";
import { ProjectInfoFormData } from "@/forms/project/ProjectInfoFormSchema";
import { SousThematique, Status, Thematique } from "@prisma/client";

export const getProjectsByUserId = (userId: string) => prisma.project.findMany({ where: { ownerUserId: userId } });

export const getProjectById = (id: string) => prisma.project.findFirst({ where: { id } });

export const createProject = (data: ProjectInfoFormData, ownerId: string) =>
  prisma.project.create({
    data: {
      name: data.nom,
      description: data.description,
      ownerUserId: ownerId,
      status: Status.EVALUATION,
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
