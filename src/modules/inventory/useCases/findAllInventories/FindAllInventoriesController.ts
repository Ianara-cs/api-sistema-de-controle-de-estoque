import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllInventoriesUseCase } from "./FindAllInventoriesUseCase";

export class FindAllInventoryController {
  async handle(request: Request, response: Response) {
    const findAllInventoriesUseCase = container.resolve(FindAllInventoriesUseCase)

    const inventories = await findAllInventoriesUseCase.execute()

    return response.status(200).json(inventories)
  }
}