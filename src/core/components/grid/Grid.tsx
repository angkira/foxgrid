import { Component, ComponentProps, useContext, createSignal, onMount } from 'solid-js';
import { GridConfig } from '../../config/grid.config';
import GridBody from './grid-body/GridBody';
import { ConfigEvents } from '../../store/events/config.events';

import { createContext } from 'solid-js';
import { createGridStore, GridState } from '../../store/grid.store';
import GridHeader from '../header/GridHeader';
import { DataEvents } from '../../store/events/data.events';

interface GridProps<ItemType> extends ComponentProps<any> {
  config: GridConfig<ItemType>;
  data: ItemType[];
}

const Grid = <ItemType, >(props: GridProps<ItemType>) => {

  const store = createGridStore<ItemType>();

  const StoreContext = createContext(store);

  const [dataToDisplay, setDataToDisplay] = createSignal<GridState['dataToDisplay']>()
  const [config, setConfig] = createSignal<GridState['config']>()
  
  onMount(() => {
    store.dispatch(ConfigEvents.ConfigUpdated, props.config);
    store.dispatch(DataEvents.DataLoaded, props.data);

    store.select('dataToDisplay').subscribe(setDataToDisplay)
    store.select('config').subscribe(setConfig)
  })

  return (
    <StoreContext.Provider value={store}>
      <div>
        <h2>Grid</h2>
        <table class="fx-grid">
          <GridHeader config={props.config}></GridHeader>
          <GridBody data={dataToDisplay()} config={config()}></GridBody>
        </table>
        
      </div>
    </StoreContext.Provider>
  )
}

export default Grid;