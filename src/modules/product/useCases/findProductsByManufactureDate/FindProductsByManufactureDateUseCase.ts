import { Product } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
export class FindProductsByManufactureDateUseCase {
  constructor(
    @inject(INJECT.PRODUCTS_REPOSITORY)
    private productsRepository: IProductsRepository
  ){}
  
  async execute(manufactureDate: Date): Promise<Product[]> {


    const products = await this.productsRepository.findProductByManufactureDate(manufactureDate)

    return products
  }
}