import axios from "axios";
import { prisma } from "./prisma";
import { Project } from "@prisma/client";

export const getProjectInServiceById = async (project: Project) => {
  const services = await prisma.service.findMany({
    include: {
      contexts: true,
    },
  });

  return Promise.all(
    services
      .map((service) => {
        const context = service.contexts.find(
          (context) =>
            (!context.thematiques ||
              context.thematiques.length === 0 ||
              context.thematiques.some((thematique) => project.thematiques.includes(thematique))) &&
            (!context.sousThematiques ||
              context.sousThematiques.length === 0 ||
              context.sousThematiques.some((sousThematique) => project.sousThematiques.includes(sousThematique))) &&
            (!context.statuses ||
              context.statuses.length === 0 ||
              context.statuses.some((status) => project.status === status)),
        );
        return context
          ? {
              ...service,
              newProjectUrl: context.newProjectUrl || service.newProjectUrl,
              description: context.description || service.description,
              projectLabel: context.projectLabel || service.projectLabel,
              newProjectLabel: context.newProjectLabel || service.newProjectLabel,
            }
          : undefined;
      })
      .filter((data) => !!data)
      .map(async (service) => {
        const serviceData = {
          slug: service.slug,
          logo: service.logo,
          name: service.name,
          description: service.description,
          newProjectUrl: service.newProjectUrl,
          projectLabel: service.projectLabel,
          newProjectLabel: service.newProjectLabel,
        };

        try {
          const { data } = await axios.get<{
            url: string;
            iframe?: string;
            data: any;
          }>(service.projectUrl.replace("${id}", project.id));
          return {
            service: serviceData,
            project: data,
          };
        } catch {
          return {
            service: serviceData,
          };
        }
      }),
  );
};

export type Service = Awaited<ReturnType<typeof getProjectInServiceById>>[number];
