import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindProductsByExpirationDateUseCase } from "./FindProductsByExpirationDateUseCase";

export class FindProductsByExpirationDateController {
  async handle(request: Request, response: Response) {
    const {expiration_date} = request.query
    const date = expiration_date as unknown
    
    const findProductByExpirationDateUseCase = container.resolve(FindProductsByExpirationDateUseCase)

    const products = await findProductByExpirationDateUseCase.execute(date as Date)

    return response.status(200).json(products)
  }
}