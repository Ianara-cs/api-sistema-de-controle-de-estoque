import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListItemsInInventoryUseCase } from "./ListItemsInInventoryUseCase";

export class ListItemsInInventoryController {
  async handle(request: Request, response: Response) {
    const {id: inventoryId} = request.params

    const listItemsInInventoryUseCase = container.resolve(ListItemsInInventoryUseCase)

    const items = await listItemsInInventoryUseCase.execute(inventoryId)

    return response.status(200).json(items)
  }
}