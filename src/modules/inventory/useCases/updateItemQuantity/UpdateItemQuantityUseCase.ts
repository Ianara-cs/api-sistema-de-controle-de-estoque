import { inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { BadRequestException, NotFoundException } from "../../../../shared/errors/AppErrors";
import { IUpdateInventoryItemDTO } from "../../dtos/IUpdateInventoryItemDTO";
import { InventoryItem } from "../../entities/InventoryItem";
import { IInventoryItemsRepository } from "../../repositories/IInventoryItemsRepository";

@injectable()
export class UpdateItemQuantityUseCase {
  constructor(
    @inject(INJECT.INVENTORY_ITEMS_REPOSITORY)
    private inventoryItemsRepository: IInventoryItemsRepository
  ) {}

  async execute({id, quantity}: IUpdateInventoryItemDTO): Promise<InventoryItem> {
    const item = await this.inventoryItemsRepository.findItemById(id)

    if(!item) {
      throw new NotFoundException("Item not found!")
    }

    if(!quantity) {
      throw new BadRequestException("quantity cannot be null")
    }

    const updatedItem = await this.inventoryItemsRepository.update({id, quantity})

    return updatedItem
  }
}