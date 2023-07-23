import { DataEvents } from '../events/data.events';
import { createHandlers, ReducerFn } from 'foxstore';
import { GridConfig } from '../../config/grid.config';
import { GridState } from '../grid.store';

const updateRawData = <Item>(data: Item[]): Partial<GridState<Item>> => ({
  rawData: data,
});

const updateDisplayData = <Item>(data: Item[]): Partial<GridState<Item>> => ({
  dataToDisplay: data,
});

export const DataEventScheme = <Item>() => ({
  [DataEvents.DataLoaded]: createHandlers({
    effects: [
      [console.log]
    ],
    reducers: [
      [updateRawData<Item>],
      [updateDisplayData<Item>],
    ]
  })(DataEvents.DataLoaded),
})
