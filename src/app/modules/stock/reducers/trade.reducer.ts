import { initialTradeState, TradeState } from '../states/trade.state';
import { SET_LAST_TRADE_ACTION, TradeActions, SUBSCRIBE_ACTION, SUBSCRIBED_ACTION, UNSUBSCRIBED_ACTION } from '../actions/trade.actions';
import { initCommonStateReducer, loadedCommonStateReducer } from '../../shared/reducers/common.reducer';

export const tradeReducer = (
  state: TradeState = initialTradeState,
  action: TradeActions,
): TradeState => {
  switch (action.type) {
    case SUBSCRIBE_ACTION: {
      return initCommonStateReducer<TradeState>(state);
    }

    case SUBSCRIBED_ACTION: {
      return loadedCommonStateReducer<TradeState>({
        trades: {
          ...state.trades,
          [action.payload.symbol]: action.payload,
        }
      });
    }

    case UNSUBSCRIBED_ACTION: {
      const newTrades = { ...state.trades };

      delete newTrades[action.payload];

      return loadedCommonStateReducer<TradeState>( {
        trades: {
          ...newTrades,
        }
      });
    }

    case SET_LAST_TRADE_ACTION: {
      return loadedCommonStateReducer<TradeState>({
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

