import axios from "axios";
import { prisma } from "./prisma";

export const getProjectInServiceById = async (id: string) => {
  const services = await prisma.service.findMany({
    include: {
      contexts: true,
    },
  });

  return Promise.all(
    services.map(async (service) => {
      const context = service.contexts[0];
      const serviceData = {
        slug: service.slug,
        name: service.name,
        logo: service.logo,
        newProjectUrl: service.newProjectUrl,
        description: context.description || service.description,
      };
      try {
        const project = await axios.get<{
          url: string;
          iframe?: string;
          data: any;
        }>(service.projectUrl.replace("${id}", id));
        return {
          service: serviceData,
          project: project.data,
        };
      } catch {
        return {
          service: serviceData,
        };
      }
    })
  );
};

export type Service = Awaited<
  ReturnType<typeof getProjectInServiceById>
>[number];
