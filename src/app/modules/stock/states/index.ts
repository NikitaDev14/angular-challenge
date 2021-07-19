import { TradeState } from './trade.state';
import { SymbolState } from './symbol.state';

export const stockFeatureKey = 'stock';

export interface StockFeatureState {
  trade: TradeState;
  symbol: SymbolState;
}
