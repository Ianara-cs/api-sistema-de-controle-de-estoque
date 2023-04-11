import { inject, injectable } from "tsyringe"
import { INJECT } from "../../../../shared/container"
import { NotFoundException } from "../../../../shared/errors/AppErrors"
import { Inventory } from "../../entities/Inventory"
import { IInventoriesRepository } from "../../repositories/IInventoriesRepository"

@injectable()
export class FindInventoryByIdUseCase {
  constructor(
    @inject(INJECT.INVENTORIES_REPOSITORY)
    private inventoriesRepository: IInventoriesRepository
  ) {}
  
  async execute(id: string): Promise<Inventory> {
    const inventory = await this.inventoriesRepository.findById(id)

    if(!inventory) {
      throw new NotFoundException("Inventory not found!")
    }

    return inventory
  }
}