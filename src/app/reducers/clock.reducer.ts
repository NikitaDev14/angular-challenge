import { ClockState, initialClockState } from '../states/clock.state';
import { ClockActions, ENABLE_DIVIDERS_ANIMATION_ACTION, SHOW_SECONDS_ACTION } from '../actions/clock.actions';

export const clockReducer = (
  state: ClockState = initialClockState,
  action: ClockActions,
): ClockState => {
  switch (action.type) {
    case SHOW_SECONDS_ACTION: {
      return {
        ...state,
        showSeconds: action.payload,
      };
    }

    case ENABLE_DIVIDERS_ANIMATION_ACTION: {
      return {
        ...state,
        enableDividersAnimation: action.payload,
      };
    }

    default:
      return state;
  }
};
