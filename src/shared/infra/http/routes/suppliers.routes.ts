import { Router } from "express";
import { AddAddressToSupplierController } from "../../../../modules/supplier/useCases/addAddressToSupplier/AddAddressToSupplierController";
import { CreateSupplierController } from "../../../../modules/supplier/useCases/createSupplier/CreateSupplierController";
import { DeleteSupplierController } from "../../../../modules/supplier/useCases/deleteSupplier/DeleteSupplierController";
import { FindAllSuppliersController } from "../../../../modules/supplier/useCases/findAllSuppliers/FindAllSuppliersController";
import { FindSupplierByCnpjController } from "../../../../modules/supplier/useCases/findSupplierByCnpj/FindSupplierByCnpjController";
import { FindSupplierByIdController } from "../../../../modules/supplier/useCases/findSupplierById/FindSupplierByIdController";
import { supplierAddressValidator, supplierRegistrationValidator } from "../middlewares/validateRequestsMiddleware/supplierValidatorRequest";

export const suppliersRoutes = Router()

const createSupplierController = new CreateSupplierController()
const findSupplierByCnpjController = new FindSupplierByCnpjController()
const findAllSuppliersController = new FindAllSuppliersController()
const findSupplierByIdController = new FindSupplierByIdController()
const deleteSupplierController = new DeleteSupplierController()
const addAddressToSupplierController = new AddAddressToSupplierController()

suppliersRoutes.post("/", supplierRegistrationValidator, createSupplierController.handle)
suppliersRoutes.get("/cnpj", findSupplierByCnpjController.handle)
suppliersRoutes.get("/", findAllSuppliersController.handle)
suppliersRoutes.get("/:id", findSupplierByIdController.handle)
suppliersRoutes.delete("/:id", deleteSupplierController.handle)
suppliersRoutes.put("/:id", supplierAddressValidator, addAddressToSupplierController.handle)