import { Router } from "express";
import { AddItemToInventoryController } from "../../../../modules/inventory/useCases/addItemToInventory/AddItemToInventoryController";
import { CreateInventoryController } from "../../../../modules/inventory/useCases/createInventory/CreateInventoryController";
import { DeleteInventoryController } from "../../../../modules/inventory/useCases/deleteInventory/DeleteInventoryController";
import { DeleteInventoryItemController } from "../../../../modules/inventory/useCases/deleteInventoryItem/DeleteInventoryItemController";
import { FindAllInventoryController } from "../../../../modules/inventory/useCases/findAllInventories/FindAllInventoriesController";
import { FindInventoryByIdController } from "../../../../modules/inventory/useCases/findInventoryById/FindInventoryByIdController";
import { FindItemInInventoryController } from "../../../../modules/inventory/useCases/findItemInInventory/FindItemInInventoryController";
import { FindItemsInInventoryByExpirationDateController } from "../../../../modules/inventory/useCases/findItemsInInventoryByExpirationDate/FindItemsInInventoryByExpirationDateController";
import { FindItemsInInventoryByLowStockController } from "../../../../modules/inventory/useCases/findItemsInInventoryByLowStock/FindItemsInInventoryByLowStockController";
import { ListItemsInInventoryController } from "../../../../modules/inventory/useCases/listItemsInInventory/ListItemsInInventoryController";
import { UpdateInventoryController } from "../../../../modules/inventory/useCases/updateInventory/UpdateInventoryController";
import { UpdateItemQuantityController } from "../../../../modules/inventory/useCases/updateItemQuantity/UpdateItemQuantityController";
import { inventoryRegistrationValidator, inventoryUpdateValidator, itemExpirationDateValidator, itemRegistrationValidator, quantityValidator } from "../middlewares/validateRequestsMiddleware/inventoryValidateRequests";

export const inventoriesRoutes = Router()

const createInventoryController = new CreateInventoryController()
const findInventoryByIdController = new FindInventoryByIdController()
const findAllInventoryController = new FindAllInventoryController()
const updateInventoryController = new UpdateInventoryController()
const addItemToInventoryController = new AddItemToInventoryController()
const findItemInInventoryController = new FindItemInInventoryController()
const findItemsInInventoryByExpirationDateController = 
new FindItemsInInventoryByExpirationDateController()
const findItemsInInventoryByLowStockController = 
new FindItemsInInventoryByLowStockController()
const updateItemQuantityController = new UpdateItemQuantityController()
const listItemsInInventoryController = new ListItemsInInventoryController()
const deleteInventoryController = new DeleteInventoryController()
const deleteInventoryItemController = new DeleteInventoryItemController()

inventoriesRoutes.get("/", findAllInventoryController.handle)
inventoriesRoutes.post("/", inventoryRegistrationValidator, createInventoryController.handle)
inventoriesRoutes.get("/:id", findInventoryByIdController.handle)
inventoriesRoutes.delete("/:id", deleteInventoryController.handle)
inventoriesRoutes.put("/:id", inventoryUpdateValidator, updateInventoryController.handle)
inventoriesRoutes.get("/:id/lowStock", findItemsInInventoryByLowStockController.handle)
inventoriesRoutes.post("/:id/addItem", itemRegistrationValidator, addItemToInventoryController.handle)
inventoriesRoutes.get("/:id/items", listItemsInInventoryController.handle)
inventoriesRoutes.get("/:id/items/expirationDate", itemExpirationDateValidator, findItemsInInventoryByExpirationDateController.handle)
inventoriesRoutes.get("/:id/:itemId", findItemInInventoryController.handle)
inventoriesRoutes.delete("/:id/:itemId", deleteInventoryItemController.handle)
inventoriesRoutes.patch("/:itemId", quantityValidator, updateItemQuantityController.handle)