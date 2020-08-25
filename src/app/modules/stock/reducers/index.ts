import { ActionReducerMap } from '@ngrx/store';

import { StockFeatureState } from '../states';
import { StockActions } from '../actions/stock.actions';
import { stockReducer } from './stock.reducer';

export const stockReducers: ActionReducerMap<StockFeatureState, StockActions> = {
  stock: stockReducer,
};
