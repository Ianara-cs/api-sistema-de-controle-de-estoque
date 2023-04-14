import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteInventoryUseCase } from "./DeleteInventoryUseCase";

export class DeleteInventoryController {
  async handle(request: Request, response: Response) {
    const {id} =request.params

    const deleteInventoryUseCase = container.resolve(DeleteInventoryUseCase)
    const inventory = await deleteInventoryUseCase.execute(id)

    return response.status(204).json(inventory)
  }
}