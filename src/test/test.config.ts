import { GridConfig } from '../core/config/grid.config';

export type Item = {
  name: string;
  age: number;
  city: string;
  degree: string;
  country: string;
  speciality: string;
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
    },{
      field: 'country',
      label: 'Country',
    },{
      field: 'degree',
      label: 'Degree',
    },{
      field: 'speciality',
      label: 'City',
    },
  ]
}