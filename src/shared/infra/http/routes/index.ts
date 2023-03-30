import { Router } from "express";
import { productRoutes } from "./products.routes";
import { suppliersRoutes } from "./suppliers.routes";

export const router = Router()

router.use("/products", productRoutes)
router.use("/suppliers", suppliersRoutes)


