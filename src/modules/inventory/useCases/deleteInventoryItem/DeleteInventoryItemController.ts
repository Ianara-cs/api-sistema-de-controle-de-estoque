import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteInventoryItemUseCase } from "./DeleteInventoryItemUseCase";

export class DeleteInventoryItemController {
  async handle(request: Request, response: Response) {
    const {id, itemId} = request.params

    const deleteInventoryItemUseCase = container.resolve(DeleteInventoryItemUseCase)
    const item = await deleteInventoryItemUseCase.execute(id, itemId)

    return response.status(204).json(item)
  }
}