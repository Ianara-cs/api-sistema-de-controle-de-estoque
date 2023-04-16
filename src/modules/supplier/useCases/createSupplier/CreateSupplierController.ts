import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSupplierUseCase } from "./CreateSupplierUseCase";

export class CreateSupplierController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {name, email, cnpj, phone, city, 
      complement, country, neighborhood, number, state, street, zipCode
    } = request.body
    
    const createSupplierUseCase = container.resolve(CreateSupplierUseCase)

    const supplier = await createSupplierUseCase.execute({
      name, email, cnpj, phone, city, 
      complement, country, neighborhood, number, state, street, zipCode
    })

    return response.status(201).json(supplier)
  }
}