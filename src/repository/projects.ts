import { prisma } from "@/services/prisma";
import { ProjectInfoFormData } from "@/forms/project/ProjectInfoFormSchema";
import { Prisma } from "@prisma/client";

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
      status: data.status,
      thematiques: data.thematiques,
      sousThematiques: data.sousThematiques,
      owner: { connect: { id: ownerId } },
      user_projects: {
        create: {
          user_id: ownerId,
          role: "ADMIN",
        },
      },
      collectivite: {
        connectOrCreate: {
          where: {
            code_insee: data.collectivite.codeInsee,
          },
          create: {
            name: data.collectivite.nomCollectivite,
            code_postal: data.collectivite.codePostal,
            code_insee: data.collectivite.codeInsee,
            ban_id: data.collectivite.banId,
            adresse_info: data.collectivite.banInfo as Prisma.JsonObject,
            latitude: data.collectivite.lat,
            longitude: data.collectivite.long,
          },
        },
      },
    },
  });

export type Project = Exclude<Awaited<ReturnType<typeof getProjectsByUserId>>, null>[number];
