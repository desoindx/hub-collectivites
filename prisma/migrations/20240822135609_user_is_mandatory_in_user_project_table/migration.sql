/*
  Warnings:

  - Made the column `user_id` on table `user_project` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "user_project" DROP CONSTRAINT "user_project_user_id_fkey";

-- AlterTable
ALTER TABLE "user_project" ALTER COLUMN "user_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "user_project" ADD CONSTRAINT "user_project_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
