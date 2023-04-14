import { container, inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { BadRequestException, NotFoundException } from "../../../../shared/errors/AppErrors";
import { FindProductUseCase } from "../../../product/useCases/findProduct/FindProductUseCase";
import { FindSupplierByIdUseCase } from "../../../supplier/useCases/findSupplierById/FindSupplierByIdUseCase";
import { ICreateInventoryItemDTO } from "../../dtos/ICreateInventoryItemDTO";
import { InventoryItem } from "../../entities/InventoryItem";
import { IInventoryItemsRepository } from "../../repositories/IInventoryItemsRepository";
import { FindInventoryByIdUseCase } from "../findInventoryById/FindInventoryByIdUseCase";

@injectable()
export class AddItemToInventoryUseCase {
  constructor(
    @inject(INJECT.INVENTORY_ITEMS_REPOSITORY)
    private inventoryItemsRepository: IInventoryItemsRepository
  ) {}

  async execute({quantity, inventoryId, productId, supplierId}: ICreateInventoryItemDTO): Promise<InventoryItem> {
    const findProductUseCase = container.resolve(FindProductUseCase)
    const product = await findProductUseCase.execute(productId)

    const findInventoryByIdUseCase = container.resolve(FindInventoryByIdUseCase)
    const inventory =  await findInventoryByIdUseCase.execute(inventoryId)

    const findSupplierByIdUseCase = container.resolve(FindSupplierByIdUseCase)
    await findSupplierByIdUseCase.execute(supplierId)

    const supplierOnProduct = product.supplierOnProduct.map(
      supplier => supplier.supplierId === supplierId
    )

    if(!supplierOnProduct[0]) {
      throw new NotFoundException("Product and Supplier not found!")
    }
    
    const inventoryItem = inventory.items.map(
      item => item.supplierOnProductProductId === productId &&
      item.supplierOnProductSupplierId === supplierId
    )

    if(inventoryItem[0]) {
      throw new BadRequestException("This product is already registered in the inventory!")
    }

    if(quantity <= 0) {
      throw new BadRequestException("Quantity cannot have a value less than 1!")
    }
    
    const item = await this.inventoryItemsRepository.create({
      inventoryId, productId, quantity, supplierId
    })

    return item
  }
}