import { prisma } from "../../../../shared/database/prismaClient";
import { ICreateInventoryItemDTO } from "../../dtos/ICreateInventoryItemDTO";
import { IUpdateInventoryItemDTO } from "../../dtos/IUpdateInventoryItemDTO";
import { InventoryItem } from "../../entities/InventoryItem";
import { IInventoryItemsRepository } from "../IInventoryItemsRepository";

export class InventoryItemsRepository implements IInventoryItemsRepository  {
  async create({inventoryId, productId, quantity, supplierId}: ICreateInventoryItemDTO): Promise<InventoryItem> {
    const inventoryItem = await prisma.inventoryItem.create({
      data: {
        quantity,
        inventoryId,
        supplierOnProductProductId: productId,
        supplierOnProductSupplierId: supplierId,
      }, 
    })

    return inventoryItem
  }

  async findItemById(id: string): Promise<InventoryItem | null> {
    const item = prisma.inventoryItem.findUnique({where: {id}})

    return item
  }
  
  async findAllItems(inventoryId: string): Promise<InventoryItem[]> {
    const items = await prisma.inventoryItem.findMany({
      where: {inventoryId}
    })

    return items
  }
  
  async update({id, quantity}: IUpdateInventoryItemDTO): Promise<InventoryItem> {
    const item = await prisma.inventoryItem.update({
      where: {id},
      data: {
        quantity: {increment: quantity}
      }
    })

    return item
  }

  async findItemsInInventoryByExpirationDate(inventoryId: string, date: Date): Promise<InventoryItem[]> {
    const items = await prisma.inventoryItem.findMany({
      where: {
        inventoryId,
        supplierOnProduct: {
          product: {expirationDate: {
            gte: new Date(date),
            lte: new Date(date),
          }}
        }
      }
    })

    return items
  }

  async findItemsInInventoryByLowStock(inventoryId: string): Promise<InventoryItem[]> {
    const items = await prisma.inventoryItem.findMany({
      where: {inventoryId, quantity: {lte: 50}}
    })

    return items
  }

}