import { Product } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { ICreateProductDTO } from "../../dtos/ICreateProductDTO";
import { IProductRepository } from "../../repositories/IProductsRepository";

@injectable()
export class CreateProductUseCase {
  constructor(
    @inject(INJECT.PRODUCTS_REPOSITORY)
    private productsRepository : IProductRepository
  ) {}

  async execute({name, price, quantity, expiration_date}: ICreateProductDTO): Promise<Product> {
    const product = await this.productsRepository.create({
      name,
      price, 
      quantity, 
      expiration_date
    })

    return product
  }
}