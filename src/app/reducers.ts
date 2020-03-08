import { AppState, initialTreeState, TreeState } from 'src/app/state';
import { AppActions, GENERATED_ACTION } from 'src/app/actions';
import { ActionReducerMap } from '@ngrx/store';

export const treeReducer = (
  state = initialTreeState,
  action: AppActions,
): TreeState => {
  switch (action.type) {
    case GENERATED_ACTION: {
      console.log(action.payload);
      return {
        ...state,
        tree: action.payload,
      };
    }

    default:
      return state;
  }
};

export const appReducers: ActionReducerMap<AppState, AppActions> = {
  tree: treeReducer,
};
