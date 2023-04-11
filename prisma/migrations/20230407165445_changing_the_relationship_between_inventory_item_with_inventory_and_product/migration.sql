/*
  Warnings:

  - You are about to drop the `_InventoryItemToProduct` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_InventoryToInventoryItem` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[inventoryId]` on the table `InventoryItem` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[productId]` on the table `InventoryItem` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "_InventoryItemToProduct" DROP CONSTRAINT "_InventoryItemToProduct_A_fkey";

-- DropForeignKey
ALTER TABLE "_InventoryItemToProduct" DROP CONSTRAINT "_InventoryItemToProduct_B_fkey";

-- DropForeignKey
ALTER TABLE "_InventoryToInventoryItem" DROP CONSTRAINT "_InventoryToInventoryItem_A_fkey";

-- DropForeignKey
ALTER TABLE "_InventoryToInventoryItem" DROP CONSTRAINT "_InventoryToInventoryItem_B_fkey";

-- AlterTable
ALTER TABLE "InventoryItem" ADD COLUMN     "inventoryId" TEXT,
ADD COLUMN     "productId" TEXT;

-- DropTable
DROP TABLE "_InventoryItemToProduct";

-- DropTable
DROP TABLE "_InventoryToInventoryItem";

-- CreateIndex
CREATE UNIQUE INDEX "InventoryItem_inventoryId_key" ON "InventoryItem"("inventoryId");

-- CreateIndex
CREATE UNIQUE INDEX "InventoryItem_productId_key" ON "InventoryItem"("productId");

-- AddForeignKey
ALTER TABLE "InventoryItem" ADD CONSTRAINT "InventoryItem_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryItem" ADD CONSTRAINT "InventoryItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
