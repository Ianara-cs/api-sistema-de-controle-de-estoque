import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindProductByExpirationDateUseCase } from "./FindProductByExpirationDateUseCase";

export class FindProductByExpirationDateController {
  async handle(request: Request, response: Response) {
    const {expiration_date} = request.query
    const date = expiration_date as unknown
    
    const findProductByExpirationDateUseCase = container.resolve(FindProductByExpirationDateUseCase)

    const products = await findProductByExpirationDateUseCase.execute(date as Date)

    return response.status(200).json(products)
  }
}