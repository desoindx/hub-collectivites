import { faker } from "@faker-js/faker";
import { PrismaClient, Service } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await Promise.all([
    prisma.project.deleteMany(),
    prisma.serviceContext.deleteMany(),
    prisma.service.deleteMany(),
  ]);
  await prisma.project.createMany({
    data: Array.from({ length: 100 }).map(() => ({
      name: faker.lorem.sentence({ min: 2, max: 10 }),
      description: faker.lorem.paragraph(),
      owner: `user-${faker.number.int({ min: 1, max: 10 })}@test.fr`,
    })),
  });

  await prisma.service.createMany({
    data: [
      {
        name: "Sample service 1",
        slug: "sampleService1",
        logo: `${process.env.SERVICE_1_URL}/logo.webp`,
        description: "Avoir des infos sur le score d'un projet",
        projectUrl: `${process.env.SERVICE_1_URL}/api/projects/\${id}`,
        newProjectUrl: `${process.env.SERVICE_1_URL}/projects/\${id}/new`,
      },
      {
        name: "Sample service 2",
        slug: "sampleService2",
        logo: `${process.env.SERVICE_1_URL}/logo.webp`,
        description: "description generique",
        projectUrl: `${process.env.SERVICE_2_URL}/api/projects/\${id}`,
        newProjectUrl: `${process.env.SERVICE_2_URL}/projects/\${id}/new`,
      },
    ],
  });

  const services = await prisma.service.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  await prisma.serviceContext.createMany({
    data: [
      {
        serviceId: (
          services.find(
            (service) => service.name === "Sample service 1"
          ) as Service
        ).id,
      },
      {
        serviceId: (
          services.find(
            (service) => service.name === "Sample service 2"
          ) as Service
        ).id,
        description: "Avoir des infos sur l'efficaticté d'un projet",
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
