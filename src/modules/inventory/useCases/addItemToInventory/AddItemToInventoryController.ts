import { Request, Response } from "express";
import { container } from "tsyringe";
import { AddItemToInventoryUseCase } from "./AddItemToInventoryUseCase";

export class AddItemToInventoryController {
  async handle(request: Request, response: Response) {
    const {id: inventoryId} = request.params
    const {productId, quantity, supplierId} = request.body

    const addItemToInventoryUseCase = container.resolve(AddItemToInventoryUseCase)

    const item = await addItemToInventoryUseCase.execute({inventoryId, productId, quantity, supplierId})

    return response.status(200).json(item)
  }
}