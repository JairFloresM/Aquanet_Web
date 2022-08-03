/*
  Warnings:

  - You are about to alter the column `latitud` on the `Report` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `resultado_bmwp` on the `Report` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `longitud` on the `Report` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `resultado_hidromorfologico` on the `Report` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `Report` MODIFY `latitud` DOUBLE NOT NULL,
    MODIFY `resultado_bmwp` INTEGER NOT NULL,
    MODIFY `longitud` DOUBLE NOT NULL,
    MODIFY `resultado_hidromorfologico` INTEGER NOT NULL;
