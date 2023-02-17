import { Component, ComponentProps } from 'solid-js';

interface CellProps extends ComponentProps<any> {
  // add props here
}

const Cell: Component<CellProps> = (props: CellProps) => {
  return (
    <div>
      <h2>Cell</h2>
    </div>
  )
}

export default Cell;