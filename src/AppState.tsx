import { Monster } from './Monster';

export type AppState = {
  monsters: Monster[];
  search: string;
  title: string;
};
