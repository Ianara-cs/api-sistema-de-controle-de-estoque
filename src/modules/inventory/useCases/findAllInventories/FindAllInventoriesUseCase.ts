import { inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { IInventoryResponse } from "../../dtos/IInventoryReponse";
import { IInventoriesRepository } from "../../repositories/IInventoriesRepository";

@injectable()
export class FindAllInventoriesUseCase {
  constructor(
    @inject(INJECT.INVENTORIES_REPOSITORY)
    private inventoriesRepository: IInventoriesRepository
  ) {}

  async execute(): Promise<IInventoryResponse[]> {
    const inventories = await this.inventoriesRepository.findAll()

    return inventories
  }
}