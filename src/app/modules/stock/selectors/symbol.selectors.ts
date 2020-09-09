import { createFeatureSelector, createSelector } from '@ngrx/store';

import { StockFeatureState } from '../states';
import { SymbolState } from '../states/symbol.state';
import { StockSymbol } from '../models/symbol.models';

const selectFeatureState = createFeatureSelector<StockFeatureState>('stock');

const selectStockState = createSelector(
  selectFeatureState,
  (state: StockFeatureState): SymbolState => state.symbol,
);

export const selectSymbols = createSelector(
  selectStockState,
  (state: SymbolState): StockSymbol[] => state.stockSymbols,
);
