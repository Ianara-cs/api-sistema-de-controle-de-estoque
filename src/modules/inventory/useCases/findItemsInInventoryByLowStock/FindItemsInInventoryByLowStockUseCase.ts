import { container, inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { InventoryItem } from "../../entities/InventoryItem";
import { IInventoryItemsRepository } from "../../repositories/IInventoryItemsRepository";
import { FindInventoryByIdUseCase } from "../findInventoryById/FindInventoryByIdUseCase";

@injectable()
export class FindItemsInInventoryByLowStockUseCase {
  constructor(
    @inject(INJECT.INVENTORY_ITEMS_REPOSITORY)
    private inventoryItemsRepository: IInventoryItemsRepository
  ) {}

  async execute(inventoryId: string): Promise<InventoryItem[]> {
    const findInventoryByIdUseCase = container.resolve(FindInventoryByIdUseCase)
    await findInventoryByIdUseCase.execute(inventoryId)
    
    const items = await this.inventoryItemsRepository
    .findItemsInInventoryByLowStock(inventoryId)

    return items
  }
}