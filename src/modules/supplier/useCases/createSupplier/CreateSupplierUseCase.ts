import { inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { BadRequestException } from "../../../../shared/errors/AppErrors";
import { ISuppliersRepository } from "../../repositories/ISuppliersRepository";

@injectable()
export class CreateSupplierUseCase {
  constructor(
    @inject(INJECT.SUPPLIERS_REPOSITORY)
    private suppliersRepository: ISuppliersRepository
  ) {}

  async execute({
    name, email, cnpj, phone,
    city, complement, country, neighborhood, number,
    state, street, zipCode
  }: ICreateSupplierDTO) {
    const supplier = await this.suppliersRepository.findByCNPJ(cnpj)
    const supplierEmail = await this.suppliersRepository.findByEmail(email)

    if(supplier) {
      throw new BadRequestException("Supplier already exists!")
    }

    if(supplierEmail) {
      throw new BadRequestException("Supplier email already exists!")
    }

    const newSupplier = await this.suppliersRepository.create({
      name, email, cnpj, phone,
      city, complement, country, neighborhood, number,
      state, street, zipCode
    })

    return newSupplier
  }
}