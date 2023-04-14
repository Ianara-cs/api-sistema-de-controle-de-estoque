import { ICreateInventoryItemDTO } from "../dtos/ICreateInventoryItemDTO";
import { IUpdateInventoryItemDTO } from "../dtos/IUpdateInventoryItemDTO";
import { InventoryItem } from "../entities/InventoryItem";

export interface IInventoryItemsRepository {
  create(data: ICreateInventoryItemDTO): Promise<InventoryItem>
  findById(id: string): Promise<InventoryItem | null>
  findAll(inventoryId: string): Promise<InventoryItem[]>
  update(data: IUpdateInventoryItemDTO): Promise<InventoryItem>
  findItemsInInventoryByExpirationDate(inventoryId: string, date: Date): Promise<InventoryItem[]>
  findItemsInInventoryByLowStock(inventoryId: string): Promise<InventoryItem[]>
}