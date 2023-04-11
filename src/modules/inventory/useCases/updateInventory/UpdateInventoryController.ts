import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateInventoryUseCase } from "./UpdateInventoryUseCase";

export class UpdateInventoryController {
  async handle(request: Request, response: Response) {
    const {id} = request.params
    const {name} = request.body

    const updateInventoryUseCase = container.resolve(UpdateInventoryUseCase)

    const inventory = await updateInventoryUseCase.execute({id, name})

    return response.status(200).json(inventory)
  }
}