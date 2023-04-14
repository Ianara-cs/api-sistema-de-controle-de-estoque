import { Request, Response } from "express";
import { container } from "tsyringe";
import { AddAddressToSupplierUseCase } from "./AddAddressToSupplierUseCase";

export class AddAddressToSupplierController {
  async handle(request: Request, response: Response) {
    const {id} = request.params
    const {
      city, complement, country, neighborhood, number, state, street, zipCode
    } = request.body 

    const addAddressToSupplierUseCase = container.resolve(AddAddressToSupplierUseCase)
    const supplier = await addAddressToSupplierUseCase.execute({
      id, city, complement, country, neighborhood, number, state, street, zipCode
    })

    return response.status(200).json(supplier)
  }
}