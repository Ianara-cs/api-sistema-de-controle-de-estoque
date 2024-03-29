import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindInventoryByIdUseCase } from "./FindInventoryByIdUseCase";

export class FindInventoryByIdController {
  async handle(request: Request, response: Response) {
    const {id} = request.params

    const findInventoryByIdUseCase = container.resolve(FindInventoryByIdUseCase)

    const inventory = await findInventoryByIdUseCase.execute(id)

    return response.status(200).json(inventory)
  }
}