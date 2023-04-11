import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateInventoryUseCase } from "./CreateInventoryUseCase";

export class CreateInventoryController {
  async handle(request: Request, response: Response) {
    const {
      name, city, complement, country, neighborhood, number, state, street, zipCode
    } = request.body

    const createInventoryUseCase = container.resolve(CreateInventoryUseCase)

    const inventory = await createInventoryUseCase.execute({
      name, city, complement, country, neighborhood, number, state, street, zipCode
    })

    return response.status(200).json(inventory)
  }
}