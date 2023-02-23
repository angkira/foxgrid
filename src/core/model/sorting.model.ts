export type SortingDestination = 'asc' | 'desc';

export type SortingModel<ItemType> = Record<keyof ItemType, SortingDestination>;
