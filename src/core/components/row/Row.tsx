import { Component, ComponentProps } from 'solid-js';

interface RowProps extends ComponentProps<any> {
  // add props here
}

const Row: Component<RowProps> = (props: RowProps) => {
  return (
    <div>
      <h2>Row</h2>
    </div>
  )
}

export default Row;