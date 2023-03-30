import { Router } from "express";
import { CreateSupplierController } from "../../../../modules/supplier/useCases/createSupplier/CreateSupplierController";
import { FindAllSuppliersController } from "../../../../modules/supplier/useCases/findAllSuppliers/FindAllSuppliersController";
import { FindSupplierByCnpjController } from "../../../../modules/supplier/useCases/findSupplierByCnpj/FindSupplierByCnpjController";
import { FindSupplierByIdController } from "../../../../modules/supplier/useCases/findSupplierById/FindSupplierByIdController";

export const suppliersRoutes = Router()

const createSupplierController = new CreateSupplierController()
const findSupplierByCnpjController = new FindSupplierByCnpjController()
const findAllSuppliersController = new FindAllSuppliersController()
const findSupplierByIdController = new FindSupplierByIdController()

suppliersRoutes.post("/", createSupplierController.handle)
suppliersRoutes.get("/cnpj", findSupplierByCnpjController.handle)
suppliersRoutes.get("/", findAllSuppliersController.handle)
suppliersRoutes.get("/:id", findSupplierByIdController.handle)