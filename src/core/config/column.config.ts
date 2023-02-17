import { Component } from 'solid-js';
import { FilterConfig } from './filter.config';
import { SortingConfig } from './sorting.config';

export interface ColumnConfig<ItemType> {
  name: string;
  label: string;
  field: keyof ItemType;
  fixed?: boolean;
  resizable?: boolean;
  filterConfig?: FilterConfig<ItemType>;
  sortingConfig?: SortingConfig<ItemType>;
  valueFormatter?: (item: ItemType) => string | number;
  customComponent?: Component;
  styles?: CSSStyleDeclaration;
}
