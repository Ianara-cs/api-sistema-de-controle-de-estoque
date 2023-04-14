import { container, inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { ICreateSupplierAddressDTO } from "../../dtos/ICreateSupplierAddressDTO";
import { ISupplierResponseDTO } from "../../dtos/ISupplierResponseDTO";
import { ISuppliersRepository } from "../../repositories/ISuppliersRepository";
import { FindSupplierByIdUseCase } from "../findSupplierById/FindSupplierByIdUseCase";

@injectable()
export class AddAddressToSupplierUseCase {
  constructor(
    @inject(INJECT.SUPPLIERS_REPOSITORY)
    private suppliersRepository: ISuppliersRepository
  ) {}

  async execute({
    id, city, complement, country, neighborhood, number, state, street, zipCode
  }: ICreateSupplierAddressDTO): Promise<ISupplierResponseDTO> {
    const findSupplierByIdUseCase = container.resolve(FindSupplierByIdUseCase)
    await findSupplierByIdUseCase.execute(id)

    const supplier = await this.suppliersRepository.addAddressToSupplier({
      id, city, complement, country, neighborhood, number, state, street, zipCode
    })

    return supplier
  }
}