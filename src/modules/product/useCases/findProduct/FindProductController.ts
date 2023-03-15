import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindProductUseCase } from "./FindProductUseCase";

export class FindProductController {
  async handle(request: Request, response: Response) {
    const {id} = request.params
  
    const findProductUseCase = container.resolve(FindProductUseCase)
  
    const product = await findProductUseCase.execute(id)

    return response.status(200).json(product)
  }
}