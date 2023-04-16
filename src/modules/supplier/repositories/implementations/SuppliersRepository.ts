import { prisma } from "../../../../shared/infra/prisma/prismaClient";
import { ICreateSupplierAddressDTO } from "../../dtos/ICreateSupplierAddressDTO";
import { ISupplierResponseDTO } from "../../dtos/ISupplierResponseDTO";
import { ISuppliersRepository } from "../ISuppliersRepository";

export class SuppliersRepository implements ISuppliersRepository {
  async create({
    name, email, cnpj, phone,
    city, complement, country, neighborhood, number, state, street, zipCode 
  }: ICreateSupplierDTO): Promise<ISupplierResponseDTO> {
    
    const supplier = await prisma.supplier.create({
      data: {
        name,
        cnpj, 
        email,
        phone, 
      }, 
      include: {
        addresses: true
      }
    })

    await prisma.address.create({
      data: {
      city, complement, country, neighborhood, number, state, street, zipCode,  supplierId: supplier.id
    }})

    return supplier
  }

  async findByCNPJ(cnpj: string): Promise<ISupplierResponseDTO | null> {
    const supplier = await prisma.supplier.findUnique({
      where: {cnpj},
      include: {addresses: true}
    })

    return supplier
  }

  async findByEmail(email: string): Promise<ISupplierResponseDTO | null> {
    const supplier = await prisma.supplier.findUnique({
      where: {email},
      include: {addresses: true}
    })

    return supplier
  }

  async findAllSuppliers(): Promise<ISupplierResponseDTO[]> {
    const suppliers = await prisma.supplier.findMany({include: {addresses: true}})

    return suppliers
  }

  async findSupplierById(id: string): Promise<ISupplierResponseDTO | null> {
    const supplier = await prisma.supplier.findUnique({
      where: {id},
      include: {addresses: true}
    })

    return supplier
  }

  async deleteSupplier(id: string): Promise<ISupplierResponseDTO> {
    const supplier = await prisma.supplier.delete({
      where: {id},
      include: {addresses: true}
    })

    return supplier
  }

  async addAddressToSupplier({
    id, city, complement, country, neighborhood, number, state, street, zipCode
  }: ICreateSupplierAddressDTO): Promise<ISupplierResponseDTO> {
    const supplier = await prisma.supplier.update({
      where: {id},
      data: {
        addresses: {
          create: {city, complement, country, neighborhood, number, state, street, zipCode}
        }
      },
      include: {addresses: true}
    })

    return supplier
  }

}