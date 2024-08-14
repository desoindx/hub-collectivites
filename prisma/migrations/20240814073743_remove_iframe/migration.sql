/*
  Warnings:

  - You are about to drop the column `iframeUrl` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `iframeUrl` on the `ServiceContext` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Service" DROP COLUMN "iframeUrl";

-- AlterTable
ALTER TABLE "ServiceContext" DROP COLUMN "iframeUrl";
