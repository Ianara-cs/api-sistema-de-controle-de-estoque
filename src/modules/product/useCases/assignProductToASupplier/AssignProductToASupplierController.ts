import { Request, Response } from "express";
import { container } from "tsyringe";
import { AssignProductToASupplierUseCase } from "./AssignProductToASupplierUseCase";

export class AssignProductToASupplierController {
  async handle(request: Request, response: Response) {
    const {id} = request.params
    const {supplierId} = request.body

    const assignProductToASupplierUseCase = container.resolve(AssignProductToASupplierUseCase)
    const product = await assignProductToASupplierUseCase.execute(id, supplierId)

    return response.status(201).json(product)
  }
}