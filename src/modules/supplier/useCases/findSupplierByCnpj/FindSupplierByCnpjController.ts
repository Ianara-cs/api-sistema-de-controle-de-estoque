import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindSupplierByCnpjUseCase } from "./FindSupplierByCnpjUseCase";

export class FindSupplierByCnpjController {
  async handle(request: Request, response: Response) {
    const {cnpj} = request.body
    
    const findSupplierByCnpjUseCase = container.resolve(FindSupplierByCnpjUseCase)
    const supplier = await findSupplierByCnpjUseCase.execute(cnpj)

    return response.status(200).json(supplier)
  }
}