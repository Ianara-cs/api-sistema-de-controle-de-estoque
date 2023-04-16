-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_inventoryId_fkey";

-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_supplierId_fkey";

-- DropForeignKey
ALTER TABLE "InventoryItem" DROP CONSTRAINT "InventoryItem_inventoryId_fkey";

-- DropForeignKey
ALTER TABLE "InventoryItem" DROP CONSTRAINT "InventoryItem_supplierOnProductProductId_supplierOnProduct_fkey";

-- DropForeignKey
ALTER TABLE "SupplierOnProduct" DROP CONSTRAINT "SupplierOnProduct_productId_fkey";

-- DropForeignKey
ALTER TABLE "SupplierOnProduct" DROP CONSTRAINT "SupplierOnProduct_supplierId_fkey";

-- AddForeignKey
ALTER TABLE "SupplierOnProduct" ADD CONSTRAINT "SupplierOnProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupplierOnProduct" ADD CONSTRAINT "SupplierOnProduct_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Supplier"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Supplier"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryItem" ADD CONSTRAINT "InventoryItem_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryItem" ADD CONSTRAINT "InventoryItem_supplierOnProductProductId_supplierOnProduct_fkey" FOREIGN KEY ("supplierOnProductProductId", "supplierOnProductSupplierId") REFERENCES "SupplierOnProduct"("productId", "supplierId") ON DELETE CASCADE ON UPDATE CASCADE;
