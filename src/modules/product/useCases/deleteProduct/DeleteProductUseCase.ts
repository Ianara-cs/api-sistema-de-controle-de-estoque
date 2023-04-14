import { Product } from "@prisma/client";
import { container, inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { IProductsRepository } from "../../repositories/IProductsRepository";
import { FindProductUseCase } from "../findProduct/FindProductUseCase";

@injectable()
export class DeleteProductUseCase {
  constructor(
    @inject(INJECT.PRODUCTS_REPOSITORY)
    private productsRepository : IProductsRepository
  ) {}

  async execute(id: string): Promise<Product> {
    const findProductUseCase = container.resolve(FindProductUseCase)
    await findProductUseCase.execute(id)

    const product = await this.productsRepository.deleteProduct(id)

    return product
  }
}