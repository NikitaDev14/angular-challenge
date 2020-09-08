import { Action } from '@ngrx/store';
import { OpenMenuPayload } from '../models/context-menu.models';

export const OPEN_ACTION = '[ContextMenuActions] OPEN';
export const CLOSE_ACTION = '[ContextMenuActions] CLOSE';
export const SUBSCRIBE_TO_GLOBAL_CLICK_ACTION = '[ContextMenuActions] SUBSCRIBE_TO_GLOBAL_CLICK';

export class OpenAction implements Action {
  public readonly type = OPEN_ACTION;
  constructor(public payload: OpenMenuPayload) { }
}

export class CloseAction implements Action {
  public readonly type = CLOSE_ACTION;
}

export class SubscribeToGlobalClickAction implements Action {
  public readonly type = SUBSCRIBE_TO_GLOBAL_CLICK_ACTION;
}

export type ContextMenuActions =
  OpenAction |
  CloseAction |
  SubscribeToGlobalClickAction;
