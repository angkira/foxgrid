export interface EditConfig<ItemType> {
  mode: 'modal' | 'realtime' | 'saving';
  fields: (keyof ItemType)[];
}