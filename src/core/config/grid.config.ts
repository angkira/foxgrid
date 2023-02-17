import { ActionConfig } from './action.config';
import { ColumnConfig } from './column.config';
import { EditConfig } from './edit.config';
import { FilterConfig } from './filter.config';
import { SortingConfig } from './sorting.config';

export interface GridConfig<ItemType> {
  columns: ReadonlyArray<ColumnConfig<ItemType>>;
  actions?: ReadonlyArray<ActionConfig<ItemType>>;
  edit?: EditConfig<ItemType>;
  filterConfig?: FilterConfig<ItemType>;
  sortingConfig?: SortingConfig<ItemType>;
}
