import { TradesMap } from '../models/trade.models';
import { CommonState, initialCommonState } from '../../shared/states/common.state';

export interface TradeState extends CommonState {
  trades: TradesMap;
}

export const initialTradeState: TradeState = {
  ...initialCommonState,
  trades: {},
};