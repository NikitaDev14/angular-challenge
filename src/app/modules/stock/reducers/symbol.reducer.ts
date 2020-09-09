import { initialSymbolState, SymbolState } from '../states/symbol.state';
import { LOAD_ACTION, LOADED_ACTION, SymbolActions } from '../actions/symbol.actions';
import { initCommonStateReducer, loadedCommonStateReducer } from '../../shared/reducers/common.reducer';

export const symbolReducer = (
  state: SymbolState = initialSymbolState,
  action: SymbolActions,
): SymbolState => {
  switch (action.type) {
    case LOAD_ACTION: {
      return initCommonStateReducer<SymbolState>(state);
    }

    case LOADED_ACTION: {
      return loadedCommonStateReducer<SymbolState>({
        stockSymbols: [
          ...action.payload,
        ],
      });
    }

    default:
      return state;
  }
};
