import { ActionReducerMap } from '@ngrx/store';

import { AppState } from 'src/app/states/app.state';
import { AppActions } from 'src/app/actions/app.actions';
import { connectionReducer } from 'src/app/reducers/connection.reducer';

export const appReducers: ActionReducerMap<AppState, AppActions> = {
  connection: connectionReducer,
};
