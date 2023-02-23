import { Component, ComponentProps, For } from 'solid-js';
import { GridConfig } from '../../../config/grid.config';
import Cell from '../cell/Cell';

interface RowProps<ItemType> extends ComponentProps<any> {
  config: GridConfig<ItemType>
  item: ItemType;
}

const Row = <ItemType, >(props: RowProps<ItemType>) => {
  return (
    <For each={props.config.columns}>
      {
        column =>
          <Cell value={
            column.valueFormatter?.(props.item[column.field])
            || String(props.item[column.field])
          }></Cell>
      }
    </For>
  )
}

export default Row;