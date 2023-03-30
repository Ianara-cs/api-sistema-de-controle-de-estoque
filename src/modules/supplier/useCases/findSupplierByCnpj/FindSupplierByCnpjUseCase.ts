import { inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { NotFoundException } from "../../../../shared/errors/AppErrors";
import { ISupplierResponseDTO } from "../../dtos/ISupplierResponseDTO";
import { ISuppliersRepository } from "../../repositories/ISuppliersRepository";

@injectable()
export class FindSupplierByCnpjUseCase {
  constructor(
    @inject(INJECT.SUPPLIERS_REPOSITORY)
    private suppliersRepository: ISuppliersRepository
  ) {}

  async execute(cnpj: string): Promise<ISupplierResponseDTO> {
    const supplier = await this.suppliersRepository.findByCNPJ(cnpj)

    if(!supplier) {
      throw new NotFoundException("Supplier not found!")
    }

    return supplier
  }
}