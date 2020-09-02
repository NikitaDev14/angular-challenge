import { initialStockState, StockState } from '../states/stock.state';
import { SET_LAST_TRADDE_ACTION, StockActions, SUBSCRIBED_ACTION, UNSUBSCRIBED_ACTION } from '../actions/stock.actions';

export const stockReducer = (
  state: StockState = initialStockState,
  action: StockActions,
): StockState => {
  switch (action.type) {
    case SUBSCRIBED_ACTION: {
      return {
        trades: {
          ...state.trades,
          [action.payload.symbol]: action.payload,
        }
      };
    }

    case UNSUBSCRIBED_ACTION: {
      const newTrades = { ...state.trades };

      delete newTrades[action.payload];

      return {
        trades: {
          ...newTrades,
        }
      };
    }

    case SET_LAST_TRADDE_ACTION: {
      return {
        trades: {
          ...state.trades,
          [action.payload.symbol]: {
            ...state.trades[action.payload.symbol],
            ...action.payload,
          },
        },
      };
    }

    default:
      return state;
  }
};

