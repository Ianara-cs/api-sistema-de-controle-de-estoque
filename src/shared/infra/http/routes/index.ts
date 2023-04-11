import { Router } from "express";
import { inventoriesRoutes } from "./inventories.routes";
import { productRoutes } from "./products.routes";
import { suppliersRoutes } from "./suppliers.routes";

export const router = Router()

router.use("/products", productRoutes)
router.use("/suppliers", suppliersRoutes)
router.use("/inventories", inventoriesRoutes)


