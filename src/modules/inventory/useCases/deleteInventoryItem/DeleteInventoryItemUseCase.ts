import { container, inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { InventoryItem } from "../../entities/InventoryItem";
import { IInventoryItemsRepository } from "../../repositories/IInventoryItemsRepository";
import { FindItemInInventoryUseCase } from "../findItemInInventory/FindItemInInventoryUseCase";


@injectable()
export class DeleteInventoryItemUseCase {
  constructor(
    @inject(INJECT.INVENTORY_ITEMS_REPOSITORY)
    private inventoryItemsRepository: IInventoryItemsRepository
  ) {}

  async execute(id: string, itemId: string): Promise<InventoryItem> {
    const findItemInInventoryUseCase = container.resolve(FindItemInInventoryUseCase)
    await findItemInInventoryUseCase.execute(id, itemId)

    const item = this.inventoryItemsRepository.deleteInventoryItem(itemId)
    
    return item
  }
}