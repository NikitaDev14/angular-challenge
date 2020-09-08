import { ContextMenuState, initialContextMenuState } from '../states/context-menu.state';
import { CLOSE_ACTION, ContextMenuActions, OPEN_ACTION } from '../actions/context-menu.actions';

export const contextMenuReducer = (
  state: ContextMenuState = initialContextMenuState,
  action: ContextMenuActions,
): ContextMenuState => {
  switch (action.type) {
    case OPEN_ACTION: {
      return {
        ...state,
        isOpened: true,
        position: {
          ...action.payload.position,
        },
        context: action.payload.context,
        menuTemplate: action.payload.menuTemplate,
      };
    }

    case CLOSE_ACTION: {
      return {
        ...state,
        isOpened: false,
      };
    }

    default:
      return state;
  }
};
