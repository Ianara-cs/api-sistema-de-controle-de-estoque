import { Router } from "express";
import { productRoutes } from "./products.routes";

export const router = Router()

router.use("/products", productRoutes)


