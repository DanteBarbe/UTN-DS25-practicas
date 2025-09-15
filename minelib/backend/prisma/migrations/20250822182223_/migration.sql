/*
  Warnings:

  - You are about to drop the column `authorId` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `genreId` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the `Author` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Genre` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `author` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genre` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Book" DROP CONSTRAINT "Book_authorId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Book" DROP CONSTRAINT "Book_genreId_fkey";

-- AlterTable
ALTER TABLE "public"."Book" DROP COLUMN "authorId",
DROP COLUMN "genreId",
ADD COLUMN     "author" TEXT NOT NULL,
ADD COLUMN     "genre" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."Author";

-- DropTable
DROP TABLE "public"."Genre";
