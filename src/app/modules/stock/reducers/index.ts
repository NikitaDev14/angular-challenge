import { ActionReducerMap } from '@ngrx/store';

import { StockFeatureState } from '../states';
import { tradeReducer } from './trade.reducer';
import { StockActions } from '../actions';
import { symbolReducer } from './symbol.reducer';

export const stockReducers: ActionReducerMap<StockFeatureState, StockActions> = {
  trade: tradeReducer,
  symbol: symbolReducer,
};
