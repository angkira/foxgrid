import { Component, ComponentProps } from 'solid-js';

interface ActionProps extends ComponentProps<any> {
  // add props here
}

const Action: Component<ActionProps> = (props: ActionProps) => {
  return (
    <div>
      <h2>Action</h2>
    </div>
  )
}

export default Action;