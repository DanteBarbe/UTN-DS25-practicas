/*
  Warnings:

  - You are about to drop the column `price` on the `Book` table. All the data in the column will be lost.
  - Added the required column `description` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genre` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Book" DROP COLUMN "price",
ADD COLUMN     "description" VARCHAR(100) NOT NULL,
ADD COLUMN     "genre" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL;
