import { initialStockState, StockState } from '../states/stock.state';
import { SET_LAST_TRADDE_ACTION, StockActions, SUBSCRIBE_ACTION, SUBSCRIBED_ACTION, UNSUBSCRIBED_ACTION } from '../actions/stock.actions';
import { initCommonStateReducer, loadedCommonStateReducer } from '../../../reducers/common.reducer';

export const stockReducer = (
  state: StockState = initialStockState,
  action: StockActions,
): StockState => {
  switch (action.type) {
    case SUBSCRIBE_ACTION: {
      return initCommonStateReducer<StockState>(state);
    }

    case SUBSCRIBED_ACTION: {
      return loadedCommonStateReducer<StockState>({
        trades: {
          ...state.trades,
          [action.payload.symbol]: action.payload,
        }
      });
    }

    case UNSUBSCRIBED_ACTION: {
      const newTrades = { ...state.trades };

      delete newTrades[action.payload];

      return loadedCommonStateReducer<StockState>( {
        trades: {
          ...newTrades,
        }
      });
    }

    case SET_LAST_TRADDE_ACTION: {
      return loadedCommonStateReducer<StockState>({
        trades: {
          ...state.trades,
          [action.payload.symbol]: {
            ...state.trades[action.payload.symbol],
            ...action.payload,
          },
        },
      });
    }

    default:
      return state;
  }
};

