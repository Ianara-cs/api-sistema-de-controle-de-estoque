import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindItemsInInventoryByExpirationDateUseCase } from "./FindItemsInInventoryByExpirationDateUseCase";

export class FindItemsInInventoryByExpirationDateController {
  async handle(request: Request, response: Response) {
    const {date} = request.body

    const findItemsInInventoryByExpirationDateUseCase = 
    container.resolve(FindItemsInInventoryByExpirationDateUseCase)

    const items = await findItemsInInventoryByExpirationDateUseCase.execute(date)

    return response.status(200).json(items)
  }
}