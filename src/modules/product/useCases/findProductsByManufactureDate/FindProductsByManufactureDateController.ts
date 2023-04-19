import { Request, Response } from "express"
import { container } from "tsyringe"
import { FindProductsByManufactureDateUseCase } from "./FindProductsByManufactureDateUseCase"

export class FindProductsByManufactureDateController {
  async handle(request: Request, response: Response) {
    const {manufacture_date} = request.query
    const date = manufacture_date as unknown
    
    const findProductByManufactureDateUseCase = container.resolve(FindProductsByManufactureDateUseCase)

    const products = await findProductByManufactureDateUseCase.execute(date as Date)

    return response.status(200).json(products)
  }
}