import { container } from "tsyringe";
import { ProductsRepository } from "../../modules/product/repositories/implementations/ProductsRepository";
import { IProductsRepository } from "../../modules/product/repositories/IProductsRepository";

export enum INJECT {
  PRODUCTS_REPOSITORY = 'PRODUCTS_REPO',
}


container.registerSingleton<IProductsRepository>(
  INJECT.PRODUCTS_REPOSITORY,
  ProductsRepository
)