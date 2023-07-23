import { ConfigEvents } from '../events/config.events';
import { createHandlers, ReducerFn } from 'foxstore';
import { GridConfig } from '../../config/grid.config';

const updateConfig = <Item>(config: GridConfig<Item>) => ({ config });

export const ConfigEventScheme = <Item>() => ({
  [ConfigEvents.ConfigUpdated]: createHandlers({
    effects: [
      [console.log]
    ],
    reducers: [
      [updateConfig<Item>],
    ]
  })(ConfigEvents.ConfigUpdated),
})
