import { Product } from "@prisma/client";
import { prisma } from "../../../../shared/database/prismaClient";
import { ICreateProductDTO } from "../../dtos/ICreateProductDTO";
import { IProductRepository } from "../IProductsRepository";

export class ProductsRepository implements IProductRepository {
  async create({name, price, quantity, expiration_date}: ICreateProductDTO): Promise<Product> {
    const newProduct = await prisma.product.create({
      data: {expiration_date, name, price, quantity}  
    })

    return newProduct
  }
}