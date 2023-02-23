import { ProtoStore } from 'foxstore';
import { GridConfig } from '../config/grid.config';
import { ColumnConfig } from '../config/column.config';
import { FilterModel } from '../model/filter.model';
import { SortingModel } from '../model/sorting.model';
import { PagingModel } from '../model/paging.model';
import { MainEventScheme } from './event-scheme/main.event-scheme';

export type Item = Record<string, unknown>;

export type GridState<ItemType = Item> = {
  rawData: ItemType[];
  dataToDisplay: ItemType[];
  config: GridConfig<ItemType>;
  columnsToDisplay: ColumnConfig<ItemType>[];
  filterModel: FilterModel<ItemType>;
  sortingModel: SortingModel<ItemType>;
  pagingModel: PagingModel;
  selectedItems: ItemType[];
}

export const createGridStore = <Item,>() => new ProtoStore<GridState<Item>>(null, MainEventScheme)
