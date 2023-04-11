import { inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { InventoryItem } from "../../entities/InventoryItem";
import { IInventoryItemsRepository } from "../../repositories/IInventoryItemsRepository";

@injectable()
export class FindItemsInInventoryByLowStockUseCase {
  constructor(
    @inject(INJECT.INVENTORY_ITEMS_REPOSITORY)
    private inventoryItemsRepository: IInventoryItemsRepository
  ) {}

  async execute(): Promise<InventoryItem[]> {
    const items = await this.inventoryItemsRepository.findItemsInInventoryByLowStock()

    return items
  }
}