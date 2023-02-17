export interface FilterConfig<ItemType> {
  clientFilter: boolean;
  predicateFn: (item: ItemType) => boolean,
}