/*
  Warnings:

  - You are about to drop the column `productId` on the `InventoryItem` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "InventoryItem" DROP CONSTRAINT "InventoryItem_productId_fkey";

-- AlterTable
ALTER TABLE "InventoryItem" DROP COLUMN "productId",
ADD COLUMN     "supplierOnProductProductId" TEXT,
ADD COLUMN     "supplierOnProductSupplierId" TEXT;

-- AddForeignKey
ALTER TABLE "InventoryItem" ADD CONSTRAINT "InventoryItem_supplierOnProductProductId_supplierOnProduct_fkey" FOREIGN KEY ("supplierOnProductProductId", "supplierOnProductSupplierId") REFERENCES "SupplierOnProduct"("productId", "supplierId") ON DELETE SET NULL ON UPDATE CASCADE;
