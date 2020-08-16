import { Action } from '@ngrx/store';

export const CONNECTED_ACTION = '[ConnectionActions] CONNECTED';
export const DISCONNECTED_ACTION = '[ConnectionActions] DISCONNECTED';

export class ConnectedAction implements Action {
  public readonly type = CONNECTED_ACTION;
}

export class DisconnectedAction implements Action {
  public readonly type = DISCONNECTED_ACTION;
}

export type ConnectionActions =
  ConnectedAction |
  DisconnectedAction;
