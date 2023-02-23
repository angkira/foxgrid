import { createHandlers } from "foxstore";
import { MainEvents } from '../events/main.events';
import { ConfigEventScheme } from "./config.event-scheme";

export const MainEventScheme = {
  [MainEvents.Init]: createHandlers({
    effects: [ [console.warn] ],
  })(MainEvents.Init),
  ...ConfigEventScheme,
};

