import { container, inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { NotFoundException } from "../../../../shared/errors/AppErrors";
import { InventoryItem } from "../../entities/InventoryItem";
import { IInventoryItemsRepository } from "../../repositories/IInventoryItemsRepository";
import { FindInventoryByIdUseCase } from "../findInventoryById/FindInventoryByIdUseCase";

@injectable()
export class FindItemInInventoryUseCase {
  constructor(
    @inject(INJECT.INVENTORY_ITEMS_REPOSITORY)
    private inventoryItemsRepository: IInventoryItemsRepository
  ) {}

  async execute(inventoryId: string, itemId: string): Promise<InventoryItem> {
    const findInventoryByIdUseCase = container.resolve(FindInventoryByIdUseCase)
    await findInventoryByIdUseCase.execute(inventoryId)

    const item = await this.inventoryItemsRepository.findItemById(itemId)

    if(!item) {
      throw new NotFoundException("Item not found!")
    }

    return item
  }
}