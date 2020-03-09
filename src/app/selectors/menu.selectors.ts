import { AppState } from 'src/app/states/app.state';
import { createSelector } from '@ngrx/store';
import { MenuState } from 'src/app/states/menu.state';

const selectState = (state: AppState) => state.menu;

export const selectIsMenuOpened = createSelector(
  selectState,
  (state: MenuState) => state.isOpened,
);

export const selectMenuPosition = createSelector(
  selectState,
  (state: MenuState) => state.position,
);

export const selectMenuContext = createSelector(
  selectState,
  (state: MenuState) => state.contextNode,
);
