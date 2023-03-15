import { Product } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { ICreateProductDTO } from "../../dtos/ICreateProductDTO";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
export class CreateProductUseCase {
  constructor(
    @inject(INJECT.PRODUCTS_REPOSITORY)
    private productsRepository : IProductsRepository
  ) {}

  async execute({name, expirationDate, manufactureDate}: ICreateProductDTO): Promise<Product> {
    const product = await this.productsRepository.create({
      name,  
      expirationDate,
      manufactureDate
    })

    return product
  }
}