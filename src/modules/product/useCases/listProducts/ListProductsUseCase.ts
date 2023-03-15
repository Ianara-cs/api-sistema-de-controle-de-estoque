import { inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { Product } from "../../entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
export class ListProductsUseCase {
  constructor(
    @inject(INJECT.PRODUCTS_REPOSITORY)
    private productsRepository: IProductsRepository
  ) {}
  async execute(): Promise<Product[]> {
    const products = await this.productsRepository.listProducts()
    
    return products
  }
}