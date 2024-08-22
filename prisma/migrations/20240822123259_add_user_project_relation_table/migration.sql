/*
  Warnings:

  - You are about to drop the column `owner` on the `Project` table. All the data in the column will be lost.
  - Added the required column `ownerUserId` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "RoleProject" AS ENUM ('ADMIN');

DELETE FROM "Project";
DELETE FROM "User";
DELETE FROM "Account";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "owner",
ADD COLUMN     "ownerUserId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "user_project" (
    "id" SERIAL NOT NULL,
    "role" "RoleProject" NOT NULL,
    "project_id" TEXT NOT NULL,
    "user_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" TEXT,

    CONSTRAINT "user_project_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_project_user_id_project_id_key" ON "user_project"("user_id", "project_id");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_ownerUserId_fkey" FOREIGN KEY ("ownerUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_project" ADD CONSTRAINT "user_project_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_project" ADD CONSTRAINT "user_project_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_project" ADD CONSTRAINT "user_project_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
