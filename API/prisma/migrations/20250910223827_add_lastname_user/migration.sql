/*
  Warnings:

  - Added the required column `lastname` to the `Author` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Author" ADD COLUMN     "lastname" TEXT NOT NULL;
