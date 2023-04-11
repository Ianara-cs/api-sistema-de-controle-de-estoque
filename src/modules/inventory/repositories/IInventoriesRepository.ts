import { ICreateInventoryDTO } from "../dtos/ICreateInventoryDTO";
import { IInventoryResponse } from "../dtos/IInventoryReponse";
import { IUpdateInventoryDTO } from "../dtos/IUpdateInventoryDTO";
import { Inventory } from "../entities/Inventory";

export interface IInventoriesRepository {
  create(data: ICreateInventoryDTO): Promise<IInventoryResponse>
  findById(id: string): Promise<Inventory | null>
  findAll(): Promise<IInventoryResponse[]>
  update(data: IUpdateInventoryDTO): Promise<IInventoryResponse>
}