import { Action } from '@ngrx/store';

import { OpenMenuPayload } from 'src/app/models/menu.models';

export const OPEN_ACTION = '[MenuActions] OPEN';
export const CLOSE_ACTION = '[MenuActions] CLOSE';

export class OpenAction implements Action {
  public readonly type = OPEN_ACTION;
  constructor(public payload: OpenMenuPayload) { }
}

export class CloseAction implements Action {
  public readonly type = CLOSE_ACTION;
}

export type MenuActions =
  OpenAction |
  CloseAction;
