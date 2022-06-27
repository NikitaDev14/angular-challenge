import { TradeActions } from './trade.actions';
import { SymbolActions } from './symbol.actions';

export type StockActions =
  TradeActions &
  SymbolActions;
