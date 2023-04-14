import { container, inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { InventoryItem } from "../../entities/InventoryItem";
import { IInventoryItemsRepository } from "../../repositories/IInventoryItemsRepository";
import { FindInventoryByIdUseCase } from "../findInventoryById/FindInventoryByIdUseCase";

@injectable()
export class ListItemsInInventoryUseCase {
  constructor(
    @inject(INJECT.INVENTORY_ITEMS_REPOSITORY)
    private inventoryItemsRepository: IInventoryItemsRepository
  ) {}

  async execute(inventoryId: string): Promise<InventoryItem[]> {
    const findInventoryById = container.resolve(FindInventoryByIdUseCase)
    await findInventoryById.execute(inventoryId)

    const items = await this.inventoryItemsRepository.findAllItems(inventoryId)
    
    return items
  }
}