/*
  Warnings:

  - You are about to drop the column `id_uuid` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id_user]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - The required column `id_user` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX `User_id_uuid_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `id_uuid`,
    ADD COLUMN `id_user` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_id_user_key` ON `User`(`id_user`);
