/*
  Warnings:

  - You are about to drop the column `newProjectUrl` on the `ServiceContext` table. All the data in the column will be lost.
  - You are about to drop the column `projectUrl` on the `ServiceContext` table. All the data in the column will be lost.
  - Added the required column `getProjectUrl` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "getProjectUrl" TEXT NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ServiceContext" DROP COLUMN "newProjectUrl",
DROP COLUMN "projectUrl";
