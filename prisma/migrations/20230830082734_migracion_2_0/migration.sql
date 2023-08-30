/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Producto` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ticketId]` on the table `TicketItem` will be added. If there are existing duplicate values, this will fail.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Producto_name_key" ON "Producto"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TicketItem_ticketId_key" ON "TicketItem"("ticketId");
