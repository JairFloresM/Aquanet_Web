/*
  Warnings:

  - You are about to drop the column `fecha` on the `Report` table. All the data in the column will be lost.
  - Added the required column `dia` to the `Report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hora` to the `Report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mes` to the `Report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minuto` to the `Report` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Report` DROP COLUMN `fecha`,
    ADD COLUMN `dia` INTEGER NOT NULL,
    ADD COLUMN `hora` INTEGER NOT NULL,
    ADD COLUMN `mes` INTEGER NOT NULL,
    ADD COLUMN `minuto` INTEGER NOT NULL;
