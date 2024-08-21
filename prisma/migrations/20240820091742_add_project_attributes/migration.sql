/*
  Warnings:

  - Added the required column `status` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Thematique" AS ENUM ('CULTURE', 'EAU', 'ENERGIE', 'MOBILITE');

-- CreateEnum
CREATE TYPE "SousThematique" AS ENUM ('ART_PLASTIQUES', 'MEDIAS', 'MUSEE', 'ASSAINISSEMENT', 'PLUVIALE', 'POTABLE', 'ECONOMIE', 'RECYCLAGE', 'DISTRIBUTION', 'CONNAISSANCE', 'INFORMATION', 'URBAINE');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('QUESTIONNEMENT', 'PRIORISATION', 'REDACTION', 'LANCEMENT', 'EVALUATION');

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "sousThematiques" "SousThematique"[],
ADD COLUMN     "status" "Status" NOT NULL,
ADD COLUMN     "thematiques" "Thematique"[];
