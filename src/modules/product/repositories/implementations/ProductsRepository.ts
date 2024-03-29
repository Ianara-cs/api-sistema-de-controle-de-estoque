import { Product } from "@prisma/client";
import { prisma } from "../../../../shared/infra/prisma/prismaClient";
import { ICreateProductDTO } from "../../dtos/ICreateProductDTO";
import { IProductAndSupplierResponseDTO } from "../../dtos/IProductAndSupplierResponseDTO";
import { IUpdateProductDTO } from "../../dtos/IUpdateProductDTO";
import { IProductsRepository } from "../IProductsRepository";

export class ProductsRepository implements IProductsRepository {
  async create({name, expirationDate, manufactureDate, brand, description}: ICreateProductDTO): Promise<Product> {
    const newProduct = await prisma.product.create({
      data: {expirationDate, name, manufactureDate, brand, description}, 
      include:{supplierOnProduct: true}  
    })

    return newProduct
  }

  async findById(id: string): Promise<Product| null> {
    const product = await prisma.product.findUnique({
      where: {id},
      include: {supplierOnProduct: true}
    })

    return product
  }

  async findProductByExpirationDate(date: Date): Promise<Product[]> {
    const products = await prisma.product.findMany({
      where: {expirationDate: {
        gte: new Date(date),
        lte: new Date(date),
      }},
      include: {supplierOnProduct: true} 
    })
    
    return products
  }

  async findProductByManufactureDate(date: Date): Promise<Product[]> {
    const products = await prisma.product.findMany({
      where: {manufactureDate: {
        gte: new Date(date),
        lte: new Date(date),
      }},
      include: {supplierOnProduct: true} 
    })
    
    return products
  }

  async listProducts(): Promise<Product[]> {
    const products = await prisma.product.findMany({
      include: {supplierOnProduct: true} 
    })
    return products
  }

  async updateProduct({id, name, description }: IUpdateProductDTO): Promise<Product> {
    const updateProduct = await prisma.product.update({
      where: {
        id
      }, 
      data: {
        name, description
      },
      include: {supplierOnProduct: true} 
    })

    return updateProduct
  }

  async addProductToASupplier(productId: string, supplierId: string): Promise<IProductAndSupplierResponseDTO> {
    const productAndSupplier = await prisma.supplierOnProduct.create({
      data: {
        productId, supplierId
      }
    })

    return productAndSupplier
  }

  async deleteProduct(id: string): Promise<Product> {
    const product = await prisma.product.delete({
      where: {id}
    })

    return product
  }
}