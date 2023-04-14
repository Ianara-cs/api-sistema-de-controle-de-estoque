import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteSupplierUseCase } from "./DeleteSupplierUseCase";

export class DeleteSupplierController {
  async handle(request: Request, response: Response) {
    const {id} = request.params

    const deleteSupplierUseCase = container.resolve(DeleteSupplierUseCase)
    const supplier = await deleteSupplierUseCase.execute(id)

    return response.status(204).json(supplier)
  }
}