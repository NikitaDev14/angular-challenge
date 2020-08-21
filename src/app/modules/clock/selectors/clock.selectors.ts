import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ClockState } from '../states/clock.state';
import { ClockFeatureState } from '../states';

const selectFeatureState = createFeatureSelector<ClockFeatureState>('clock');

const selectClockState = createSelector(
  selectFeatureState,
  (state: ClockFeatureState): ClockState => state.clock,
);

export const selectShowSeconds = createSelector(
  selectClockState,
  (state: ClockState): boolean => state.showSeconds,
);

export const selectDividersAnimationEnabled = createSelector(
  selectClockState,
  (state: ClockState): boolean => state.enableDividersAnimation,
);