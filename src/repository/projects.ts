import {prisma} from "@/services/prisma";

export const getProjectsByEmail = (email: string) =>
  prisma.project.findMany({where: {owner: email}});

export const getProjectById = (id: string) =>
  prisma.project.findFirst({where: {id}});

export const createProject = (name: string, description: string, ownerEmail: string) =>
  prisma.project.create({data: {name: name, description: description, owner: ownerEmail}});

export type Project = Exclude<
  Awaited<ReturnType<typeof getProjectsByEmail>>,
  null
>[number];
