import { ActionReducerMap } from '@ngrx/store';

import { AppState } from 'src/app/states/app.state';
import { AppAction } from 'src/app/actions/app.action';
import { treeReducer } from 'src/app/reducers/tree.reducer';
import { menuReducer } from 'src/app/reducers/menu.reducer';
import { connectionReducer } from 'src/app/reducers/connection.reducer';

export const appReducers: ActionReducerMap<AppState, AppAction> = {
  tree: treeReducer,
  menu: menuReducer,
  connection: connectionReducer,
};
