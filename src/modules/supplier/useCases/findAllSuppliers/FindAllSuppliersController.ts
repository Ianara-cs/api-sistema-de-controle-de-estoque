import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllSuppliersUseCase } from "./FindAllSuppliersUseCase";

export class FindAllSuppliersController {
  async handle(request: Request, response: Response) {
    const findAllSuppliersUseCase = container.resolve(FindAllSuppliersUseCase)

    const suppliers = await findAllSuppliersUseCase.execute()

    return response.status(200). json(suppliers)
  }
}