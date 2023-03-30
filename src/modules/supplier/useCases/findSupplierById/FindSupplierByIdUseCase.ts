import { inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { NotFoundException } from "../../../../shared/errors/AppErrors";
import { ISupplierResponseDTO } from "../../dtos/ISupplierResponseDTO";
import { ISuppliersRepository } from "../../repositories/ISuppliersRepository";

@injectable()
export class FindSupplierByIdUseCase {
  constructor(
    @inject(INJECT.SUPPLIERS_REPOSITORY)
    private suppliersRepository : ISuppliersRepository
  ) {}

  async execute(id: string): Promise<ISupplierResponseDTO> {
    const supplier = await this.suppliersRepository.findSupplierById(id)

    if(!supplier) {
      throw new NotFoundException("Supplier not found!")
    }

    return supplier
  }
}