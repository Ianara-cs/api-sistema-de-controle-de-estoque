import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

export class UpdateProductController {
  async handle(request:Request, response: Response) {
    const {id} = request.params
    const {name, expirationDate, manufactureDate} = request.body

    const updateProductUseCase = container.resolve(UpdateProductUseCase)

    const product = await updateProductUseCase.execute({id, name, expirationDate, manufactureDate})

    return response.status(200).json(product)
  }
}