import { ActionReducerMap } from '@ngrx/store';

import { SharedFeaturesState } from '../states';
import { contextMenuReducer } from './context-menu.reducer';
import { SharedActions } from '../actions';

export const sharedReducers: ActionReducerMap<SharedFeaturesState, SharedActions> = {
  contextMenu: contextMenuReducer,
};
