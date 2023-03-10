import { Router } from "express";
import { CreateProductController } from "../../../../modules/product/useCases/createProduct/CreateProductController";

export const productRoutes = Router()

const createProductController = new CreateProductController()


productRoutes.post("/", createProductController.handle)



