import { Component, ComponentProps, useContext, createSignal, onMount } from 'solid-js';
import { GridConfig } from '../../config/grid.config';
import GridBody from './grid-body/GridBody';
import { ConfigEvents } from '../../store/events/config.events';

import { createContext } from 'solid-js';

const 

export const StoreContext = createContext(GridStore);
interface GridProps<ItemType> extends ComponentProps<any> {
  config: GridConfig<ItemType>;
  data: ItemType[];
}

const Grid = <ItemType, >(props: GridProps<ItemType>) => {
  const store = 

  onMount(() => {
    store.dispatch(ConfigEvents.ConfigUpdated, props.config);
  })
  return (
    <StoreContext.Provider value={GridStore}>
      <div>
        <h2>Grid</h2>
        <GridBody {...props} ></GridBody>
      </div>
    </StoreContext.Provider>
  )
}

export default Grid;