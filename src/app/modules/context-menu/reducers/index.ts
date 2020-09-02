import { ActionReducerMap } from '@ngrx/store';

import { ContextMenuFeatureState } from '../states';
import { ContextMenuActions } from '../actions/context-menu.actions';
import { contextMenuReducer } from './context-menu.reducer';

export const contextMenuReducers: ActionReducerMap<ContextMenuFeatureState, ContextMenuActions> = {
  contextMenu: contextMenuReducer,
};
