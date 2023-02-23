import { ConfigEvents } from '../events/config.events';
import { createHandlers, ReducerFn } from 'foxstore';
import { GridState } from '../grid.store';
import { GridConfig } from '../../config/grid.config';

const updateConfig: ReducerFn<GridState, GridConfig<Item>> = config => ({ config });

export const ConfigEventScheme = {
  [ConfigEvents.ConfigUpdated]: createHandlers({
    reducers: [
      [updateConfig],
    ]
  })(ConfigEvents.ConfigUpdated),
}