import { createFeatureSelector, createSelector } from '@ngrx/store';

import { StockFeatureState } from '../states';
import { StockState } from '../states/stock.state';
import { TradesMap } from '../models/stock.models';

const selectFeatureState = createFeatureSelector<StockFeatureState>('stock');

const selectStockState = createSelector(
  selectFeatureState,
  (state: StockFeatureState): StockState => state.stock,
);

export const selectSubscriptions = createSelector(
  selectStockState,
  (state: StockState): TradesMap => state.trades,
);
