-- AlterTable
ALTER TABLE "ServiceContext" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "projectUrl" DROP NOT NULL,
ALTER COLUMN "newProjectUrl" DROP NOT NULL;
