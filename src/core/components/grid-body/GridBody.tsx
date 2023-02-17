import { Component, ComponentProps } from 'solid-js';
import { GridConfig } from '../../config/grid.config';

interface GridBodyProps<ItemType> extends ComponentProps<any> {
  config: GridConfig<ItemType>,
}

const GridBody = (props: GridBodyProps) => {
  return (
    <div>
      <h2>GridBody</h2>
    </div>
  )
}

export default GridBody;