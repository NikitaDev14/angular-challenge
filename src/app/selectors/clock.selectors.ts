import { AppState } from '../states/app.state';
import { createSelector } from '@ngrx/store';
import { ClockState } from '../states/clock.state';

const selectState = (state: AppState) => state.clock;

export const selectShowSeconds = createSelector(
  selectState,
  (state: ClockState): boolean => state.showSeconds,
);

export const selectDividersAnimationEnabled = createSelector(
  selectState,
  (state: ClockState): boolean => state.enableDividersAnimation,
);
