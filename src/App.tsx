import { Component } from 'solid-js';
import './App.scss';
import Grid from './core/components/grid/Grid';
import { Item, TestGridConfig } from './test/test.config';
import { TestGridData } from './test/test.data';

const App: Component = () => {
  return (
      <Grid<Item>
        config={TestGridConfig}
        data={TestGridData as Item[]}
      ></Grid>
  );
};

export default App;
