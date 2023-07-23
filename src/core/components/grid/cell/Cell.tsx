import { Component, ComponentProps } from 'solid-js';
import './Cell.scss'

interface CellProps extends ComponentProps<any> {
  value: string | number;
  editMode?: boolean;
}

const Cell: Component<CellProps> = (props: CellProps) => {
  return (
    <td class="fx-grid__cell">{ props.value }</td>
  )
}

export default Cell;