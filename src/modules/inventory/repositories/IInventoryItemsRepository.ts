import { ICreateInventoryItemDTO } from "../dtos/ICreateInventoryItemDTO";
import { IUpdateInventoryItemDTO } from "../dtos/IUpdateInventoryItemDTO";
import { InventoryItem } from "../entities/InventoryItem";

export interface IInventoryItemsRepository {
  create(data: ICreateInventoryItemDTO): Promise<InventoryItem>
  findItemById(id: string): Promise<InventoryItem | null>
  findAllItems(inventoryId: string): Promise<InventoryItem[]>
  update(data: IUpdateInventoryItemDTO): Promise<InventoryItem>
  findItemsInInventoryByExpirationDate(inventoryId: string, date: Date): Promise<InventoryItem[]>
  findItemsInInventoryByLowStock(inventoryId: string): Promise<InventoryItem[]>
  deleteInventoryItem(id: string): Promise<InventoryItem>
}