import { Request, Response } from "express";
import { container } from 'tsyringe';
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
  async handle(request: Request, response: Response) {
    const {name, price, quantity, expiration_date} = request.body

    const createProductUseCase = container.resolve(CreateProductUseCase)

    const product = await createProductUseCase.execute({
      name, price, quantity, expiration_date
    })

    response.status(200).json(product)
  }
}