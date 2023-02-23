import { GridConfig } from '../core/config/grid.config';

export type Item = {
  name: string;
  age: number;
  city: string;
}

export const TestGridConfig: GridConfig<Item> = {
  columns: [
    {
      field: 'name',
      label: 'Name',
    }, {
      field: 'age',
      label: 'Age',
    },{
      field: 'city',
      label: 'City',
    },
  ]
}