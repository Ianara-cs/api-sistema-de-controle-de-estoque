import { inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { ISupplierResponseDTO } from "../../dtos/ISupplierResponseDTO";
import { ISuppliersRepository } from "../../repositories/ISuppliersRepository";

@injectable()
export class FindAllSuppliersUseCase {
  constructor(
    @inject(INJECT.SUPPLIERS_REPOSITORY)
    private suppliersRepository: ISuppliersRepository
  ) {}

  async execute(): Promise<ISupplierResponseDTO[]> {
    const suppliers = await this.suppliersRepository.findAllSuppliers()

    return suppliers
  }
}