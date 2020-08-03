import {AppState} from 'src/app/states/app.state';
import {createSelector} from '@ngrx/store';
import {ConnectionState} from 'src/app/states/connection.state';

const selectState = (state: AppState) => state.connection;

export const selectIsOnline = createSelector(
  selectState,
  (state: ConnectionState) => state.isOnline,
);
