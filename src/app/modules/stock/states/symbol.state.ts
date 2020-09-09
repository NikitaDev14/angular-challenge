import { CommonState, initialCommonState } from '../../shared/states/common.state';
import { StockSymbol } from '../models/symbol.models';

export interface SymbolState extends CommonState {
  stockSymbols: StockSymbol[];
}

export const initialSymbolState: SymbolState = {
  ...initialCommonState,
  stockSymbols: [],
};
