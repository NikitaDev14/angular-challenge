import { ConnectionState, initialConnectionState } from 'src/app/states/connection.state';
import { CONNECTED_ACTION, ConnectionActions, DISCONNECTED_ACTION } from 'src/app/actions/connection.actions';

export const connectionReducer = (
  state: ConnectionState = initialConnectionState,
  action: ConnectionActions,
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
