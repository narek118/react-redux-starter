import { common } from '../..';

export type State = {
  list: common.Id[];
  current: common.Id | null;
};
