import { Action } from '@ngrx/store';

import { StockSymbol } from '../models/symbol.models';

export const LOAD_ACTION = '[SymbolActions] LOAD_ACTIONS';
export const LOADED_ACTION = '[SymbolActions] LOADED_ACTIONS';

export class LoadAction implements Action {
  public readonly type = LOAD_ACTION;
}

export class LoadedAction implements Action {
  public readonly type = LOADED_ACTION;
  constructor(public payload: StockSymbol[]) { }
}

export type SymbolActions =
  LoadAction |
  LoadedAction;
