import { Action } from '@ngrx/store';
import { Trade } from '../models/stock.models';

export const LOAD_LAST_TRADE_ACTION = '[StockActions] LOAD_LAST_TRADE';
export const LOADED_LAST_TRADE_ACTION = '[StockActions] LOADED_LAST_TRADE';

export class LoadLastTradeAction implements Action {
  public readonly type = LOAD_LAST_TRADE_ACTION;

  constructor(public payload: string) { }
}

export class LoadedLastTradeAction implements Action {
  public readonly type = LOADED_LAST_TRADE_ACTION;

  constructor(public payload: Trade) { }
}
