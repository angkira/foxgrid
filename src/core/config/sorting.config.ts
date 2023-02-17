export interface SortingConfig<ItemType> {
  clientMode: boolean;
  comparatorFn?: (a: ItemType, b: ItemType) => -1 | 1 | 0;
}