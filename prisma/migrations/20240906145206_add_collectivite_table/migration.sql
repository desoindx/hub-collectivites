-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "collectiviteId" TEXT;

-- CreateTable
CREATE TABLE "Collectivite" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code_insee" TEXT,
    "code_postal" TEXT,
    "adresse_info" JSONB,
    "ban_id" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,

    CONSTRAINT "Collectivite_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Collectivite_code_insee_key" ON "Collectivite"("code_insee");

-- CreateIndex
CREATE UNIQUE INDEX "Collectivite_ban_id_key" ON "Collectivite"("ban_id");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_collectiviteId_fkey" FOREIGN KEY ("collectiviteId") REFERENCES "Collectivite"("id") ON DELETE SET NULL ON UPDATE CASCADE;
