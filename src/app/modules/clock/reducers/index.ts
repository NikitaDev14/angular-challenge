import { ActionReducerMap } from '@ngrx/store';

import { ClockActions } from '../actions/clock.actions';
import { clockReducer } from './clock.reducer';
import { ClockFeatureState } from '../states';

export const clockReducers: ActionReducerMap<ClockFeatureState, ClockActions> = {
  clock: clockReducer,
};
