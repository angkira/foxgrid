import { Component, ComponentProps } from 'solid-js';

interface PagerProps extends ComponentProps<any> {
  // add props here
}

const Pager: Component<PagerProps> = (props: PagerProps) => {
  return (
    <div>
      <h2>Pager</h2>
    </div>
  )
}

export default Pager;