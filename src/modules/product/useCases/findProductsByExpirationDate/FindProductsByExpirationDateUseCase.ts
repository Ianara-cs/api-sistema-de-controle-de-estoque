import { inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { Product } from "../../entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
export class FindProductsByExpirationDateUseCase {
  constructor(
    @inject(INJECT.PRODUCTS_REPOSITORY)
    private productsRepository: IProductsRepository
  ) {}

  async execute(expirationDate: Date): Promise<Product[]> {
    const products = await this.productsRepository.findProductByExpirationDate(expirationDate)

    return products
  }
}