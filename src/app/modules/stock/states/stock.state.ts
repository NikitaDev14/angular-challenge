import { TradesMap } from '../models/stock.models';
import { CommonState, initialCommonState } from '../../../states/common.state';

export interface StockState extends CommonState {
  trades: TradesMap;
}

export const initialStockState: StockState = {
  ...initialCommonState,
  trades: {},
};
