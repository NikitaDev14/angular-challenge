import {ConnectionState, initialConnectionState} from 'src/app/states/connection.state';
import {CONNECTED_ACTION, ConnectionAction, DISCONNECTED_ACTION} from 'src/app/actions/connectionAction';

export const connectionReducer = (
  state: ConnectionState = initialConnectionState,
  action: ConnectionAction,
): ConnectionState => {
  switch (action.type) {
    case CONNECTED_ACTION: {
      return {
        isOnline: true,
      };
    }

    case DISCONNECTED_ACTION: {
      return {
        isOnline: false,
      };
    }

    default:
      return state;
  }
};
