import { ActionReducerMap } from '@ngrx/store';

import { AppState } from 'src/app/states/app.state';
import { AppActions } from 'src/app/actions/app.actions';
import { treeReducer } from 'src/app/reducers/tree.reducer';
import { menuReducer } from 'src/app/reducers/menu.reducer';
import { connectionReducer } from 'src/app/reducers/connection.reducer';
import { clockReducer } from './clock.reducer';

export const appReducers: ActionReducerMap<AppState, AppActions> = {
  tree: treeReducer,
  menu: menuReducer,
  connection: connectionReducer,
  clock: clockReducer,
};
