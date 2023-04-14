import { Router } from "express";
import { AssignProductToASupplierController } from "../../../../modules/product/useCases/assignProductToASupplier/AssignProductToASupplierController";
import { CreateProductController } from "../../../../modules/product/useCases/createProduct/CreateProductController";
import { FindProductController } from "../../../../modules/product/useCases/findProduct/FindProductController";
import { FindProductByExpirationDateController } from "../../../../modules/product/useCases/findProductByExpirationDate/FindProductByExpirationDateController";
import { FindProductByManufactureDateController } from "../../../../modules/product/useCases/findProductByManufactureDate/FindProductByManufactureDateController";
import { ListProductsController } from "../../../../modules/product/useCases/listProducts/ListProductsController";
import { UpdateProductController } from "../../../../modules/product/useCases/updateProduct/UpdateProductController";
import {
  productExpirationDateValidator,
  productManufactureDateValidator,
  productRegistrationValidator,
  productSupplierValidator,
  productUpdateValidator
} from "../middlewares/validateRequestsMiddleware/productValidateRequests";

export const productRoutes = Router()

const createProductController = new CreateProductController()
const findProductController = new FindProductController()
const findProductByExpirationDateController = new FindProductByExpirationDateController()
const findProductByManufactureDateController = new FindProductByManufactureDateController()
const listProductsController = new ListProductsController()
const updateProductController = new UpdateProductController()
const assignProductToASupplierController = new AssignProductToASupplierController()


productRoutes.post("/", productRegistrationValidator, createProductController.handle)
productRoutes.get("/", listProductsController.handle)
productRoutes.get("/expirationDate", productExpirationDateValidator, findProductByExpirationDateController.handle)
productRoutes.get("/manufactureDate", productManufactureDateValidator, findProductByManufactureDateController.handle)
productRoutes.get("/:id", findProductController.handle)
productRoutes.post("/:id/addSupplier", productSupplierValidator, assignProductToASupplierController.handle)
productRoutes.put("/:id", productUpdateValidator,  updateProductController.handle)





