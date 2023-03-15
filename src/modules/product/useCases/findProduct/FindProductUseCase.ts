import { inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { NotFoundException } from "../../../../shared/errors/AppErrors";
import { Product } from "../../entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
export class FindProductUseCase {
  constructor(
    @inject(INJECT.PRODUCTS_REPOSITORY)
    private productsRepository: IProductsRepository
  ) {}
  
  async execute(id: string): Promise<Product> {
    const product = await this.productsRepository.findById(id)

    if(!product) {
      throw new NotFoundException("Product not found!")
    }

    return product
  }
}