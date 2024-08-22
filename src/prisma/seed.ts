import { faker } from "@faker-js/faker";
import { PrismaClient, Service, SousThematique, Status, Thematique } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await Promise.all([prisma.user_project.deleteMany(), prisma.project.deleteMany(), prisma.serviceContext.deleteMany(), prisma.user.deleteMany()]);
  await prisma.service.deleteMany();
  await prisma.user.createMany({
    data: Array.from(Array(10).keys()).map((index) => ({
      email: `hub-collectivite-${index}@yopmail.com`,
      lastname: "Seeded User firstname",
      firstname: "Seeded User firstname",
      updatedAt: new Date()
    }))
  });

  const users = await prisma.user.findMany();
  await prisma.account.createMany({
    data: users.map((user) => ({
      userId: user.id,
      type: "oauth",
      provider: "seed",
      providerAccountId: user.id
    }))
  });

  await prisma.project.createMany({
    data: Array.from({ length: 100 }).map(() => ({
      name: faker.lorem.sentence({ min: 2, max: 10 }),
      description: faker.lorem.paragraph(),
      ownerUserId: faker.helpers.arrayElement(users).id,
      status: faker.helpers.enumValue(Status),
      thematiques: faker.helpers.arrayElements(Object.values(Thematique), { min: 1, max: 3 }),
      sousThematiques: faker.helpers.arrayElements(Object.values(SousThematique), { min: 1, max: 3 })
    }))
  });

  const projects = await prisma.project.findMany();

  await prisma.user_project.createMany({
    data: projects.map((project) => ({
      user_id: project.ownerUserId,
      project_id: project.id,
      role: "ADMIN"
    }))
  });

  await prisma.service.createMany({
    data: [
      {
        name: "Sample service 1",
        slug: "sampleService1",
        logo: `${process.env.SERVICE_1_URL}/logo.webp`,
        description: "Avoir des infos sur le score d'un projet",
        projectUrl: `${process.env.SERVICE_1_URL}/api/projects/\${id}`,
        newProjectUrl: `${process.env.SERVICE_1_URL}/projects/\${id}/new`
      },
      {
        name: "Sample service 2",
        slug: "sampleService2",
        logo: `${process.env.SERVICE_2_URL}/logo.webp`,
        description: "description generique",
        projectUrl: `${process.env.SERVICE_2_URL}/api/projects/\${id}`,
        newProjectUrl: `${process.env.SERVICE_2_URL}/projects/\${id}/new`
      }
    ]
  });

  const services = await prisma.service.findMany({
    select: {
      id: true,
      name: true
    }
  });
  await prisma.serviceContext.createMany({
    data: [
      {
        serviceId: (services.find((service) => service.name === "Sample service 1") as Service).id
      },
      {
        serviceId: (services.find((service) => service.name === "Sample service 2") as Service).id,
        thematiques: [Thematique.CULTURE],
        description: "Avoir des infos sur l'efficacité d'un projet culture"
      },
      {
        serviceId: (services.find((service) => service.name === "Sample service 2") as Service).id,
        thematiques: [Thematique.EAU],
        description: "Avoir des infos sur l'efficacité d'un projet eau"
      }
    ]
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
