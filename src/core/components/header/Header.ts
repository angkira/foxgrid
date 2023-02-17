import { Component, ComponentProps } from 'solid-js';

interface HeaderProps extends ComponentProps<any> {
  // add props here
}

const Header: Component<HeaderProps> = (props: HeaderProps) => {
  return (
    <div>
      <div>Header</div>
    </div>
  )
}

export default Header;