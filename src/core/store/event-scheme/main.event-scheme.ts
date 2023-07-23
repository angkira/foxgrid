import { createHandlers } from "foxstore";
import { MainEvents } from '../events/main.events';
import { ConfigEventScheme } from "./config.event-scheme";
import { DataEventScheme } from "./data.event-scheme";

export const MainEventScheme = <Item>() => ({
  [MainEvents.Init]: createHandlers({
    effects: [ [console.warn] ],
  })(MainEvents.Init),
  ...ConfigEventScheme<Item>(),
  ...DataEventScheme<Item>(),
});
