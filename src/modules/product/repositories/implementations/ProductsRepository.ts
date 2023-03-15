import { Product } from "@prisma/client";
import { prisma } from "../../../../shared/database/prismaClient";
import { ICreateProductDTO } from "../../dtos/ICreateProductDTO";
import { IUpdateProductDTO } from "../../dtos/IUpdateProductDTO";
import { IProductsRepository } from "../IProductsRepository";

export class ProductsRepository implements IProductsRepository {
  async create({name, expirationDate, manufactureDate}: ICreateProductDTO): Promise<Product> {
    const newProduct = await prisma.product.create({
      data: {expirationDate, name, manufactureDate}  
    })

    return newProduct
  }

  async findById(id: string): Promise<Product| null> {
    const product = await prisma.product.findUnique({
      where: {id}
    })

    return product
  }

  async findProductByExpirationDate(date: Date): Promise<Product[]> {
    let products: Product[] = []
    if(date) {
      products = await prisma.product.findMany({
        where: {expirationDate: date}
      })
    }
    
    return products
  }

  async findProductByManufactureDate(date: Date): Promise<Product[]> {
    let products: Product[] = []
    if(date) {
      products = await prisma.product.findMany({
        where: {manufactureDate: date}
      })
    }
    
    return products
  }

  async listProducts(): Promise<Product[]> {
    const products = await prisma.product.findMany()
    return products
  }

  async updateProduct({id, name, expirationDate, manufactureDate}: IUpdateProductDTO): Promise<Product> {
    const updateProduct = await prisma.product.update({
      where: {
        id
      }, 
      data: {
        name,
        expirationDate,
        manufactureDate
      }
    })

    return updateProduct
  }
}