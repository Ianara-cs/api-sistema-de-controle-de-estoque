import { Product } from "@prisma/client";
import { ICreateProductDTO } from "../dtos/ICreateProductDTO";

export interface IProductRepository {
  create(data: ICreateProductDTO): Promise<Product>
}