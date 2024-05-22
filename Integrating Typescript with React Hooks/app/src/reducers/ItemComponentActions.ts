import { Item } from "./ItemState";

type ItemComponentActions =
  | { type: 'ADD_ITEM'; payload: Item }
  | { type: 'REMOVE_ITEM'; payload: number };

export default ItemComponentActions