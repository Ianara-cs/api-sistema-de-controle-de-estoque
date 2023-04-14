import { container, inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { ISupplierResponseDTO } from "../../dtos/ISupplierResponseDTO";
import { ISuppliersRepository } from "../../repositories/ISuppliersRepository";
import { FindSupplierByIdUseCase } from "../findSupplierById/FindSupplierByIdUseCase";

@injectable()
export class DeleteSupplierUseCase {
  constructor(
    @inject(INJECT.SUPPLIERS_REPOSITORY)
    private suppliersRepository: ISuppliersRepository
  ) {}

  async execute(id: string): Promise<ISupplierResponseDTO> {
    const findSupplierByIdUseCase = container.resolve(FindSupplierByIdUseCase)
    await findSupplierByIdUseCase.execute(id)

    const supplier = await this.suppliersRepository.deleteSupplier(id)

    return supplier
  }
}