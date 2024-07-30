import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.project.deleteMany();
  await prisma.project.createMany({
    data: Array.from({ length: 100 }).map(() => ({
      name: faker.lorem.sentence({ min: 2, max: 10 }),
      description: faker.lorem.paragraph(),
      owner: `user-${faker.number.int({ min: 1, max: 10 })}@test.fr`,
    })),
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
