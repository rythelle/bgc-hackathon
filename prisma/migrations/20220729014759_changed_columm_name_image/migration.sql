/*
  Warnings:

  - You are about to drop the column `image` on the `cards` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "cards" DROP COLUMN "image",
ADD COLUMN     "image_path" TEXT;
