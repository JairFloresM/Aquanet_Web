/*
  Warnings:

  - You are about to drop the column `descarga_electrica` on the `Report` table. All the data in the column will be lost.
  - You are about to drop the column `subsitema_rio` on the `Report` table. All the data in the column will be lost.
  - You are about to drop the column `veg_dominante` on the `Report` table. All the data in the column will be lost.
  - You are about to drop the column `veg_riparia` on the `Report` table. All the data in the column will be lost.
  - Added the required column `descarga_directa` to the `Report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pais` to the `Report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subsistema_rio` to the `Report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vegetacion_dominante` to the `Report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vegetacion_riparia` to the `Report` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Report` DROP COLUMN `descarga_electrica`,
    DROP COLUMN `subsitema_rio`,
    DROP COLUMN `veg_dominante`,
    DROP COLUMN `veg_riparia`,
    ADD COLUMN `descarga_directa` VARCHAR(191) NOT NULL,
    ADD COLUMN `pais` VARCHAR(191) NOT NULL,
    ADD COLUMN `subsistema_rio` VARCHAR(191) NOT NULL,
    ADD COLUMN `vegetacion_dominante` VARCHAR(191) NOT NULL,
    ADD COLUMN `vegetacion_riparia` VARCHAR(191) NOT NULL;
