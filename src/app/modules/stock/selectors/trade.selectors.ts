import { createFeatureSelector, createSelector } from '@ngrx/store';

import { StockFeatureState } from '../states';
import { TradeState } from '../states/trade.state';
import { TradesMap } from '../models/trade.models';

const selectFeatureState = createFeatureSelector<StockFeatureState>('stock');

const selectStockState = createSelector(
  selectFeatureState,
  (state: StockFeatureState): TradeState => state.trade,
);

export const selectSubscriptions = createSelector(
  selectStockState,
  (state: TradeState): TradesMap => state.trades,
);
