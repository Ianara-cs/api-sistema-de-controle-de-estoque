import { Router } from "express";
import { AssignProductToASupplierController } from "../../../../modules/product/useCases/assignProductToASupplier/AssignProductToASupplierController";
import { CreateProductController } from "../../../../modules/product/useCases/createProduct/CreateProductController";
import { DeleteProductController } from "../../../../modules/product/useCases/deleteProduct/DeleteProductController";
import { FindProductController } from "../../../../modules/product/useCases/findProduct/FindProductController";
import { FindProductsByExpirationDateController } from "../../../../modules/product/useCases/findProductsByExpirationDate/FindProductsByExpirationDateController";
import { FindProductsByManufactureDateController } from "../../../../modules/product/useCases/findProductsByManufactureDate/FindProductsByManufactureDateController";
import { ListProductsController } from "../../../../modules/product/useCases/listProducts/ListProductsController";
import { UpdateProductController } from "../../../../modules/product/useCases/updateProduct/UpdateProductController";
import {
    productExpirationDateValidator,
    productManufactureDateValidator,
    productRegistrationValidator,
    productSupplierValidator
} from "../middlewares/validateRequestsMiddleware/productValidateRequests";

export const productRoutes = Router()

const createProductController = new CreateProductController()
const findProductController = new FindProductController()
const findProductByExpirationDateController = new FindProductsByExpirationDateController()
const findProductByManufactureDateController = new FindProductsByManufactureDateController()
const listProductsController = new ListProductsController()
const updateProductController = new UpdateProductController()
const assignProductToASupplierController = new AssignProductToASupplierController()
const deleteProductController = new DeleteProductController()


productRoutes.post("/", productRegistrationValidator, createProductController.handle)
productRoutes.get("/", listProductsController.handle)
productRoutes.get("/expirationDate", productExpirationDateValidator, findProductByExpirationDateController.handle)
productRoutes.get("/manufactureDate", productManufactureDateValidator, findProductByManufactureDateController.handle)
productRoutes.get("/:id", findProductController.handle)
productRoutes.put("/:id", updateProductController.handle)
productRoutes.delete("/:id", deleteProductController.handle)
productRoutes.post("/:id/addSupplier", productSupplierValidator, assignProductToASupplierController.handle)





