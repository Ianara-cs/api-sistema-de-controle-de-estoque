import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindSupplierByIdUseCase } from "./FindSupplierByIdUseCase";

export class FindSupplierByIdController {
  async handle(request: Request, response: Response) {
    const {id} = request.params

    const findSupplierByIdUseCase = container.resolve(FindSupplierByIdUseCase)

    const supplier = await findSupplierByIdUseCase.execute(id)

    return response.status(200).json(supplier)
  }
}