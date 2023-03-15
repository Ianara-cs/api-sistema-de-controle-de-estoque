import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindProductByExpirationDateUseCase } from "./FindProductByExpirationDateUseCase";

export class FindProductByExpirationDateController {
  async handle(request: Request, response: Response) {
    const {expiration_date} = request.body
    console.log(expiration_date)
    const findProductByExpirationDateUseCase = container.resolve(FindProductByExpirationDateUseCase)

    const products = await findProductByExpirationDateUseCase.execute(expiration_date)

    return response.status(200).json(products)
  }
}