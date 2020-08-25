import { initialStockState, StockState } from '../states/stock.state';
import { SET_LAST_TRADDE_ACTION, StockActions } from '../actions/stock.actions';

export const stockReducer = (
  state: StockState = initialStockState,
  action: StockActions,
): StockState => {
  switch (action.type) {
    case SET_LAST_TRADDE_ACTION: {
      return {
        trades: {
          ...state.trades,
          [action.payload.symbol]: action.payload,
        },
      };
    }

    default:
      return state;
  }
};

