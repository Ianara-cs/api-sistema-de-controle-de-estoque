import { Router } from "express";
import { AddItemToInventoryController } from "../../../../modules/inventory/useCases/addItemToInventory/AddItemToInventoryController";
import { CreateInventoryController } from "../../../../modules/inventory/useCases/createInventory/CreateInventoryController";
import { FindAllInventoryController } from "../../../../modules/inventory/useCases/findAllInventories/FindAllInventoriesController";
import { FindInventoryByIdController } from "../../../../modules/inventory/useCases/findInventoryById/FindInventoryByIdController";
import { FindItemInInventoryController } from "../../../../modules/inventory/useCases/findItemInInventory/FindItemInInventoryController";
import { FindItemsInInventoryByExpirationDateController } from "../../../../modules/inventory/useCases/findItemsInInventoryByExpirationDate/FindItemsInInventoryByExpirationDateController";
import { FindItemsInInventoryByLowStockController } from "../../../../modules/inventory/useCases/findItemsInInventoryByLowStock/FindItemsInInventoryByLowStockController";
import { ListItemsInInventoryController } from "../../../../modules/inventory/useCases/listItemsInInventory/ListItemsInInventoryController";
import { UpdateInventoryController } from "../../../../modules/inventory/useCases/updateInventory/UpdateInventoryController";
import { UpdateItemQuantityController } from "../../../../modules/inventory/useCases/updateItemQuantity/UpdateItemQuantityController";

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

inventoriesRoutes.get("/", findAllInventoryController.handle)
inventoriesRoutes.post("/", createInventoryController.handle)
inventoriesRoutes.get("/expirationDate", findItemsInInventoryByExpirationDateController.handle)
inventoriesRoutes.get("/lowStock", findItemsInInventoryByLowStockController.handle)
inventoriesRoutes.get("/:id", findInventoryByIdController.handle)
inventoriesRoutes.put("/:id", updateInventoryController.handle)
inventoriesRoutes.post("/:id/addItem", addItemToInventoryController.handle)
inventoriesRoutes.get("/:id/items", listItemsInInventoryController.handle)
inventoriesRoutes.get("/:id/item", findItemInInventoryController.handle)
inventoriesRoutes.patch("/:itemId", updateItemQuantityController.handle)