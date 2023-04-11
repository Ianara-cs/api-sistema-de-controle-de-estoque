import { inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { ICreateInventoryDTO } from "../../dtos/ICreateInventoryDTO";
import { IInventoriesRepository } from "../../repositories/IInventoriesRepository";

@injectable()
export class CreateInventoryUseCase {
  constructor(
    @inject(INJECT.INVENTORIES_REPOSITORY)
    private inventoriesRepository: IInventoriesRepository
  ) {}

  async execute({
    name, city, complement, country, neighborhood, number, state, street, zipCode
  }: ICreateInventoryDTO) {
    const inventory = await this.inventoriesRepository.create({
      name, city, complement, country, neighborhood, number, state, street, zipCode
    })

    return inventory
  }
}