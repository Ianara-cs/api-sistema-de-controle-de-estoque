import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindItemsInInventoryByLowStockUseCase } from "./FindItemsInInventoryByLowStockUseCase";

export class FindItemsInInventoryByLowStockController {
  async handle(request: Request, response:Response) {
    const {id} = request.params
    const findItemsInInventoryByLowStockUseCase = 
    container.resolve(FindItemsInInventoryByLowStockUseCase)

    const items = await findItemsInInventoryByLowStockUseCase.execute(id)

    return response.status(200).json(items)
  }
}