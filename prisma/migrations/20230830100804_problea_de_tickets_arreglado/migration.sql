/*
  Warnings:

  - You are about to drop the `TicketItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TicketItem" DROP CONSTRAINT "TicketItem_productId_fkey";

-- DropForeignKey
ALTER TABLE "TicketItem" DROP CONSTRAINT "TicketItem_ticketId_fkey";

-- DropTable
DROP TABLE "TicketItem";

-- CreateTable
CREATE TABLE "_ProductoToTicket" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductoToTicket_AB_unique" ON "_ProductoToTicket"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductoToTicket_B_index" ON "_ProductoToTicket"("B");

-- AddForeignKey
ALTER TABLE "_ProductoToTicket" ADD CONSTRAINT "_ProductoToTicket_A_fkey" FOREIGN KEY ("A") REFERENCES "Producto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductoToTicket" ADD CONSTRAINT "_ProductoToTicket_B_fkey" FOREIGN KEY ("B") REFERENCES "Ticket"("id") ON DELETE CASCADE ON UPDATE CASCADE;
