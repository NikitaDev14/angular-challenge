import { TradeState } from './trade.state';
import { SymbolState } from './symbol.state';

export interface StockFeatureState {
  trade: TradeState;
  symbol: SymbolState;
}
