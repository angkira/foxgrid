export interface ActionConfig<ItemType> {
  label: string;
  icon: string;
  actionFn: (items: ItemType[]) => void,
  availableFn?: (items: ItemType[]) => boolean;
  conditionFn?: (items: ItemType[]) => boolean;
  labelReverse?: string;
  iconReverse?: string;
  actionReverseFn: (items: ItemType[]) => void;
}
