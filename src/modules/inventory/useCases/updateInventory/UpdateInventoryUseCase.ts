import { inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { NotFoundException } from "../../../../shared/errors/AppErrors";
import { IInventoryResponse } from "../../dtos/IInventoryReponse";
import { IUpdateInventoryDTO } from "../../dtos/IUpdateInventoryDTO";
import { IInventoriesRepository } from "../../repositories/IInventoriesRepository";

@injectable()
export class UpdateInventoryUseCase {
  constructor(
    @inject(INJECT.INVENTORIES_REPOSITORY)
    private inventoriesRepository: IInventoriesRepository
  ) {}

  async execute({id, name}: IUpdateInventoryDTO): Promise<IInventoryResponse> {
    const inventory = await this.inventoriesRepository.findById(id)

    if(!inventory) {
      throw new NotFoundException("Inventory not found!")
    }
 
    if(!name) {
      name = inventory.name
    }

    const updateInventory = await this.inventoriesRepository.update({id, name})

    return updateInventory
  }
}