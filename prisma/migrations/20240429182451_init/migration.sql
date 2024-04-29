/*
  Warnings:

  - Added the required column `tags` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `topic` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "tags" TEXT NOT NULL,
ADD COLUMN     "topic" TEXT NOT NULL;
