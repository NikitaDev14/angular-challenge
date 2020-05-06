import { TreeState } from 'src/app/states/tree.state';
import { AppState } from 'src/app/states/app.state';
import { createSelector } from '@ngrx/store';

const selectState = (state: AppState) => state.tree;

export const selectTree = createSelector(
  selectState,
  (state: TreeState) => state.tree,
);
