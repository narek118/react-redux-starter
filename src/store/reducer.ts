import { combineReducers, ReducersMapObject } from 'redux';
import * as modules from './modules';

const reducers: ReducersMapObject = {};

for (let i in modules) {
  reducers[i] = (modules as any)[i].reducer;
}

export default combineReducers(reducers);
