import { ISupplierResponseDTO } from "../dtos/ISupplierResponseDTO";


export interface ISuppliersRepository {
  create(data: ICreateSupplierDTO): Promise<ISupplierResponseDTO>
  findByCNPJ(cnpj: string): Promise<ISupplierResponseDTO | null>
  findByEmail(email: string): Promise<ISupplierResponseDTO | null>
  findAllSuppliers(): Promise<ISupplierResponseDTO[]>
  findSupplierById(id: string): Promise<ISupplierResponseDTO | null>
}