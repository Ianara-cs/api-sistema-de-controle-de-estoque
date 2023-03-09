import { container } from "tsyringe";
import { ProductsRepository } from "../../modules/product/repositories/implementations/ProductsRepository";
import { IProductRepository } from "../../modules/product/repositories/IProductsRepository";

export enum INJECT {
  PRODUCTS_REPOSITORY = 'PRODUCTS_REPO'
}


container.registerSingleton<IProductRepository>(
  INJECT.PRODUCTS_REPOSITORY,
  ProductsRepository
)