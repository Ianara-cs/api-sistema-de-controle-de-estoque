import { container, inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { BadRequestException } from "../../../../shared/errors/AppErrors";
import { FindProductUseCase } from "../../../product/useCases/findProduct/FindProductUseCase";
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

  async execute({quantity, inventoryId, productId}: ICreateInventoryItemDTO): Promise<InventoryItem> {
    if(!inventoryId || !productId) {
      throw new BadRequestException("InventoryId and productId cannot be null")
    }

    const findProductUseCase = container.resolve(FindProductUseCase)
    await findProductUseCase.execute(productId)

    const findInventoryByIdUseCase = container.resolve(FindInventoryByIdUseCase)
    const inventory =  await findInventoryByIdUseCase.execute(inventoryId)
    
    const inventoryItem = inventory.items.map(item => item.productId === productId)
    if(inventoryItem[0]) {
      throw new BadRequestException("This product is already registered in the inventory")
    }

    if(quantity <= 0) {
      throw new BadRequestException("Quantity cannot have a value less than 1!")
    }
    
    const item = await this.inventoryItemsRepository.create({
      inventoryId, productId, quantity
    })

    return item
  }
}