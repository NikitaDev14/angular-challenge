import { createFeatureSelector, createSelector } from '@ngrx/store';

import { SharedFeaturesState } from '../states';
import { ContextMenuState } from '../states/context-menu.state';
import { ContextMenuPosition } from '../models/context-menu.models';
import { TemplateRef } from '@angular/core';

const selectFeatureState = createFeatureSelector<SharedFeaturesState>('contextMenu');

const selectContextMenuState = createSelector(
  selectFeatureState,
  (state: SharedFeaturesState): ContextMenuState => state.contextMenu,
);

export const selectIsContextMenuOpened = createSelector(
  selectContextMenuState,
  (state: ContextMenuState): boolean => state.isOpened,
);

export const selectContextMenuPosition = createSelector(
  selectContextMenuState,
  (state: ContextMenuState): ContextMenuPosition => state.position,
);

export const selectContextMenuTemplate = createSelector(
  selectContextMenuState,
  (state: ContextMenuState): TemplateRef<any> => state.menuTemplate,
);

export const selectContextOfMenu = createSelector(
  selectContextMenuState,
  (state: ContextMenuState): any => state.context,
);
