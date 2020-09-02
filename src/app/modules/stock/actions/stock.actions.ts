import { Action } from '@ngrx/store';

import { Trade } from '../models/stock.models';

export const SUBSCRIBE_ACTION = '[StockAction] SUBSCRIBE_ACTION';
export const SUBSCRIBED_ACTION = '[StockAction] SUBSCRIBED_ACTION';
export const SET_LAST_TRADDE_ACTION = '[StockAction] SET_LAST_TRADE_ACTION';
export const CONNECT_TO_MARKET_ACTION = '[StockAction] CONNECT_TO_MARKET';
export const UNSUBSCRIBE_ACTION = '[StockAction] UNSUBSCRIBE';
export const UNSUBSCRIBED_ACTION = '[StockAction] UNSUBSCRIBED';

export class SubscribeAction implements Action {
  public readonly type = SUBSCRIBE_ACTION;

  constructor(public payload: string) { }
}

export class SubscribedAction implements Action {
  public readonly type = SUBSCRIBED_ACTION;

  constructor(public payload: Trade) { }
}

export class SetLastTradeAction implements Action {
  public readonly type = SET_LAST_TRADDE_ACTION;

  constructor(public payload: Trade) { }
}

export class ConnectToMarketAction implements Action {
  public readonly type = CONNECT_TO_MARKET_ACTION;
}

export class UnsubscribeAction implements Action {
  public readonly type = UNSUBSCRIBE_ACTION;
}

export class UnsubscribedAction implements Action {
  public readonly type = UNSUBSCRIBED_ACTION;
  constructor(public payload: string) { }
}

export type StockActions =
  SubscribeAction |
  SubscribedAction |
  SetLastTradeAction |
  UnsubscribeAction |
  UnsubscribedAction;
