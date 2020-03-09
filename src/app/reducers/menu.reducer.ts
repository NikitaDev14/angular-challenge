import { initialMenuState, MenuState } from 'src/app/states/menu.state';
import { CLOSE_ACTION, MenuAction, OPEN_ACTION } from 'src/app/actions/menu.action';

export const menuReducer = (
  state = initialMenuState,
  action: MenuAction,
): MenuState => {
  switch (action.type) {
    case OPEN_ACTION: {
      return {
        ...state,
        isOpened: true,
        position: {
          ...action.payload.position,
        },
        contextNode: action.payload.contextNode,
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
