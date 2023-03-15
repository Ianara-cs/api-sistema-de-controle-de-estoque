import { Product } from "@prisma/client";
import { ICreateProductDTO } from "../dtos/ICreateProductDTO";
import { IUpdateProductDTO } from "../dtos/IUpdateProductDTO";

export interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<Product>
  findById(id: string): Promise<Product | null>
  findProductByExpirationDate(date: Date): Promise<Product[]>
  findProductByManufactureDate(date: Date): Promise<Product[]>
  listProducts(): Promise<Product[]>
  updateProduct(data: IUpdateProductDTO): Promise<Product>

}