import { container } from "tsyringe";
import { ProductsRepository } from "../../modules/product/repositories/implementations/ProductsRepository";
import { IProductsRepository } from "../../modules/product/repositories/IProductsRepository";
import { SuppliersRepository } from "../../modules/supplier/repositories/implementations/SuppliersRepository";
import { ISuppliersRepository } from "../../modules/supplier/repositories/ISuppliersRepository";

export enum INJECT {
  PRODUCTS_REPOSITORY = 'PRODUCTS_REPO',
  SUPPLIERS_REPOSITORY = 'SUPPLIERS_REPO'
}


container.registerSingleton<IProductsRepository>(
  INJECT.PRODUCTS_REPOSITORY,
  ProductsRepository
)

container.registerSingleton<ISuppliersRepository>(
  INJECT.SUPPLIERS_REPOSITORY,
  SuppliersRepository
)