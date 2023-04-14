import { container, inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { BadRequestException } from "../../../../shared/errors/AppErrors";
import { FindSupplierByIdUseCase } from "../../../supplier/useCases/findSupplierById/FindSupplierByIdUseCase";
import { IProductAndSupplierResponseDTO } from "../../dtos/IProductAndSupplierResponseDTO";
import { IProductsRepository } from "../../repositories/IProductsRepository";
import { FindProductUseCase } from "../findProduct/FindProductUseCase";

@injectable()
export class AssignProductToASupplierUseCase {
  constructor(
    @inject(INJECT.PRODUCTS_REPOSITORY)
    private productsRepository : IProductsRepository
  ) {}

  async execute(productId: string, supplierId: string): Promise<IProductAndSupplierResponseDTO> {
    const findProductById = container.resolve(FindProductUseCase)
    const product = await findProductById.execute(productId)

    const findSupplierByIdUseCase = container.resolve(FindSupplierByIdUseCase)
    await findSupplierByIdUseCase.execute(supplierId)
    
    const supplier = product.supplierOnProduct.map(supplier => supplier.supplierId === supplierId)
    if(supplier[0]) {
      throw new BadRequestException("Product already assigned to the supplier!")
    }
    
    const productAndSupplier = await this.productsRepository.addProductToASupplier(productId, supplierId)

    return productAndSupplier
  }
}