import { Component, ComponentProps } from 'solid-js';

interface CellProps extends ComponentProps<any> {
  value: string | number;
  editMode?: boolean;
}

const Cell: Component<CellProps> = (props: CellProps) => {
  return (
    <div class="cell">{ props.value }</div>
  )
}

export default Cell;