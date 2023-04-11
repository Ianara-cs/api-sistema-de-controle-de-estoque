import { prisma } from "../../../../shared/database/prismaClient";
import { ICreateInventoryDTO } from "../../dtos/ICreateInventoryDTO";
import { IInventoryResponse } from "../../dtos/IInventoryReponse";
import { IUpdateInventoryDTO } from "../../dtos/IUpdateInventoryDTO";
import { Inventory } from "../../entities/Inventory";
import { IInventoriesRepository } from "../IInventoriesRepository";

export class InventoriesRepository implements IInventoriesRepository {
  async create({
    name, city, complement, country, neighborhood, number, state, street, zipCode 
  }: ICreateInventoryDTO): Promise<IInventoryResponse> {
    const inventory = await prisma.inventory.create({
      data: {
        name, 
      }, 
    })

    await prisma.address.create({
      data: {
        city, complement, country, neighborhood, number, state, street, zipCode, inventoryId: inventory.id
      }
    })

    return inventory
  }

  async findById(id: string): Promise<Inventory | null> {
    const inventory = await prisma.inventory.findUnique({
      where: {id},
      include: {
        address: true, 
        items: true
      }
    })

    return inventory
  }

  async findAll(): Promise<IInventoryResponse[]> {
    const inventories = await prisma.inventory.findMany()

    return inventories
  }

  async update({id, name}: IUpdateInventoryDTO): Promise<IInventoryResponse> {
    const inventory = await prisma.inventory.update({
      where: {id},
      data: {name}
    })

    return inventory
  }
}