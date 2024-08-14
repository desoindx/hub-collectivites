-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "projectUrl" TEXT NOT NULL,
    "newProjectUrl" TEXT NOT NULL,
    "iframeUrl" TEXT NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceContext" (
    "id" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "projectUrl" TEXT NOT NULL,
    "newProjectUrl" TEXT NOT NULL,
    "iframeUrl" TEXT NOT NULL,

    CONSTRAINT "ServiceContext_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ServiceContext" ADD CONSTRAINT "ServiceContext_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
