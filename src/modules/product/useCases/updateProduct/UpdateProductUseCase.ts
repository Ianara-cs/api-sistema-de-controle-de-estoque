import { inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { NotFoundException } from "../../../../shared/errors/AppErrors";
import { IUpdateProductDTO } from "../../dtos/IUpdateProductDTO";
import { Product } from "../../entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
export class UpdateProductUseCase {
  constructor(
    @inject(INJECT.PRODUCTS_REPOSITORY)
    private productsRepository: IProductsRepository
  ) {}

  async execute({id, name, expirationDate, manufactureDate}: IUpdateProductDTO): Promise<Product> {
    const product = await this.productsRepository.findById(id)

    if(!product) {
      throw new NotFoundException("Product not found!")
    }

    if(!name) {
      name = product.name
    } 

    if(!expirationDate) {
      expirationDate = product.expirationDate
    }

    if(!manufactureDate) {
      manufactureDate = product.manufactureDate
    }

    const updateProduct = await this.productsRepository.updateProduct({
      id, name, expirationDate, manufactureDate
    })

    return updateProduct
  }
}