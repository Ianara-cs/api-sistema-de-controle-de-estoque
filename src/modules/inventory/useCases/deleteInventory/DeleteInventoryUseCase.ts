import { Inventory } from "@prisma/client";
import { container, inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { IInventoriesRepository } from "../../repositories/IInventoriesRepository";
import { FindInventoryByIdUseCase } from "../findInventoryById/FindInventoryByIdUseCase";

@injectable()
export class DeleteInventoryUseCase {
  constructor(
    @inject(INJECT.INVENTORIES_REPOSITORY)
    private inventoriesRepository: IInventoriesRepository
  ) {}

  async execute(id: string): Promise<Inventory> {
    const findInventoryByIdUseCase = container.resolve(FindInventoryByIdUseCase)
    await findInventoryByIdUseCase.execute(id)

    const inventory = await this.inventoriesRepository.deleteInventory(id)

    return inventory
  }
}