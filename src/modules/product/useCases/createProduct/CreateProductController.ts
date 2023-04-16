import { Request, Response } from "express";
import { container } from 'tsyringe';
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
  async handle(request: Request, response: Response) {
    const {name, description, brand, expirationDate, manufactureDate} = request.body

    const createProductUseCase = container.resolve(CreateProductUseCase)

    const product = await createProductUseCase.execute({
      name, description, brand, expirationDate, manufactureDate
    })

    response.status(201).json(product)
  }
}