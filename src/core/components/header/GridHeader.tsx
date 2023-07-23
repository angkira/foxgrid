import {Component, ComponentProps, For} from 'solid-js';
import {GridConfig} from '../../config/grid.config';
import HeaderCell from './HeaderCell/HeaderCell';

interface HeaderProps<ItemType> extends ComponentProps<any> {
  config: GridConfig<ItemType>
}

const GridHeader = <ItemType, >(props: HeaderProps<ItemType>) => {
  return (
    <thead class="fx-grid__header">
      <tr class="fx-grid__header-row">
        <For each={props.config.columns}>
          {
            column =>
              <HeaderCell
                columnConfig={column}
              ></HeaderCell>
          }
        </For>
      </tr>
      
    </thead>
    
  )
}

export default GridHeader;