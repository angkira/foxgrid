import { Component, ComponentProps } from 'solid-js';
import { ColumnConfig } from '../../../config/column.config';

interface HeaderCellProps<ItemType,> extends ComponentProps<any> {
  columnConfig: ColumnConfig<ItemType>;
}

const HeaderCell = <ItemType, >(props: HeaderCellProps<ItemType>) => {
  return (
    <th class="cell header__cell">{ props.columnConfig.label }</th>
  )
}

export default HeaderCell;