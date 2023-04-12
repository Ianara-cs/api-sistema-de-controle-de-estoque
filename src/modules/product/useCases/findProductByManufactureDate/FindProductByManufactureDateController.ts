import { Request, Response } from "express"
import { container } from "tsyringe"
import { FindProductByManufactureDateUseCase } from "./FindProductByManufactureDateUseCase"

export class FindProductByManufactureDateController {
  async handle(request: Request, response: Response) {
    const {manufacture_date} = request.body
    
    const findProductByManufactureDateUseCase = container.resolve(FindProductByManufactureDateUseCase)

    const products = await findProductByManufactureDateUseCase.execute(manufacture_date)

    return response.status(200).json(products)
  }
}