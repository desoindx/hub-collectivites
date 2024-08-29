-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "newProjectLabel" TEXT,
ADD COLUMN     "projectLabel" TEXT;

-- AlterTable
ALTER TABLE "ServiceContext" ADD COLUMN     "newProjectLabel" TEXT,
ADD COLUMN     "projectLabel" TEXT;
