import { ClockState } from './clock.state';

export const clockFeatureKey = 'clock';

export interface ClockFeatureState {
  clock: ClockState;
}
