import { container } from "tsyringe";
import { IInventoriesRepository } from "../../modules/inventory/repositories/IInventoriesRepository";
import { IInventoryItemsRepository } from "../../modules/inventory/repositories/IInventoryItemsRepository";
import { InventoriesRepository } from "../../modules/inventory/repositories/implementations/InventoriesRepository";
import { InventoryItemsRepository } from "../../modules/inventory/repositories/implementations/InventoryItemsRepository";
import { ProductsRepository } from "../../modules/product/repositories/implementations/ProductsRepository";
import { IProductsRepository } from "../../modules/product/repositories/IProductsRepository";
import { SuppliersRepository } from "../../modules/supplier/repositories/implementations/SuppliersRepository";
import { ISuppliersRepository } from "../../modules/supplier/repositories/ISuppliersRepository";

export enum INJECT {
  PRODUCTS_REPOSITORY = 'PRODUCTS_REPO',
  SUPPLIERS_REPOSITORY = 'SUPPLIERS_REPO',
  INVENTORIES_REPOSITORY = 'INVENTORIES_REPO',
  INVENTORY_ITEMS_REPOSITORY = 'INVENTORY_ITEMS_REPO'
}


container.registerSingleton<IProductsRepository>(
  INJECT.PRODUCTS_REPOSITORY,
  ProductsRepository
)

container.registerSingleton<ISuppliersRepository>(
  INJECT.SUPPLIERS_REPOSITORY,
  SuppliersRepository
)

container.registerSingleton<IInventoriesRepository>(
  INJECT.INVENTORIES_REPOSITORY,
  InventoriesRepository
)

container.registerSingleton<IInventoryItemsRepository>(
  INJECT.INVENTORY_ITEMS_REPOSITORY,
  InventoryItemsRepository
)