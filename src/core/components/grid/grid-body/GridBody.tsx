import { Component, ComponentProps, For } from 'solid-js';
import { GridConfig } from '../../../config/grid.config';
import Row from '../row/Row';

interface GridBodyProps<ItemType> extends ComponentProps<any> {
  config: GridConfig<ItemType>,
  data: ItemType[];
}

const GridBody = <ItemType, >(props: GridBodyProps<ItemType>) => {
  return (
    <For each={props.data}>
      {
        item => <Row config={props.config} item={item}></Row>
      }
    </For>
  )
}

export default GridBody;