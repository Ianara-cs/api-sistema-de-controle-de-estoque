import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateItemQuantityUseCase } from "./UpdateItemQuantityUseCase";

export class UpdateItemQuantityController {
  async handle(request: Request, response:Response) {
    const {itemId: id} = request.params
    const {quantity} = request.body

    const updateItemQuantityUseCase = container.resolve(UpdateItemQuantityUseCase)

    const item = await updateItemQuantityUseCase.execute({id, quantity})

    return response.status(200).json(item)
  }
}