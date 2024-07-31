import axios from "axios";

const services = {
  service1: {
    name: "Sample service 1",
    description: "Avoir des infos sur le score d'un projet",
    url: (id: string) => `${process.env.SERVICE_1_URL}/api/projects/${id}`,
    createUrl: (id: string) =>
      `${process.env.SERVICE_1_URL}/projects/${id}/new`,
  },
  service2: {
    name: "Sample service 2",
    description: "Avoir des infos sur l'efficacité d'un projet",
    url: (id: string) => `${process.env.SERVICE_2_URL}/api/projects/${id}`,
    createUrl: (id: string) =>
      `${process.env.SERVICE_2_URL}/projects/${id}/new`,
  },
};

export const getProjectInServiceById = (id: string) =>
  Promise.all(
    Object.entries(services).map(async ([slug, service]) => {
      try {
        const project = await axios.get<{
          url: string;
          iframe?: string;
          data: any;
        }>(service.url(id));
        return {
          slug,
          service,
          project: project.data,
        };
      } catch {
        return {
          slug,
          service,
        };
      }
    })
  );

export type Service = Awaited<
  ReturnType<typeof getProjectInServiceById>
>[number];
