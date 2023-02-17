import { Component, ComponentProps } from 'solid-js';

interface FilterProps extends ComponentProps<any> {
  // add props here
}

const Filter: Component<FilterProps> = (props: FilterProps) => {
  return (
    <div>
      <h2>Filter</h2>
    </div>
  )
}

export default Filter;