import { TradesMap } from '../models/stock.models';

export interface StockState {
  trades: TradesMap;
}

export const initialStockState: StockState = {
  trades: {},
};
