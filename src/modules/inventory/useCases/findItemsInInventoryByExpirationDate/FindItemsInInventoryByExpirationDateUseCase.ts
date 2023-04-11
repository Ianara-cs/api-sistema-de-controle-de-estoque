import { inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { InventoryItem } from "../../entities/InventoryItem";
import { IInventoryItemsRepository } from "../../repositories/IInventoryItemsRepository";

@injectable()
export class FindItemsInInventoryByExpirationDateUseCase {
  constructor(
    @inject(INJECT.INVENTORY_ITEMS_REPOSITORY)
    private inventoryItemsRepository: IInventoryItemsRepository
  ) {}

  async execute(date: Date): Promise<InventoryItem[]> {
    const items = await this.inventoryItemsRepository.findItemsInInventoryByExpirationDate(date)

    return items
  }
}