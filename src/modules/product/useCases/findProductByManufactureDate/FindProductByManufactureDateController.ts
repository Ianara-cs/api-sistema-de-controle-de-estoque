import { Request, Response } from "express"
import { container } from "tsyringe"
import { FindProductByManufactureDateUseCase } from "./FindProductByManufactureDateUseCase"

export class FindProductByManufactureDateController {
  async handle(request: Request, response: Response) {
    const {manufacture_date} = request.query
    const date = manufacture_date as unknown
    
    const findProductByManufactureDateUseCase = container.resolve(FindProductByManufactureDateUseCase)

    const products = await findProductByManufactureDateUseCase.execute(date as Date)

    return response.status(200).json(products)
  }
}