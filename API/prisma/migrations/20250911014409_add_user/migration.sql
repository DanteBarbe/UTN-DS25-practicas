-- CreateEnum
CREATE TYPE "public"."Rol" AS ENUM ('ADMIN', 'USER');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "public"."Rol" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
