import { Component, ComponentProps } from 'solid-js';

interface GridProps extends ComponentProps<any> {
  // add props here
}

const Grid: Component<GridProps> = (props: GridProps) => {
  return (
    <div>
      <h2>Grid</h2>
    </div>
  )
}

export default Grid;