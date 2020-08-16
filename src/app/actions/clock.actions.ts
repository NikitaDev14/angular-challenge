import { Action } from '@ngrx/store';

export const SHOW_SECONDS_ACTION = '[ClockActions] SHOW_SECONDS';
export const ENABLE_DIVIDERS_ANIMATION_ACTION = '[ClockActions] ENABLE_DIVIDERS_ANIMATION';

export class ShowSecondsAction implements Action {
  public readonly type = SHOW_SECONDS_ACTION;

  constructor(public payload: boolean) { }
}

export class EnableDividersAnimationAction implements Action {
  public readonly type = ENABLE_DIVIDERS_ANIMATION_ACTION;

  constructor(public payload: boolean) { }
}

export type ClockActions =
  ShowSecondsAction |
  EnableDividersAnimationAction;
