import { inject } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { NotFoundException } from "../../../../shared/errors/AppErrors";
import { InventoryItem } from "../../entities/InventoryItem";
import { IInventoryItemsRepository } from "../../repositories/IInventoryItemsRepository";

export class FindItemInInventoryUseCase {
  constructor(
    @inject(INJECT.INVENTORY_ITEMS_REPOSITORY)
    private inventoryItemsRepository: IInventoryItemsRepository
  ) {}

  async execute(id: string): Promise<InventoryItem> {
    const item = await this.inventoryItemsRepository.findById(id)

    if(!item) {
      throw new NotFoundException("Item not found!")
    }

    return item
  }
}