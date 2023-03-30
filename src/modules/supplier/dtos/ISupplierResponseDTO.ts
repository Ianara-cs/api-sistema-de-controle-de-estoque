import { Address } from "@prisma/client"

export interface ISupplierResponseDTO {
  name: string
  cnpj: string
  phone: string
  email: string
  addresses: Address[]
}