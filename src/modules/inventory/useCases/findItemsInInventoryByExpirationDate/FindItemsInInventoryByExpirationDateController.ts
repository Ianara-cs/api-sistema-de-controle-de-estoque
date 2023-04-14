import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindItemsInInventoryByExpirationDateUseCase } from "./FindItemsInInventoryByExpirationDateUseCase";

export class FindItemsInInventoryByExpirationDateController {
  async handle(request: Request, response: Response) {
    const {id} = request.params
    const {expiration_date} = request.query
    const date = expiration_date as unknown

    const findItemsInInventoryByExpirationDateUseCase = 
    container.resolve(FindItemsInInventoryByExpirationDateUseCase)

    const items = await findItemsInInventoryByExpirationDateUseCase.execute(id ,date as Date)

    return response.status(200).json(items)
  }
}