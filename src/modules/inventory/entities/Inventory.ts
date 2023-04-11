import { Address } from "../../supplier/entities/Address"
import { InventoryItem } from "./InventoryItem"

export class Inventory {
  id: string
  name: string
  address: Address | null
  items: InventoryItem[]
}