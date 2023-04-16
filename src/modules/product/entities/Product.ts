import { SupplierOnProduct } from "./SupplierOnProduct"

export class Product {
  id: string
  name: string
  brand: string
  description: string
  expirationDate: Date
  manufactureDate: Date
  createdAt: Date
  updateAt: Date
  supplierOnProduct?: SupplierOnProduct[]
}