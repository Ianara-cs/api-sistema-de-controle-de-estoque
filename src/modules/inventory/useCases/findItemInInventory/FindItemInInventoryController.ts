import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindItemInInventoryUseCase } from "./FindItemInInventoryUseCase";

export class FindItemInInventoryController {
  async handle(request: Request, response: Response) {
    const {id} = request.body

    const findItemInInventoryUseCase = container.resolve(FindItemInInventoryUseCase)
    const item = await findItemInInventoryUseCase.execute(id)

    return response.status(200).json(item)
  }
}