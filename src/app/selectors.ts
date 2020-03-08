import { AppState, TreeState } from 'src/app/state';
import { createSelector } from '@ngrx/store';

const selectState = (state: AppState) => state.tree;

export const selectFactories = createSelector(
  selectState,
  (state: TreeState) => {
    console.log(state.tree);
    return state.tree;
  },
);
